import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ContextApi } from "./Context";
import './menu/Menu.css'

export default function Navbar() {
  const {menu , setMenu} = useContext(ContextApi)
  function OpenMenu(){
    setMenu(!menu)
  }
  return (
    <div>
      <Box className="nav" sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton
              onClick={OpenMenu}
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
                My chat
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
