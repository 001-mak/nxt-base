import Link from "next/link"

export const Navbar = ()=>{
    return(
        <>
        <div className="flex justify-between items-center bg-slate-700 px-8 py-4 rounded">
            <Link  href="/todoapp" className="font-bold">abc. Todo</Link>
            <Link  href="/todoapp/add" className="font-bold bg-white text-slate-800 px-3 py-1 rounded hover:bg-slate-100">Add +</Link>
        </div>
        </>
    )
}
