import React, { useState } from "react";
import "../CSS/MainPage.css";
import { Box, Typography } from "@mui/material";
import Item from "../Components/Item";
import { itemData } from "../Recoil_Data";
import { useRecoilValue } from "recoil";
import ProductModal from "../Components/ProductModal";

const MainPage = () => {
  const itemList = useRecoilValue(itemData);
  const bookmarkList =
    JSON.parse(window.localStorage.getItem("bookmarkedItem")) || [];
  const slicedBookmarkList = bookmarkList.slice(0, 4);
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
  const items = itemList.slice(0, 4).map((e, idx) => {
    return (
      <Item key={`item_mainPage${idx}`} product={e} openModal={openModal} />
    );
  });
  const bookmarkedItemList = itemList.map((e, idx) => {
    if (slicedBookmarkList.includes(e.id)) {
      return (
        <Item key={`item_bookmark${idx}`} product={e} openModal={openModal} />
      );
    }
  });
  return (
    <Box className="mainPage">
      <Box className="box">
        <Typography variant="h5" className="text_listName">
          상품 리스트
        </Typography>
        <Box className="box_list">{items}</Box>
      </Box>
      <Box className="box">
        <Typography variant="h5" className="text_listName">
          북마크 리스트
        </Typography>
        {bookmarkList.length ? (
          <Box className="box_list">{bookmarkedItemList}</Box>
        ) : (
          <Box className="bookmark_empty">
            <Typography sx={{ color: "grey" }}>
              관심상품을 등록해보세요
            </Typography>
          </Box>
        )}
      </Box>
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

export default MainPage;
