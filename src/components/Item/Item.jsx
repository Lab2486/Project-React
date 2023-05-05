import "./Item.css";

import ItemCount from "../ItemCount/ItemCount";
function Item() {
  return (
    <div className="itemBody">
      <h3 className="itemTitle">Title</h3>
      <img className="itemImg" src="#" alt="#" />
      <p className="itemInfo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
        nostrum?
      </p>
      <p className="itemPrice">200</p>
      <ItemCount stock={7}></ItemCount>
    </div>
  );
}
export default Item;
