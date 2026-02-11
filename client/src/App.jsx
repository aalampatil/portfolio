import { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import IdCard from "./components/IdCard/IdCard";
import axios from "./api/axios.js";
import Introduction from "./components/Introduction/Introduction.jsx";

export default function App() {
  useEffect(() => {
    if (!sessionStorage.getItem("visited")) {
      axios.post("/api/features/update-visitor-count");
      sessionStorage.setItem("visited", "true");
    }
  }, []);
  return (
    <>
      <div className="">
        <Header />
        <Introduction />
        <Footer />
      </div>
    </>
  );
}
