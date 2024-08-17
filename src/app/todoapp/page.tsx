import TodoCard from "@/components/TodoCard"
import { Itodo } from "@/interfaces"
export default function page() {
    const data:Itodo = {
        title: 'asd',
        description: 'asd',
    }
  return (
    <>
    <TodoCard data = {data}/>
    </>
  )
}
