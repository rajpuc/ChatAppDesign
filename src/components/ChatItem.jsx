import { Typography } from "@mui/material";
import React, { memo, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const ChatItem = ({ to, chatTitle, chatId, index,length }) => {
  const { colors } = useContext(AppContext);
  const [isHovered, setIsHovered] = useState(false);

  // Check if the chat is selected
  const isSelected = index == Number(length)-Number(chatId) ;

  return (
    <Link
      to={to}
      style={{
        background: isHovered || isSelected
          ? "#fff"
          : "linear-gradient(to right, #3B8D59, #006400)",
        padding: "0.6rem 1rem",
        textDecoration: "none",
        color: isHovered || isSelected ? colors.customPrimaryColor : "#fff",
        fontWeight: "bold",
        border: "2px solid rgba(255, 255, 255, 0.8)",
        boxShadow: isHovered
          ? "0px 8px 15px rgba(0, 0, 0, 0.2)"
          : "0px 5px 10px rgba(0, 0, 0, 0.15)",
        borderRadius: "8px",
        display: "inline-block",
        transition: "all 0.3s ease-in-out",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Typography
        variant={"body1"}
        fontWeight={"medium"}
        textTransform={"capitalize"}
      >
        {chatTitle}
      </Typography>
    </Link>
  );
};

export default memo(ChatItem);

