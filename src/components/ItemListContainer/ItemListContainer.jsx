import Item from "../Item/Item";
import "./ItemLIstContainer.css";
function ItemListContainer(props) {
  const ItemListContainerBg = { background: props.bgColor };
  return (
    <>
      <div className="ItemListContainer" style={ItemListContainerBg}>
        <h1>{props.greeting}</h1>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </div>
    </>
  );
}

export default ItemListContainer;
