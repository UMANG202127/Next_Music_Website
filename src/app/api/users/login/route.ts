import { connect } from "@/dbConfig/dbConfig";
import User from '@/models/userModel'
import { Console, error } from "console";
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'
import { sendEmail } from "@/utils/mailer";
import jwt from "jsonwebtoken"


connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {email, password} = reqBody

        console.log(reqBody);
        
        const user = await User.findOne({email})

        if (!user) {
            return NextResponse.json({error: "user does not exist"}, {status: 400})
        }
        console.log("user exist");

        const validPassword = await bcryptjs.compare(password, user.password)

        if (!validPassword) {
            return NextResponse.json({error: "Wrong Password"}, {status: 400})
        }

        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: '1h' })

        const response = NextResponse.json({
            message: "User Logged In",
            success: true
        })

        response.cookies.set("token", token, {
            httpOnly: true
        })

        return response 

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}