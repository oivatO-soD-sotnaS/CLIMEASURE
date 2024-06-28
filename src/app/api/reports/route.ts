import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
  const id_institute = Number(req.nextUrl.searchParams.get("institute"))
  const reports = await prisma.report.findMany({
    where: {
      id_institute: id_institute,
      timestamp: {
        gte: new Date(new Date().setDate(new Date().getDate() - 7)),
        lte: new Date(),
      },
    },
    orderBy: {
      timestamp: 'asc',
    },
  })
  .then(res => res)
  
    
  return NextResponse.json(reports)
}