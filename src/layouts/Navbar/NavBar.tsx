import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Typography,
  IconButton,
  AppBar,
  Toolbar,
  Grid,
  Box,
  useMediaQuery,
  TextField,
  InputAdornment,
  Badge,
  Stack,
  Avatar,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavToggle } from "../../hooks/useNavToggle";
import dayjs from "dayjs";
import { MdSearch } from "react-icons/md";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { BsDot } from "react-icons/bs";
import CircleIcon from "@mui/icons-material/Circle";
// import ProviderLogo from "../../assets/provider-logo.png";

const UNAUTHORIZED_ROUTES = [
  "/",
  "/login",
  "/forgot-password",
  "/contact-us",
  "/about-us",
  "/signup",
  "/terms-and-conditions",
];

const Navbar = ({ swipeable, pageTitle }: any) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const pathName = useLocation();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { toggleSidebar } = useNavToggle();

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElTwo, setAnchorElTwo] = useState(null);

  const todayHour = dayjs().format("HH");

  const convertToNum = Number(todayHour);

  const greetingsMessage = () => {
    if (convertToNum < 12) {
      return "Good morning";
    } else if (convertToNum >= 12 && convertToNum < 16) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  const open = Boolean(anchorEl);
  const secondOpen = Boolean(anchorElTwo);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOutUser = async () => {
    navigate("/");
  };

  const handleClickTwo = (event: any) => {
    setAnchorElTwo(event.currentTarget);
  };
  const handleCloseTwo = () => {
    setAnchorElTwo(null);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          // zIndex: (theme) => theme.zIndex.drawer + 1,
          // boxShadow: "4px 4px 15px -8px rgba(0,0,0,0.89)",
          padding: "0 0 0.5rem 0",
          background: "#fff",
          width: { lg: "84.5%" },
        }}
        elevation={0}
      >
        <Toolbar variant="regular">
          <Grid
            container
            spacing={1}
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              flexWrap: "nowrap",
            }}
          >
            <Box>
              {swipeable && (
                <IconButton
                  onClick={toggleSidebar}
                  size={"large"}
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                >
                  <GiHamburgerMenu color="#000" />
                </IconButton>
              )}
            </Box>
            <Grid
              container
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                // alignItems: "center",
                textAlign: "center",
                marginTop: "16px",
                padding: "0 0 0 3rem",
              }}
            >
              <Grid
                size={{ lg: 5, md: 5, sm: 12, xs: 12 }}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                }}
              >
                <Typography sx={{ fontWeight: 550, fontSize: "1.1em" }}>
                  {pageTitle}
                </Typography>
              </Grid>
              <Grid
                container
                size={{ lg: 3, md: 3, sm: 12, xs: 12 }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Grid
                  size={{ lg: 6, md: 6, sm: 12, xs: 12 }}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Box
                    sx={{
                      borderRadius: "30px",
                      border: "1px solid #D4E2FE",
                      background: "#F8F9FF",
                      padding: "1.5rem",
                      width: "55px",
                      height: "55px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Badge badgeContent={4} sx={{ color: "red" }}>
                      <NotificationsOutlinedIcon
                        sx={{ fontSize: 20, color: "#000" }}
                      />
                    </Badge>
                  </Box>
                </Grid>
                <Grid
                  size={{ lg: 6, md: 6, sm: 12, xs: 12 }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Grid sx={{ marginRight: "0.5rem" }}>
                    <Box
                      sx={{
                        borderRadius: "30px",
                        border: "1px solid #D4E2FE",
                        background: "#F8F9FF",
                        padding: "1.5rem",
                        width: "55px",
                        height: "55px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {/* <img src="" alt="avatar-logo" width={30} height={30} /> */}
                      <Avatar
                        sx={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "primary.main",
                          fontSize: "1.5em",
                          fontWeight: 600,
                        }}
                      >
                        {/* {acronym} */}
                      </Avatar>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
