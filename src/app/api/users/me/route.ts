import { connect } from "@/dbConfig/dbConfig";
import User from '@/models/userModel'
import { Console, error } from "console";
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'
import { sendEmail } from "@/utils/mailer";
import jwt from "jsonwebtoken"
import { getDataFromToken } from "@/utils/getDataFromToken";


connect()

export async function POST(request: NextRequest) {
    //extract data from token
    const userId = await getDataFromToken(request)
    const user = await User.findOne({_id: userId}).select('-password')
    // check if there is no user
    return NextResponse.json({
        message: "user found",
        data: user
    })
}