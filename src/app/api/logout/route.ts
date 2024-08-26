import {connect} from "@/dbConfig/dbConnect";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest){
    try {
        await connect();

        const response = NextResponse.json({
            message:"Logged Out Successfully",
            success: true
        })
        console.log("Logged Out Successfully")

        response.cookies.set("token","",{
            httpOnly:true,
            expires:new Date(0)
        })

        return response
        
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}