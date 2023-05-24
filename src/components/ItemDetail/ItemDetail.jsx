import ItemCount from "../ItemCount/ItemCount";
import { useParams, Link } from "react-router-dom";
import "./ItemDetail.css";
import pokemons from "../../data/pokemons";
import { useEffect, useState } from "react";

function getPokeData(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const requestedPokemon = pokemons.find((item) => item.id === Number(id));

      resolve(requestedPokemon);
    }, 1000);
  });
}

function ItemDetail() {
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getPokeData(id).then((respuesta) => {
      setPokemon(respuesta);
    });
  }, []);

  function onAddToCart(count) {
    alert(`Agregaste ${count} ${pokemon.name} al carrito`);
  }
  return (
    <div className="itemDetail">
      <Link to="/">
        <button className="detailCloseBtn">X</button>
      </Link>
      <h2 className="detailTitle">{pokemon.name}</h2>
      <p className="detailType">Type: {pokemon.category}</p>
      <p className="detailInfo">{pokemon.info}</p>
      <p className="detailPrice">$:{pokemon.price}</p>
      <img className="detailImg" src={pokemon.img} alt={pokemon.name} />
      <ItemCount onAddToCart={onAddToCart} stock={4} />
    </div>
  );
}
export default ItemDetail;
