import pokemons from "../../data/pokemons";
import ItemList from "../ItemList/ItemList";
import "./ItemLIstContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function getPokeData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(pokemons), 1000);
  });
}


function ItemListContainer() {
  let [products, setProducts] = useState([]);
  const { categoryid } = useParams();

  useEffect(() => {
    getPokeData().then((respuesta) => {
      if (categoryid) {
        const filterProducts = respuesta.filter(
          (item) => item.category === categoryid
        );
        setProducts(filterProducts);
      } else {
        setProducts(respuesta);
      }
    });
  }, [categoryid]);

  return <ItemList products={products} />;
}

export default ItemListContainer;
