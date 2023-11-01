import { useEffect, useState } from "react"

const Count = () => {
    const [count, setCount] = useState(0)
useEffect(()=>{
console.log('component rendering');
return console.log('ummounting');
},[])
useEffect(()=>{
    console.log('count rendering  '+ count);
},[count])
  return (
<div>
    <h1>count:{count}</h1>
    <button  onClick={()=>setCount(count=>count+1)}>inc+</button>
</div>
  )
}

export default Count