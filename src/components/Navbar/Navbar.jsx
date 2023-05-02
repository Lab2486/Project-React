import "./NavbarStyles.css";
import Button from "./Buttons";
import Cart from "../Cart/CartWidget";
function All() {
  alert("All Pochimons");
}
function Fire() {
  alert("Fire Pochimons");
}
function Water() {
  alert("Water Pochimons");
}
function Electric() {
  alert("Electric Pochimons");
}
function Plant() {
  alert("Plant Pochimons");
}

function Navbar() {
  return (
    <>
      <nav>
        <a className="logo" href="index.html">
          <img
            className="navbar-brand"
            src="./public/pokemonion-logo.png"
            alt=""
          />
        </a>
        <div className="navBtns">
          <ul>
            <li>
              <Button color="none" texto="All" onClick={All} />
            </li>
            <li>
              <Button color="none" texto="Fire" onClick={Fire} />
            </li>
            <li>
              <Button color="none" texto="Water" onClick={Water} />
            </li>
            <li>
              <Button color="none" texto="Electric" onClick={Electric} />
            </li>
            <li>
              <Button color="none" texto="Plant" onClick={Plant} />
            </li>
          </ul>
        </div>
        <Cart></Cart>
      </nav>
    </>
  );
}

export default Navbar;
