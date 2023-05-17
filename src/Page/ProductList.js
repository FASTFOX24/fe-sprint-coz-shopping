import React, { useEffect, useRef, useState } from "react";
import { itemData } from "../Recoil_Data";
import { useRecoilValue } from "recoil";
import { Box } from "@mui/material";
import Item from "../Components/Item";
import "../CSS/ProductList.css";
import Category from "../Components/Category";
import ProductModal from "../Components/ProductModal";

const ProductList = () => {
  const data = useRecoilValue(itemData);
  const [category, setCategory] = useState("전체");
  const [productModal, setProductModal] = useState(false);
  const [productId, setProductId] = useState(null);
  const openModal = (id) => {
    setProductModal(true);
    setProductId(id);
  };
  const closeModal = () => {
    setProductId(null);
    setProductModal(false);
  };
  const itemList =
    category === "전체"
      ? data.map((e, idx) => {
          return <Item key={`item_ProductList${idx}`} product={e} openModal={openModal}/>;
        })
      : category === "상품"
      ? data
          .filter((el) => el.type === "Product")
          .map((e, idx) => {
            return <Item key={`item_ProductList${idx}`} product={e} openModal={openModal}/>;
          })
      : category === "카테고리"
      ? data
          .filter((el) => el.type === "Category")
          .map((e, idx) => {
            return <Item key={`item_ProductList${idx}`} product={e} openModal={openModal}/>;
          })
      : category === "기획전"
      ? data
          .filter((el) => el.type === "Exhibition")
          .map((e, idx) => {
            return <Item key={`item_ProductList${idx}`} product={e} openModal={openModal}/>;
          })
      : data
          .filter((el) => el.type === "Brand")
          .map((e, idx) => {
            return <Item key={`item_ProductList${idx}`} product={e} openModal={openModal}/>;
          });
  return (
    <Box className="productList">
      <Category category={category} setCategory={setCategory} />
      <Box className="itemList">{itemList}</Box>
      {productId ? (
        <ProductModal
          open={productModal}
          handleClose={closeModal}
          productId={productId}
        />
      ) : (
        <></>
      )}
    </Box>
  );
};

export default ProductList;
