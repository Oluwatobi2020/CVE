import Paper from "@mui/material/Paper";
import Box from "@mui/system/Box";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import NavItem from "./NavItem";
import { userMenuList } from '../../routes/dashboardRoutes';

const StyledNavList = styled(List)(() => ({
  "& .MuiListItemButton-root": {
    padding: "6px 10px",
    display: "inline-flex",
    alignItems: "center",
    borderRadius: 6,
    width: "100%",
    justifyContent: "flex-start",
    color: "white",
    // minWidth: 'fit-content',
    textTransform: "none",
  },
}));

const NavList = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Paper elevation={0} sx={{ maxWidth: "100%", flexGrow: 1 }}>
        <StyledNavList disablePadding sx={{ mt: 2 }}>
          {userMenuList?.map((item, index) => {
            return <NavItem key={index} {...item} />;
          })}
        </StyledNavList>
      </Paper>
    </Box>
  );
};

export default NavList;
