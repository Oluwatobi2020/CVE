import {
  SwipeableDrawer,
  Drawer,
  Typography,
  Avatar,
  Grid,
  Button,
  Stack,
} from "@mui/material";
import { useNavToggle } from "../../hooks/useNavToggle";
import NavList from "./NavList";
import React from "react";
// import GrittyLogo from "../../assets/gritty-logo.png";
import { IoLogOut } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const drawerWidth = 263;

interface SidebarProps {
  swipeable?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ swipeable = false }) => {
  const { sidebarOpen, closeSidebar, openSidebar } = useNavToggle();
  const navigate = useNavigate();

  const loggedInUserName = "Core Vending";

  const matches = loggedInUserName?.match(/\b(\w)/g);
  const acronym = matches?.join("");

  const drawerSx = {
    width: drawerWidth,
    flexShrink: 0,
    alignItems: "center",
    textAlign: "center",
    marginTop: "2rem",
    [`& .MuiDrawer-paper`]: {
      width: drawerWidth,
      bgcolor: "black.main",
      padding: "0",
      background: "#fff",
    },
  };

  const handleSwipeableClose = (
    event: React.SyntheticEvent | {},
    reason: "backdropClick" | "escapeKeyDown"
  ) => {
    closeSidebar();
  };

  const drawerContent = (
    <Grid
      container
      spacing={1}
      sx={{
        color: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginTop: "2.5rem",
        bgcolor: "white",
      }}
    >
      <Grid
        container
        size={{ xs: 12 }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <Grid
          size={{ xs: 12, sm: 12, md: 4, lg: 4 }}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Avatar
            sx={{
              width: "50px",
              height: "50px",
              backgroundColor: "primary.main",
              fontSize: "1.5em",
              fontWeight: 600,
            }}
          >
            {acronym}
          </Avatar>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 8, lg: 8 }}
          sx={{ display: "flex", justifyContent: "flex-start" }}
        >
          <Stack sx={{ textAlign: "center" }}>
            <Typography
              sx={{ fontSize: "1em", fontWeight: 550, textAlign: "left" }}
            >
              CVE Platform
            </Typography>
            <Typography sx={{ fontSize: "0.8em", textAlign: "left" }}>
              Accuvend Powered
            </Typography>
          </Stack>
        </Grid>
        {/* <img src="" alt="Organization-logo" width={120} height={30} /> */}
      </Grid>
      <Grid size={{ xs: 12 }}>
        <NavList />
      </Grid>
      <Grid
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 0 0 1.7rem",
        }}
      >
        <Grid sx={{ marginTop: "6rem" }}>
          <Button
            startIcon={<IoLogOut size={20} />}
            sx={{
              color: "#8F95B2",
              fontSize: "1em",
              fontWeight: 550,
              "&:hover": {
                color: "primary.main",
              },
            }}
            onClick={() => navigate("/login")}
          >
            Logout
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );

  return swipeable ? (
    <SwipeableDrawer
      anchor="left"
      open={sidebarOpen}
      onClose={() => handleSwipeableClose}
      onOpen={openSidebar}
      sx={drawerSx}
    >
      {drawerContent}
    </SwipeableDrawer>
  ) : (
    <Drawer variant="permanent" open sx={drawerSx}>
      {drawerContent}
    </Drawer>
  );
};

export default Sidebar;
