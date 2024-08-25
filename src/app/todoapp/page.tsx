"use client";
import { useState, useEffect } from "react";
import TodoCard from "@/components/TodoCard";
import { Itodo } from "@/interfaces";
import { getTodos } from "@/actions/serverActions";

export default function Page() {
  const [todos, setTodos] = useState<Itodo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const fetchedTodos = await getTodos();
      setTodos(fetchedTodos);
    };
    fetchTodos();
  }, []);

  return (
    <>
      {todos && todos.map((todo, index) => (
        <TodoCard key={index} data={todo} />
      ))}
    </>
  );
}