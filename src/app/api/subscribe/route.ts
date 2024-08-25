import {connect} from "@/dbConfig/dbConnect";
import SubscribeEmail from "@/models/subscribeModel";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

type EmailDoc = {
    _id: string;
    email: string;
  };

export async function POST(request: NextRequest){
    try {
        await connect();
        
        const reqBody = await request.json()
        const { mail } = reqBody;

        const Mail = new SubscribeEmail({
          mail
        })

        const savedMail = await Mail.save()
        console.log(savedMail);

  
        return NextResponse.json({
            message: "Email saved successfully",
            success: true,
            savedMail
        })
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}      

export async function GET(request: NextRequest){
    try {
        await connect();
        const response :any = await SubscribeEmail.find({})
  
        return NextResponse.json({
            message: "Email retrieved",
            success: true,
            response
        })
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}