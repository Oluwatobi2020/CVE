import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { MdCircle } from "react-icons/md";
import { useLocation, Link } from "react-router-dom";

interface NavItemChildProps {
  title: string;
  path: string;
  disabled?: boolean;
  childClick?: () => void;
  NavItemChildOpen?: boolean;
}

const NavItemChild: React.FC<NavItemChildProps> = ({
  title,
  path,
  disabled = false,
  childClick,
}) => {
  const location = useLocation();

  if (disabled) return null;

  return (
    <ListItemButton
      component={Link}
      to={path}
      disableRipple
      selected={location.pathname === path}
      sx={{
        textIndent: 5,
        "&:hover": {
          textDecoration: "underline",
        },
        "&.Mui-selected": {
          color: "#000",
          textDecoration: "underline",
        },
      }}
      onClick={childClick}
    >
      <ListItemText
        primary={
          <span
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "1.5rem",
              fontSize: "0.8em",
              color: "#000",
            }}
          >
            <MdCircle size={5} color="#ED0829" style={{ marginRight: 6 }} />
            {title}
          </span>
        }
        primaryTypographyProps={{
          variant: "subtitle2",
        }}
      />
    </ListItemButton>
  );
};

export default NavItemChild;
