import { useState } from "react";
import axios from 'axios'
import "./index.scss";
import Button from "../../components/button";
import Image from "../../components/image";
function Home() {

  const [toggle, setToggle] = useState(true)
const [img, setImg] = useState('')

  // const mystyle = {
  //   color: "white",
  //   backgroundColor: "DodgerBlue",
  //   padding: "10px",

  // };
  // const clickFn = ()=>{
  //   setToggle(!toggle)
  //   console.log(toggle);
  // }

  return (
   <>
     {/* <div className="home" >
      {5+4}
      {'aydin'.toUpperCase()}
      <div className="elem">
        <input type="text"  onChange={(e)=>console.log(e.target.value)}/>
      </div>
     </div> */}
     <div style={{display:"flex", flexDirection:'column', justifyContent:'center',alignItems:'center', gap:50}}>
      {/* <button onClick={clickFn} > click  </button> */}
  
   <Button setImage={setImg} />
   <Image img={img}/>
  
     </div>

   </>
  )

}
export default  Home