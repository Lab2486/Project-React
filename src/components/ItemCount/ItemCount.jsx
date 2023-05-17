import { useState } from "react";
import "./ItemCount.css";
function ItemCount({ stock }) {
  let [count, setCount] = useState(1);
  function handleAdd() {
    if (count < stock) setCount(++count);
  }
  function handleReduce() {
    if (count > 1) setCount(count - 1);
  }
  let isDisableSubstract = count === 1;
  let isDisableAdd = count === stock;
  return (
    <div className="countContainer">
      <div className="countBtnsConteiner">
        <button
          disabled={isDisableSubstract}
          className="countBtns"
          onClick={handleReduce}
        >
          -
        </button>
        <p>{count}</p>
        <button
          disabled={isDisableAdd}
          className="countBtns"
          onClick={handleAdd}
        >
          +
        </button>
      </div>
      <div>
        <button className="buyBtn">Add to Bag</button>
      </div>
    </div>
  );
}
export default ItemCount;