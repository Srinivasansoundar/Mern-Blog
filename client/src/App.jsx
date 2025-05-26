import {BrowserRouter,Routes,Route} from "react-router-dom"
import About from "./pages/About"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import Projects from "./pages/Projects"
import Home from "./pages/Home"
import FooterCom from "./Components/Footer"
import Header from "./Components/Header"
import PrivateRoute from "./Components/PrivateRoute"
import Adminprivate from "./Components/Adminprivate"
import CreatePost from "./pages/CreatePost"
import UpdatePost from "./pages/UpdatePost"
// import { Footer } from "flowbite-react"
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element ={<Home/>}/>  
      <Route path="/about" element ={<About/>}/>  
      <Route path="/sign-in" element ={<SignIn/>}/>
      <Route path="/sign-up" element ={<SignUp/>}/>
      <Route element={<PrivateRoute/>}>
         <Route path="/dashboard" element ={<Dashboard/>}/>  
      </Route>
       <Route element={<Adminprivate/>}>
         <Route path="/create-post" element ={<CreatePost/>}/>
         <Route path ='/update-post/:postId' element={<UpdatePost/>}/>  
      </Route>
      <Route path="/projects" element ={<Projects/>}/>  
    </Routes>
    <FooterCom/>
    </BrowserRouter>
  )
}
