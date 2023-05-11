import "./Item.css";

import ItemCount from "../ItemCount/ItemCount";
function Item(props) {
  return (
    <div className="itemBody">
      <h3 className="itemTitle">{props.name}</h3>
      <img className="itemImg" src={props.img} alt="#" />
      <p className="itemType">
        Type: <strong>{props.type}</strong>
      </p>
      <p className="itemInfo">{props.info}</p>
      <p className="itemPrice">${props.price}</p>
      {/* <ItemCount stock={7}></ItemCount> */}
      <p className="itemID">Id:{props.id}</p>
    </div>
  );
}
export default Item;
