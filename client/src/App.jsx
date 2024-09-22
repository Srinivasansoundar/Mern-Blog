import {BrowserRouter,Routes,Route} from "react-router-dom"
import About from "./pages/About"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import Projects from "./pages/Projects"
import Home from "./pages/Home"
import FooterCom from "./Components/Footer"
import Header from "./Components/Header"
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
      <Route path="/dashboard" element ={<Dashboard/>}/>      
      <Route path="/projects" element ={<Projects/>}/>  
    </Routes>
    <FooterCom/>
    </BrowserRouter>
  )
}
