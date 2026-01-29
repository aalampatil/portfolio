import { useEffect } from "react"
import "./App.css"
import Footer from "./components/Footer/Footer"
import Header from './components/Header/Header'
// import IdCard from './components/IdCard/IdCard'
import Intro from "./components/Intro/Intro"
import axios from "./api/axios"

export default function App() {

  useEffect (() => {
    axios.post("/api/features/update-visitor-count")
  },[])
  return (
    <>
    <div className="">
      <Header />
      <Intro /> 
      <Footer />
    </div> 
     
    </>
  )
}
