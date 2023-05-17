import "./CSS/App.css";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Page/MainPage";
import { Box } from "@mui/material";
import Footer from "./Components/Footer";
import ProductList from "./Page/ProductList";
import { useSetRecoilState } from "recoil";
import { itemData } from "./Recoil_Data";
import { useEffect } from "react";
import BookmarkList from "./Page/BookmarkList";

function App() {
  const setItemList = useSetRecoilState(itemData);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://cozshopping.codestates-seb.link/api/v1/products"
        );
        const data = await response.json();
        setItemList(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <Box className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/product/list" element={<ProductList />} />
          <Route exact path="/bookmark" element={<BookmarkList />} />
        </Routes>
      </Box>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
