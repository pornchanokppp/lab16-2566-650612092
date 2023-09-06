import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Pornchanok punin",
    studentId: "650612092",
  });
};
