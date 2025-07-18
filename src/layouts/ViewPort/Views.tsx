import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/NavBar";
import Box from "@mui/system/Box";
import { NavToggleProvider } from "../../context/NavToggleContext";
import { useMediaQuery, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Viewport = ({ children, swipeable, noContainer, title, icons }: any) => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const maxWidth = "100%";

  return (
    <NavToggleProvider>
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <Sidebar swipeable={swipeable || isMediumScreen} />
        {!noContainer ? (
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            sx={{ padding: "1rem 0 0 0", overflowX: "hidden" }}
          >
            <Navbar swipeable={swipeable || isMediumScreen} pageTitle={title} />
            <Container
              disableGutters
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                padding: "1rem",
                maxWidth: "100%",
                // paddingTop: 2,
                // overflow: "auto",
              }}
            >
              {/* <PageHeader title={title} icons={icons} /> */}

              {children}
            </Container>
          </Box>
        ) : (
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {children}
          </Box>
        )}
      </Box>
    </NavToggleProvider>
  );
};

export default Viewport;
