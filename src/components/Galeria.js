import "../assets/css/galeria.css";
import Heart from "./Heart";
import Context from "../Context";
import { useContext, useState } from "react";

export default function Galeria() {
const {fotos, setFotos} = useContext(Context)
const [favs, setFavs] = useState([])

const agregaFavorito = (id) => {
  const fotoIndex = fotos.findIndex((p) => p.id === id)
  fotos[fotoIndex].favorito = true;
  setFavs(fotos[fotoIndex])
  console.log(fotos)
}

  return (
    <div className="galeria grid-columns-5 p-3" >
      {fotos.map((foto) => 
        <div className="foto" key={ foto.id } onClick={() => agregaFavorito(foto.id) }>
          <Heart filled={ foto.favorito }/>
          <p>{ foto.desc }</p>
          <img src={ foto.src }></img>
        </div>
      )}
      
    </div>
  );
}

