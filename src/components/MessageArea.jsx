import { CircularProgress, Stack } from "@mui/material";
import React, { lazy, Suspense, useContext, useEffect, useRef } from "react";
import { AppContext } from "../context/AppContext";

const SingleMessage = lazy(() => import("./SingleMessage"));

const MessageArea = ({ chatId }) => {
  const { historyContents } = useContext(AppContext);
  const messageEndRef = useRef(null);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [historyContents[chatId]]);

  return (
    <Stack
      gap={3}
      sx={{
        height: "calc(100% - 80px)",
        overflowY: "auto",
        paddingBottom: "1rem",
        paddingRight:"10px",
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
    >
      {historyContents[chatId]?.map((item, index) => (
        <SingleMessage
          key={index}
          sender={item.sender}
          message={item.message}
        />
      ))}
      <div ref={messageEndRef} />
    </Stack>
  );
};

export default MessageArea;
