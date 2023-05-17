import pokemons from "../../data/pokemons";
import Item from "../Item/Item";
import "./ItemLIst.css";
function ItemList() {
  return (
    <div className="ItemList">
      {pokemons.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          info={item.info}
          img={item.img}
          type={item.type}
          price={item.price}
        ></Item>
      ))}
    </div>
  );
}
export default ItemList;
