import React, { useState } from "react";
import "./MainPage.css";
import { Box, Typography } from "@mui/material";
import Item from "./Item";
import { itemData } from "./Recoil_Data";
import { useRecoilValue } from "recoil";
import ProductModal from "./ProductModal";

const MainPage = () => {
  const itemList = useRecoilValue(itemData);
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
  return (
    <Box className="mainPage">
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: "16px" }}>
          상품 리스트
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {items}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "20vw",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: "16px" }}>
          북마크 리스트
        </Typography>
        <Box className="bookmark_empty">
          <Typography sx={{ color: "grey" }}>
            관심상품을 등록해보세요
          </Typography>
        </Box>
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
