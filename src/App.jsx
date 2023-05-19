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
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="pokemon/:id" element={<ItemDetailContainer />}></Route>
          <Route
            path="/category/:typeid"
            element={<ItemListContainer />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
