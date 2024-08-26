import {connect} from "@/dbConfig/dbConnect";
import Card from "@/models/investmentCardModel";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest){
    try {
        await connect();

        const reqBody = await request.json()
        const { tag,
          cardImage,
          title,
          location,
          description,
          totalPrice,
          getPrice,
          securityType,
          investmentMultiple,
          maturity,
          minInvestment,} = reqBody;

        const newCard = new Card({
          tag,
          cardImage : "https://picsum.photos/500/550",
          title,
          location,
          description,
          totalPrice,
          getPrice,
          securityType,
          investmentMultiple,
          maturity,
          minInvestment,
        })

        const savedCard = await newCard.save()
        console.log(savedCard);

  
        return NextResponse.json({
            message: "Card created successfully",
            success: true,
            savedCard
        })
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}    

export async function GET(request: NextRequest){
    try {
        await connect();
        const response = await Card.find()

        return NextResponse.json({
            message: "Card Retrieved successfully",
            success: true,
            response
        })
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}     
