import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Close as CloseIcon, NoteAdd as NoteAddIcon } from "@mui/icons-material";
import ChatItem from "./ChatItem";
import { useParams } from "react-router-dom";

const Sidebar = ({w="100%",h}) => {
  const { colors, historyTitles, setHistoryTitles, navigate } =
    useContext(AppContext);

  const params = useParams();
  const chatId = params.chatId;

  const openNewFileHandler = () => {
    setHistoryTitles((prev) => [
      {
        chatTitle: `chat title ${prev.length + 1}`,
        to: `/chat/${prev.length + 1}`,
      },
      ...prev, // Add new chat at the beginning
    ]);    
    navigate(`chat/${historyTitles.length + 1}`);
  };
  return (
    <Stack
      sx={{
        backgroundImage: colors.customLinearGradient,
        height: h?h : "calc(100vh - 4rem)",
        overflowY: "auto",
        paddingInline: 2,
        paddingTop: 2,
        position:"relative",
        "&::-webkit-scrollbar": {
          width: "7px", 
        },
        "&::-webkit-scrollbar-thumb": {
          background: "linear-gradient(to bottom,rgba(25, 231, 94, 0.97),rgba(157, 255, 157, 0.22))", 
          borderRadius: "50px", 
        },
        "&::-webkit-scrollbar-track": {
          background: "#fff", 
        },
      }}
      width={w}
    >
      <Button
        fullWidth
        variant="outlined"
        sx={{
          borderColor: colors.customWhiteColor,
          padding: "0.5rem",
          color: colors.customWhiteColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          "&:hover": {
            backgroundColor: colors.customWhiteColor,
            color: colors.customPrimaryColor,
          },
        }}
        onClick={openNewFileHandler}
      >
        <NoteAddIcon />
        <Typography variant="button" fontWeight={"bold"}>
          New Chat
        </Typography>
      </Button>
      <Box sx={{ marginTop: "2rem", marginBottom: "0.7rem" }}>
        <Typography variant="h6" color={colors.customWhiteColor}>
          History
        </Typography>
      </Box>
      <Stack gap={".2rem"} paddingBottom={4}>
        {historyTitles &&
          historyTitles
            .map((item, index) => (
              <ChatItem
                length={historyTitles.length}
                index={index}
                key={index}
                chatTitle={item.chatTitle}
                to={item.to}
                chatId={chatId}
              />
            ))}
      </Stack>
    </Stack>
  );
};

export default Sidebar;
