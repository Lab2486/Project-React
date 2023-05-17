import ItemList from "../ItemList/ItemList";
import "./ItemLIstContainer.css";

function ItemListContainer(props) {
  const ItemListContainerBg = { background: props.bgColor };
  return (
    <div className="ItemListContainer" style={ItemListContainerBg}>
      <h1 className="greeting">{props.greeting}</h1>
      <ItemList></ItemList>
    </div>
  );
}

export default ItemListContainer;
