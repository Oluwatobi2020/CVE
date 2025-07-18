import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { UiTriggersProvider } from "./context/UiTriggersContext";
import SnackbarProviders from "./layouts/SnackbarProviders";
import { theme } from "./utils/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Box
          sx={{ display: "flex", flexDirection: "column", height: "100dvh" }}
        >
          <CssBaseline />
          <UiTriggersProvider>
            <SnackbarProviders>
              <Router>
                <Routes>
                  <Route path="/dashboard" element={<DashboardPage />} />
                </Routes>
              </Router>
            </SnackbarProviders>
          </UiTriggersProvider>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
