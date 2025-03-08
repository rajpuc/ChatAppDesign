import {
  Logout as LogoutIcon,
  Menu as MenuIcon,
  Reviews as ReviewsIcon,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  colors,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Header = ({menuHandler,logoutHandler}) => {
  const { colors } = useContext(AppContext);


  return (
    <>
      <Box
        height={"calc(4rem - 2px)"}
        sx={{
          bgcolor: colors.customWhiteColor,
          flexGrow: 1,
        }}
      >
        <AppBar
          position="static"
          sx={{ bgcolor: "transparent", height:"100%", borderBottom:"none",boxShadow:"none"  }}
        >
          <Toolbar>
            <Stack direction={"row"} gap={2}>
              <Typography
                variant="h4"
                fontWeight={"bold"}
                sx={{
                  display: { xs: "none", sm: "block" },
                  background: "linear-gradient(to right, #4EAC6D, #008000)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                EchoGPT
              </Typography>
              <ReviewsIcon
                fontSize={"large"}
                sx={{
                  color: "#008000",
                }}
              />
            </Stack>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <IconButton
                color="inherit"
                sx={{
                  "&:hover": {
                    background: colors.customLinearGradient,
                    "& .smmenu": {
                      color: "white",
                    },
                  },
                }}
                onClick={menuHandler}
              >
                <MenuIcon
                  className="smmenu"
                  sx={{
                    color: "#008000",
                    fontSize:"2.0rem"
                  }}
                />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Box>
              <IconBtn
                title="Logout"
                icon={
                  <LogoutIcon
                    className="child"
                    sx={{
                      color: "#008000",
                    }}
                  />
                }
                onClick={logoutHandler}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

const IconBtn = ({ title, icon, onClick }) => {
  const { colors } = useContext(AppContext);
  return (
    <Tooltip title={title}>
      <IconButton
        color="inherit"
        size="large"
        onClick={onClick}
        sx={{
          "&:hover": {
            background: colors.customLinearGradient,
            "& .child": {
              color: "white",
            },
          },
        }}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default Header;
