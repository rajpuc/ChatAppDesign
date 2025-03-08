import { BorderColor, Send as SendIcon } from "@mui/icons-material";
import { Box, CircularProgress, IconButton } from "@mui/material";
import React, { useState, useRef, useContext } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { useParams } from "react-router-dom";

const ChatInput = () => {
  const params = useParams();
  const specificKey = params.chatId;
  const [loading, setLoading] = useState(false);
  const [textInput, setTextInput] = useState("");
  const { colors, setHistoryContents} = useContext(AppContext);


  const addNewMessage = (message,sender,specificKey) => {
    setHistoryContents((prev) => ({
      ...prev,
      [specificKey]: [
        ...(prev[specificKey] || []), 
        {
          sender, 
          message, 
        },
      ],
    }));
  }

  const sendApiRequest = async () =>{
    
    try {
      setLoading(true);
      const response = await axios.post(
        "https://api.echogpt.live/v1/chat/completions",
        {
          messages: [{ role: "user", content: textInput }],
          model: "EchoGPT",
        },
        {
          headers: {
            "x-api-key":
              "echogpt-JUIj8r8Uzn-rEz9FSRJWy-e0-x_jP1y8-uxUkm1tO86-bfiQHXRO4v57b5IqbR9BQzS0",
          },
        }
      );
      setLoading(false);
      addNewMessage(response.data.choices[0].message.content,"system",specificKey);
      setTextInput("");
    } catch (error) {
      console.log("Error occurred while sending query:", error.message);
    }

  }

  const sendQueryHandler = () => {
    addNewMessage(textInput,"user",specificKey);
    sendApiRequest();
  };
  
  return (
    <Box
      sx={{
        height: "80px",
        display: "flex",
        alignItems: "flex-start",
        gap: "0.5rem",
        position:"relative"
      }}
    >
      <textarea
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        style={{
          width: "100%",
          height: "100%",
          overflowX: "hidden",
          overflowY: "auto",
          padding: "8px 50px 8px 8px",
          outline: "none",
          border: "2px solid",
          borderColor: colors.customPrimaryColor,
          borderRadius: "5px",
          resize: "none",
          fontSize: "16px",
        }}
        placeholder="Type something..."
      />
      <IconButton
        onClick={sendQueryHandler}
        sx={{
          color: colors.customPrimaryColor,
          border: "2px solid",
          borderColor: colors.customPrimaryColor,
          rotate: "-30deg",
          "&:hover": {
            background: colors.customLinearGradient,
            "& .sendBtn": {
              color: "white",
            },
          },
        }}
      >
        <SendIcon className="sendBtn" />
      </IconButton>
      {
        loading?      <Box sx={{
          position:"absolute",
          right:"4rem",
          top:"50%",
          transform:"translateY(-50%)"
  
        }}>
          <CircularProgress size={"2rem"} color={"success"}/>
        </Box>:''
      }
    </Box>
  );
};

export default ChatInput;


