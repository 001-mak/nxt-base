import { Itodo } from "@/interfaces"

interface TodoCardProps {
  data: Itodo
}

export default function TodoCard({ data }: TodoCardProps) {
  return (
    <>
    <div className="p-5">
      <div className="flex justify-between mb-3">
        <h1 className="font-bold text-2xl">{data.title}</h1>
        <div>
          <button className="mx-1 text-slate-500 px-1">Edit</button>
          <button className="mx-1 text-red-500 px-1">Delete</button>
        </div>
      </div>
      <div><p className="text-slate-200">{data.description}</p></div>
    </div>
    </>
  )
} 