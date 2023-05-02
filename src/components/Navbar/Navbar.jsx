import "./NavbarStyles.css";
import Button from "./Buttons";
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
        <a href="index.html">
          <img
            className="navbar-brand"
            src="./public/pokemonion-logo.png"
            alt=""
          />
        </a>
        <div className="navBtns">
          <ul>
            <li>
              <Button color="#ff7e67" texto="All" onClick={All} />
            </li>
            <li>
              <Button color="#ff7e67" texto="Fire" onClick={Fire} />
            </li>
            <li>
              <Button color="#ff7e67" texto="Water" onClick={Water} />
            </li>
            <li>
              <Button color="#ff7e67" texto="Electric" onClick={Electric} />
            </li>
            <li>
              <Button color="#ff7e67" texto="Plant" onClick={Plant} />
            </li>
          </ul>
        </div>
        <div className="cartContenedor">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-bag"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
