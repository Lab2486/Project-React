import "./Item.css";
import { Link } from "react-router-dom";
function Item(props) {
  return (
    <>
      <div className="itemBody">
        <h3 className="itemTitle">{props.name}</h3>
        <img className="itemImg" src={props.img} alt="#" />
        <p className="itemType">
          Type: <strong>{props.type}</strong>
        </p>
        <p className="itemPrice">${props.price}</p>
        <Link to={`/pokemon/${props.id}`} className="detailsBtn">
          View Details
        </Link>
      </div>
    </>
  );
}
export default Item;
