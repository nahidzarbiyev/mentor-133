import './index.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
   <div>
<NavLink to={'/'} >Home</NavLink>
<NavLink to={'/about'} >about</NavLink>
<NavLink to={'/contact'}>contact</NavLink>
   </div>
  )
}

export default Navbar