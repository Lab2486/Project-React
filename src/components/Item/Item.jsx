import "./Item.css";
function Item(props) {
  return (
    <div className="itemBody">
      <h3 className="itemTitle">{props.name}</h3>
      <img className="itemImg" src={props.img} alt="#" />
      <p className="itemType">
        Type: <strong>{props.type}</strong>
      </p>
      <p className="itemPrice">${props.price}</p>
      <button>View Details</button>
    </div>
  );
}
export default Item;
