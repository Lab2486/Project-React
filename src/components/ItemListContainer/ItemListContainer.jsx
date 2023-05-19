import pokemons from "../../data/pokemons";
import ItemList from "../ItemList/ItemList";
import "./ItemLIstContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function getPokeData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(pokemons)), 1000;
  });
}

function ItemListContainer() {
  let [pokemon, setPokemon] = useState([]);
  const { categoryid } = useParams();

  useEffect(() => {
    getPokeData().then((respuesta) => {
      if (categoryid) {
        const filterProducts = respuesta.filter(
          (item) => item.type === categoryid
        );
        setPokemon(filterProducts);
      } else {
        setPokemon(respuesta);
      }
    });
  }, [categoryid]);

  return <ItemList pokemones={pokemon} />;
}

export default ItemListContainer;
