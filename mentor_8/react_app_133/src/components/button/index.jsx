/* eslint-disable react/prop-types */

import axios from "axios"

const Button = (props) => {
    let {setImage} = props
    const generateImg = ()=>{
        axios.get(`https://api.thecatapi.com/v1/images/search`)
        .then(data=>setImage(data.data[0]))
        }
  return (
    <button onClick={()=>generateImg()}>
        generate Image
      </button>
  )
}

export default Button