import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemContainer from "./components/ItemListContainer/ItemListContainer";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <ItemContainer
        greeting="Bienvenido a PokemOnion el sition donde podras comprar pokemones rescatados de manera 100% legal 😉"
        bgColor="pink"
      />
    </>
  );
}

export default App;
