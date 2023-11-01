import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

const Details = () => {
    const {id} = useParams()
const [data,setData] = useState({})
const navigator = useNavigate()
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res=>res.json())
        .then(st=>setData(st))
      
    
   
    }, [id])


    
  return (
    <>
    <div>
        <h3>{data?.userId}</h3>
        <h1>{data?.title}</h1>
        <button onClick={()=>navigator('/about')}>Back</button>
    </div>
    </>
  )
}

export default Details