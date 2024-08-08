import { connect } from "@/dbConfig/dbConfig";
import Department from "@/models/department";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(req: NextRequest) {
  try {
    const data = await Department.aggregate([
      { $project: { _id: 0, name: 1 } },
    ]);
    const departments: any = [];
    data.map((department) => {
      departments.push(department.name);
    });
    return NextResponse.json(departments);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name }: any = await req.json();
    const department = new Department({ name });
    await department.save();
    return NextResponse.json({ name: name });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
