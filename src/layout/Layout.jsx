import { Drawer, Icon, IconButton, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { lazy, useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Close as CloseIcon} from "@mui/icons-material";

const Sidebar = lazy(()=>import("../components/Sidebar"))
const Header = lazy(()=>import("../components/Header"))
const ChatArea = lazy(()=>import("../components/ChatArea"))

const Layout = () => {
  const [isMobile,setIsMobile] = useState(false);
  const {navigate} = useContext(AppContext);
  const {colors} = useContext(AppContext);
  const menuHandler = () => {
    setIsMobile(prev=>!prev)
  }
  const logoutHandler = () => {
    navigate("/")
  }
  return (
    <Stack sx={{
      height: "100vh", 
    }}>
      <Header menuHandler={menuHandler} logoutHandler={logoutHandler}/>
      <div style={{backgroundImage:colors.customLinearGradient,height:"2px"}}></div>
      <Grid
        container
        sx={{ width: "100%", height:"calc(100% - 4rem)"}}
      >
        {/* Sidebar */}
        <Grid
          size={{ xs: 12, sm: 5, md: 4,lg:3 }}
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          <Sidebar />
        </Grid>

        {/* Chat Area */}
        <Grid
          size={{ xs: 12, sm: 7, md: 8,lg:9 }}
        >
          <ChatArea />
        </Grid>
      </Grid>
      <Drawer open={isMobile} onClose={()=>setIsMobile(false)}>
          <Sidebar w="60vw" h={"100vh"} isMobile={isMobile} setIsMobile={setIsMobile}/>
          {
            isMobile && (
              <IconButton sx={{
                position:"fixed",
                left:"61vw",
                top:"0.5rem",
                bgcolor:"#008000",
                color:"white",
                "&:hover":{
                  bgcolor:"white",
                  color:"#008000"
                }
              }}
              onClick={menuHandler}
              >
                <CloseIcon/>
              </IconButton>
            )
          }
      </Drawer>
    </Stack>
  );
};

export default Layout;
