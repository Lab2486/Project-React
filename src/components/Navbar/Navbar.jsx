import "./NavbarStyles.css";
import CartWidget from "../Cart/CartWidget";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <h1>
          <Link className="logo" to="/">
            PokemOnion
          </Link>
        </h1>
        <div className="navBtns">
          <ul>
            <li>
              <Link className="navLink" to="/">
                All
              </Link>
            </li>
            <li>
              <Link to="/category/Fire" className="navLink">
                Fire
              </Link>
            </li>
            <li>
              <Link to="/category/Water" className="navLink">
                Water
              </Link>
            </li>
            <li>
              <Link to="/category/Electric" className="navLink">
                Electric
              </Link>
            </li>
            <li>
              <Link to="/category/Grass" className="navLink">
                Grass
              </Link>
            </li>
            <li>
              <Link to="/category/Normal" className="navLink">
                Normal
              </Link>
            </li>
            <li>
              <Link to="/category/Dragon" className="navLink">
                Dragon
              </Link>
            </li>
            <li>
              <Link to="/category/Ghost" className="navLink">
                Ghost
              </Link>
            </li>
          </ul>
        </div>
        <CartWidget />
      </nav>
    </>
  );
}

export default Navbar;
