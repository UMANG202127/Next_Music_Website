import {connect} from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextResponse, NextRequest } from "next/server"
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";


connect()

export async function POST(request: NextRequest) {
    try {
        
        const reqBody =await request.json()
        const {email, password} = reqBody;
        console.log(reqBody);

        //checck if the user exists 
        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({error: "no user exist"}, {status: 400})
        }
        console.log("user exists")

        //check if the password is correct
        const validPassword = await bcryptjs.compare(password, user.password)

        if (!validPassword) {
            return NextResponse.json({error: "invalid credentials"}, {status: 400})
        }

        //create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        //create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!,{expiresIn: "1d"})

        const Response = NextResponse.json({
            message: "login successful",
            success: true,

        })

        Response.cookies.set("token", token,{httpOnly: true})

        return Response;


    } catch (error: any) {
        console.log("api error");
        return NextResponse.json({error: error.message}, {status: 500})
    }
}