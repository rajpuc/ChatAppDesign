import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { NoteAdd as NoteAddIcon } from "@mui/icons-material";
import ChatItem from "./ChatItem";

const Sidebar = () => {
  const {
    colors,
    historyTitles,
    setHistoryTitles,
    historyContents,
    setHistoryContents,
  } = useContext(AppContext);

  const openNewFileHandler = () => {
    setHistoryTitles((prev) => [
      ...prev,
      {
        chatTitle: `chat title ${historyTitles.length + 1}`,
        to: `/chat/${historyTitles.length + 1}`,
      },
    ]);
  };
  return (
    <Stack
      sx={{
        backgroundImage: colors.customLinearGradient,
        height: "calc(100vh - 4rem)",
        overflowY: "auto",
        paddingInline: 2,
        paddingTop: 2,
      }}
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
      <Box sx={{marginTop:"2rem",marginBottom:"0.7rem"}}>
        <Typography variant="h6" color={colors.customWhiteColor}>
          History
        </Typography>
      </Box>
      <Stack gap={".2rem"} paddingBottom={4}>
        {historyTitles &&
          historyTitles.map((item, index) => (
            <ChatItem key={index} chatTitle={item.chatTitle} to={item.to} />
          ))}
      </Stack>
    </Stack>
  );
};

export default Sidebar;
