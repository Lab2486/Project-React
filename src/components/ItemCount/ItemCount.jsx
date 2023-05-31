import { useState } from "react";
import "./ItemCount.css";
import { Link } from "react-router-dom";
function ItemCount({ stock, onAddToCart }) {
  let [count, setCount] = useState(1);
  function handleAdd() {
    if (count < stock) setCount(++count);
  }
  function handleReduce() {
    if (count > 1) setCount(count - 1);
  }
  let isDisableSubstract = count === 1;
  let isDisableAdd = count === stock;

  function onAddToCart() {
    alert(`Compraster ${count} pokemon`);
  }
  return (
    <div className="countContainer">
      <div className="countBtnsConteiner">
        <Link
          disabled={isDisableSubstract}
          className="countBtns"
          onClick={handleReduce}
        >
          -
        </Link>
        <p>{count}</p>
        <Link disabled={isDisableAdd} className="countBtns" onClick={handleAdd}>
          +
        </Link>
      </div>
      <div>
        <Link
          onClick={() => {
            onAddToCart(count);
          }}
          className="buyBtn"
        >
          Add to Bag
        </Link>
      </div>
    </div>
  );
}
export default ItemCount;
