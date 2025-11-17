import "./App.css"
import Header from './components/Header/Header'
import IdCard from './components/IdCard/IdCard'

export default function App() {
  return (
    <>
    {/* <div className="m-2 p-2 text-center font-bold">My Portfolio website</div> */}
    <div className="h-full flex">
      <Header />
      <IdCard /> 
    </div> 
    <div className="m-2 p-2 text-center font-bold h-full">man is at work</div>   
    </>
  )
}
