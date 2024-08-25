"use server"
import { connectDb } from "@/lib/db";
import Todo from "@/models/todo";

export async function getTodos() {
    await connectDb();
    const todos = await Todo.find();
    
    // Convert MongoDB documents to plain objects
    const plainTodos = todos.map(todo => ({
        id: todo._id.toString(), // Convert ObjectId to string
        title: todo.title,
        description: todo.description,
        createdAt: todo.createdAt.toISOString(), // Convert Date to string
        updatedAt: todo.updatedAt.toISOString(), // Convert Date to string
    }));

    console.log(plainTodos);
    return plainTodos;
}