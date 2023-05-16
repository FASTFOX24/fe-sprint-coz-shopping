import { Box, Typography } from "@mui/material";
import "./Category.css";
import React from "react";
import img_0 from "./image/이미지.png";
import img_1 from "./image/이미지 (1).png";
import img_2 from "./image/이미지 (2).png";
import img_3 from "./image/이미지 (3).png";
import img_4 from "./image/이미지 (4).png";

const Category = ({ category, setCategory }) => {
  const images = [
    { src: img_0, categoryName: "전체" },
    { src: img_1, categoryName: "상품" },
    { src: img_2, categoryName: "카테고리" },
    { src: img_3, categoryName: "기획전" },
    { src: img_4, categoryName: "브랜드" },
  ];
  const categoryBtns = images.map((e, idx) => {
    return (
      <Box
        key={`categoryBtn${idx}`}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: "0px 16px",
        }}
        onClick={() => {
          setCategory(e.categoryName);
        }}
      >
        <img src={`${e.src}`} className="image" />
        <Typography
          cursor={"pointer"}
          className={e.categoryName === category ? "selected" : ""}
        >
          {e.categoryName}
        </Typography>
      </Box>
    );
  });
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "16px 0px",
      }}
    >
      {categoryBtns}
    </Box>
  );
};

export default Category;
