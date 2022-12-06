import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

import Context from "./Context";
import { useEffect, useState } from "react";

export default function App() {
  const endpoint = "/fotos.json";
  const[ fotos, setFotos ] = useState([])

  const getFotos = async () => {
    const data = await fetch(endpoint);
    const res = await data.json();
    console.log(res)
    let pics = res.photos.map(pic => ({
      id: pic.id,
      src: pic.src.tiny,
      desc: pic.alt,
      favorito: false
    }))
    setFotos(pics)
    console.log(pics)
  }

  useEffect(() => {
    getFotos();
  }, [])

  return (
    <div className="App">
      <Context.Provider value={ {fotos, setFotos} }>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
      
      </Context.Provider>
    </div>
  );
}
