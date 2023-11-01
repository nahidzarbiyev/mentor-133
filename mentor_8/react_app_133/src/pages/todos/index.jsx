import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Todos = () => {
    const [info, setInfo] = useState([])
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/todos/`)
      .then(res=>res.json())
      .then(data=>setInfo(data))
    
   
   
    }, [])
  return (
    <div >{
        info?.splice(0,20).map((todo)=>(
            <Link to={`/about/${todo?.id}`} style={{border:'1px solid red', padding:'10px',cursor:'pointer', display:'flex',flexDirection:'column'}} key={todo?.id}>{todo.title}</Link>
        ))
        }

    </div>
  )
}

export default Todos