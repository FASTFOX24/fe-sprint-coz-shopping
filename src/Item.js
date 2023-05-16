import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import "./Item.css";
import React from "react";

const Item = ({ product, openModal }) => {
  const price = () => {
    const string = product.price.toString();
    const characters = string.split("");
    for (let i = 3; i < characters.length; i += 4) {
      characters.splice(characters.length - i, 0, ",");
    }
    return characters.join("");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "21.5vw",
        height: "20vw",
        mb: "8px",
      }}
      onClick={() => {
        openModal(product.id);
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "80%",
          borderRadius: "16px",
          position: "relative",
        }}
      >
        <img
          src={
            product.type === "Brand"
              ? product.brand_image_url
              : product.image_url
          }
          className="itemImage"
        />
        <StarIcon className="starIcon" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "10%",
        }}
      >
        <Box
          sx={{ display: "flex", justifyContent: "space-between", mt: "8px" }}
        >
          <Typography className="type_all">
            {product.type === "Brand"
              ? product.brand_name
              : product.type === "Category"
              ? "#" + product.title
              : product.title}
          </Typography>
          <Typography
            className={
              product.type === "Product" ? "type_all type_Product " : "type_all"
            }
          >
            {product.type === "Brand"
              ? "관심고객수"
              : product.type === "Product"
              ? product.discountPercentage + "%"
              : ""}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>
            {product.type === "Exhibition" && product.sub_title}
          </Typography>
          <Typography>
            {product.type === "Brand"
              ? product.follower
              : product.type === "Product" && price() + "원"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Item;
