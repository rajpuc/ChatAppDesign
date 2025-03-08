import { Box, CircularProgress } from "@mui/material";
import React, { memo, useContext } from "react";
import { AppContext } from "../context/AppContext";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const SingleMessage = ({ sender, message }) => {
  return (
    <Box
      sx={{
        maxWidth: "75%",
        p: 2,
        borderRadius: 3,
        boxShadow: 2,
        wordBreak: "break-word",
        bgcolor: "grey.100",
        color: "black",
        alignSelf: sender === "user" ? "flex-end" : "flex-start",
      }}
    >
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {message}
        </ReactMarkdown>
    </Box>
  );
};

export default memo(SingleMessage);
