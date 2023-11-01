import {
    createBrowserRouter,

  } from "react-router-dom";
import Layout from "../layout/main";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Error from "../pages/error";
import Details from "../pages/details";


 const routes = createBrowserRouter([{

     path:'/',
     element:<Layout/>,
     children:[
        {
          path:'about',
          element:<About/>
        },
        {
          path:'contact',
          element:<Contact/>
        },
        {
          path:'about/:id',
          element:<Details/>
        }
  
     ]
      
},
{
  path:'*',
  element:<Error/>

}])


export default routes