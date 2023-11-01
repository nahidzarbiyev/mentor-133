import ReactDOM from 'react-dom/client'
import './assets/css/style.css'
import { RouterProvider } from 'react-router-dom'
import  routes  from './routes/index.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={routes} />

)
