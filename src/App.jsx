import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Item from "./components/Item/Item";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <ItemListContainer
        greeting="Bienvenido a PokemOnion el sition donde podras comprar pokemones rescatados de manera 100% legal 😉"
        bgColor="white"
      >
        <Item></Item>
      </ItemListContainer>
    </>
  );
}

export default App;
