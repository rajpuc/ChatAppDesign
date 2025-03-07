import React, { lazy, useContext } from "react";
import Grid from "@mui/material/Grid2";
import { Stack } from "@mui/material";
import { AppContext } from "../context/AppContext";

const Sidebar = lazy(()=>import("../components/Sidebar"))
const Header = lazy(()=>import("../components/Header"))
const ChatArea = lazy(()=>import("../components/ChatArea"))

const Layout = () => {
  const {colors} = useContext(AppContext);

  return (
    <Stack sx={{
      height: "100vh", 
    }}>
      <Header/>
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
    </Stack>
  );
};

export default Layout;
