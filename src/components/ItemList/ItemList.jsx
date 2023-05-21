import Item from "../Item/Item";
import "./ItemLIst.css";
function ItemList(props) {
  return (
    <div className="ItemList">
      {props.products.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          info={item.info}
          img={item.img}
          type={item.category}
          price={item.price}
        ></Item>
      ))}
    </div>
  );
}
export default ItemList;
