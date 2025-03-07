import { Stack } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import MessageArea from "./MessageArea";
import ChatInput from "./ChatInput";

const ChatArea = () => {
  const pararms = useParams();
  const chatId = pararms.chatId;
  console.log(chatId);
  return (
    <Stack
      sx={{
        height: "calc(100vh - 4rem)",
        overflowY: "auto",
        overflowX: "hidden",
        padding:"10px",
        justifyContent:"space-between",
        gap:0.6
      }}
    >
      <MessageArea chatId={chatId}/>
      <ChatInput/>
    </Stack>
  );
};

export default ChatArea;
