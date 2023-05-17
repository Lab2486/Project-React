import { useEffect, useState } from "react";
import pokemons from "../../data/pokemons";
import "./ItemDetailContainer.css";
import ItemCount from "../ItemCount/ItemCount";

function getPokeData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(pokemons[5]);
    }, 2000);
  });
}

function ItemDetailContainer() {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    getPokeData().then((respuesta) => {
      setPokemon(respuesta);
    });
  }, []);

  return (
    <div className="detailContainer">
      <div className="itemDetail">
        <button className="detailCloseBtn">X</button>
        <h2 className="detailTitle">{pokemon.name}</h2>
        <p className="detailType">Type: {pokemon.type}</p>
        <p className="detailInfo">{pokemon.info}</p>
        <p className="detailPrice">$:{pokemon.price}</p>
        <img className="detailImg" src={pokemon.img} alt={pokemon.name} />
        <ItemCount stock={4} />
      </div>
    </div>
  );
}
export default ItemDetailContainer;
