import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Category from "../Components/Category";
import "../CSS/ProductList.css";
import ProductModal from "../Components/ProductModal";
import { useRecoilValue } from "recoil";
import { itemData } from "../Recoil_Data";
import Item from "../Components/Item";

const BookmarkList = () => {
  const bookmarkList = JSON.parse(
    window.localStorage.getItem("bookmarkedItem")
  );
  const itemList = useRecoilValue(itemData);
  console.log(itemList)
  const [filterdList, setFilteredList] = useState([]);
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
  const bookmarkedItemList = itemList.map((e, idx) => {
    if (bookmarkList.includes(e.id)) {
      return (
        <Item key={`item_bookmark${idx}`} product={e} openModal={openModal} />
      );
    }
  });
  const filtered = filterdList.map((e, idx) => {
    if (bookmarkList.includes(e.id)) {
      return (
        <Item key={`item_bookmark${idx}`} product={e} openModal={openModal} />
      );
    }
  });
  useEffect(() => {
    // console.log(category)
    // // console.log(itemList[0].type)
    // console.log(itemList.filter((el) => el.type === category))
    setFilteredList(itemList.filter((el) => el.type === category));
  }, [category]);
  return (
    <Box className="productList">
      <Category category={category} setCategory={setCategory} />
      {bookmarkList.length ? (
        <Box className="itemList">
          {category === "전체" ? bookmarkedItemList : filtered}
        </Box>
      ) : (
        <Typography className="emptyList">
          관심상품 목록이 비어있습니다.
          <br />
          새로운 상품을 추가해보세요!
        </Typography>
      )}
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

export default BookmarkList;
