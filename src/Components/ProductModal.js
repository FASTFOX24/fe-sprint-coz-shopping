import { Box, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
import { itemData } from "../Recoil_Data";
import { useRecoilValue } from "recoil";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "58vw",
  height: "40vw",
};
const ProductModal = ({ open, handleClose, productId }) => {
  const itemList = useRecoilValue(itemData);
  const selectedItem = itemList.filter((e) => e.id === productId)[0];
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <IconButton
          sx={{
            position: "absolute",
            margin: "16px",
            color: "white",
            right: 0,
          }}
          onClick={() => {
            handleClose();
          }}
        >
          <CloseIcon
            sx={{
              fontSize: "35px",
            }}
          />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            position: "absolute",
            margin: "16px",
            bottom: 0,
            alignItems: "center",
          }}
        >
          <StarIcon sx={{ color: "darkgrey", fontSize: "30px", mr: "4px" }} />
          <Typography sx={{ fontSize: "25px", color: "white" }}>
          {
            selectedItem.type === "Brand"
              ? selectedItem.brand_name
              : selectedItem.title
          }
          </Typography>
        </Box>
        <img
          src={
            selectedItem.type === "Brand"
              ? selectedItem.brand_image_url
              : selectedItem.image_url
          }
          style={{ width: "58vw", height: "40vw", borderRadius: "16px" }}
        />
      </Box>
    </Modal>
  );
};

export default ProductModal;
