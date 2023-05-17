import React, { useState } from "react";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import "../CSS/NavBar.css";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";

const NavBar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box className="navBar_body">
      <Link
        to="/"
        style={{ display: "flex", textDecoration: "none", color: "black" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={logo} style={{ height: "25px", marginRight: "10px" }} />
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            COZ Shopping
          </Typography>
        </Box>
      </Link>
      <IconButton
        className="Btn_bugger"
        size="large"
        onClick={handleOpenUserMenu}
      >
        <MenuIcon className="icon_bugger" />
      </IconButton>
      <Menu
        className="menu"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 3,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 18,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
      >
        <MenuItem className="menuItem_top">
          <Typography sx={{ width: "100%", textAlign: "center" }}>
            오승찬님, 안녕하세요!
          </Typography>
        </MenuItem>
        <Link
          to="/product/list"
          style={{ textDecoration: "none", color: "black" }}
        >
          <MenuItem className="munuItem_middle">
            <CardGiftcardIcon sx={{ fontSize: "22px", mr: "4px" }} />
            <Typography>상품리스트 페이지</Typography>
          </MenuItem>
        </Link>
        <Link to="/bookmark" style={{ textDecoration: "none", color: "black" }}>
          <MenuItem className="menuItem_bottom">
            <StarBorderIcon sx={{ fontSize: "23px", mr: "4px" }} />
            <Typography>북마크 페이지</Typography>
          </MenuItem>
        </Link>
      </Menu>
    </Box>
  );
};

export default NavBar;
