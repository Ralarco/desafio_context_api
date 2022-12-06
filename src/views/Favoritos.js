import Context from "../Context";
import { useContext } from "react";

export default function Favoritos() {
  const {fotos, setFotos} = useContext(Context)
  console.log("favPics") 

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="galeria grid-columns-4 p-3">
        {fotos
        .filter((foto) => foto.favorito)
        .map((foto) => 
          
            <img src={ foto.src } key={ foto.id }/>
        
        )}
      </div>
    </div>
  );
}
