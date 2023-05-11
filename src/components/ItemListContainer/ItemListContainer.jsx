import Item from "../Item/Item";
import "./ItemLIstContainer.css";
import pokemons from "../../data/pokemons";

function ItemListContainer(props) {
  const ItemListContainerBg = { background: props.bgColor };
  return (
    <div className="ItemListContainer" style={ItemListContainerBg}>
      {/* <h1 className="greeting">{props.greeting}</h1> */}
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

export default ItemListContainer;
