import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
  const institutes = await prisma.institute.findMany()
  .then(res => res)

  return NextResponse.json(institutes)
}