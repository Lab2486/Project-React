import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <ItemListContainer
          greeting="Bienvenido a PokemOnion el sition donde podras comprar pokemones rescatados de manera 100% legal 😉"
          bgColor="white"
        ></ItemListContainer>
        <ItemDetailContainer></ItemDetailContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
