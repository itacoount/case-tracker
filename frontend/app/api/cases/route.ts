import { NextResponse } from "next/server";
import { Case } from "@/lib/types";

export async function POST(request: Request) {
  const data: Omit<Case, "id"> = await request.json();

  const newCase = { ...data, id: Date.now().toString() };

  return NextResponse.json(newCase, { status: 201 });
}
