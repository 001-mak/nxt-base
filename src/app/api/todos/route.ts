import { Itodo } from "@/interfaces";
import { connectDb } from "@/lib/db";
import Todo from "@/models/todo";
import { NextResponse } from "next/server";

export async function POST(request: { json: () => PromiseLike<{ title: any; description: any; }> | { title: any; description: any; }; }) {
    const { title, description } = await request.json();
    console.log(request)
    try {
      await connectDb();
      const todo = await Todo.create({ title, description });
      console.log(todo)
      return NextResponse.json({ message: "Topic Created", resp:todo }, { status: 201 });
    } catch (error) {
      console.log(error)
    }
  }

export async function GET() {
  await connectDb();
  const topics = await Todo.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request: { nextUrl: { searchParams: { get: (arg0: string) => any; }; }; }) {
  const id = request.nextUrl.searchParams.get("id");
  await connectDb();
  await Todo.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}