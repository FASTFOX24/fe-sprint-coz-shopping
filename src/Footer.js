import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderTop: "1px lightgray solid",
        height: "64px",
      }}
    >
      <Typography sx={{ textAlign: "center", fontSize: "13px", color: "grey" }}>
        개인정보 처리방침 | 이용 약관 <br />
        All rights reserved @ CodeStates
      </Typography>
    </Box>
  );
};

export default Footer;
