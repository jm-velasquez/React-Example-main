import React from "react";
import RM from "../../assets/RM.jpeg";
import PK from "../../assets/POKE.jpeg";
import MV from "../../assets/MV.jpeg";

import "../../style/Home/Home.css";

export default function Home() {
  return (
    <div className="container-home2">
     <article className="card 4" >
        <h3>Ricky and Morty</h3>
        <img src={RM}  alt="RickandMorty" width="400" height="300" />
     </article>
     <article className="card 4">
          <h3>Pokemones</h3>
         <img src={PK} alt="Poke" width="400" height="300" />
     </article>
     <article className="card">
        <h3>Marvel</h3>
        <img src={MV} alt="Marvel" width="400" height="300" />
     </article>
      
      
      
    </div>    
  );
}
