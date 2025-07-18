import { useEffect } from "react";
import { useLocation, Link, NavLink } from "react-router-dom";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  List,
  ListItemText,
  Collapse,
} from "@mui/material";
import { BsChevronDown } from "react-icons/bs";
import NavItemChild from "./NavItemChild";
import { useNavToggle } from "../../hooks/useNavToggle";

interface SubLink {
  title: string;
  path: string;
  disabled?: boolean;
  [key: string]: any; // support additional props passed to NavItemChild
}

interface NavItemProps {
  label: string;
  dropdown?: boolean;
  path?: string;
  subLinks?: SubLink[];
  disabled?: boolean;
  hasMainPage?: boolean;
  icon?: React.ReactNode;
  NavItemOpen?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  label,
  dropdown,
  path,
  subLinks,
  disabled,
  hasMainPage,
  icon,
  NavItemOpen,
}) => {
  const location = useLocation();
  const {
    toggleNavDropdown,
    closeAllNavDropdowns,
    openNavDropdown,
    dropdowns,
    closeSidebar,
  }: any = useNavToggle();

  useEffect(() => {
    if (dropdown && path && location?.pathname?.includes(path)) {
      openNavDropdown(label);
    }
  }, [dropdown, label, openNavDropdown, location?.pathname, path]);

  const dropDownProps = hasMainPage
    ? {
        to: path!,
        component: NavLink,
      }
    : {
        component: "button",
      };

  const buttonStyle = {
    "&:hover": {
      background: "#0D6EFD",
      color: "#fff !!important",
      borderRadius: "8px",
      padding: "0.5rem",
    },
    "& .MuiListItemButton-root": {
      color: "#000",
      fontSize: "1em",
      "&:hover": {
        color: "#fff",
      },
    },
    "& .MuiListItemIcon-root": {
      color: "#000",
      minWidth: "35px",
      "&:hover": {
        color: "#fff !important",
      },
    },
    "& .MuiListItemText-root": {
      color: "#000",
      fontSize: "0.75em",
      "&:hover": {
        color: "#fff",
      },
    },
    "&.Mui-selected": {
      background: "#0D6EFD",
      color: "#fff",
      borderRadius: "8px",
      padding: "0.5rem",
      "&:hover": {
        background: "#0D6EFD",
        color: "#fff",
        borderRadius: "8px",
        padding: "0.5rem",
      },
      "& .MuiListItemIcon-root": {
        color: "#fff",
      },
      "& .MuiListItemText-root": {
        color: "#fff",
        "&:hover": {
          color: "#fff",
        },
      },
    },
  };

  if (disabled) return null;

  return (
    <ListItem
      sx={{
        flexDirection: "column",
        mb: 2,
        padding: "0 1rem 0 1rem",
      }}
    >
      {dropdown ? (
        <>
          <ListItemButton
            {...dropDownProps}
            disableRipple
            selected={!!(path && location?.pathname?.includes(path))}
            onClick={() => {
              if (!dropdowns[label]) {
                closeAllNavDropdowns();
              }
              toggleNavDropdown(label);
            }}
            sx={buttonStyle}
          >
            <>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText>{label}</ListItemText>
              <ListItemIcon
                sx={{
                  color: "white",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <BsChevronDown />
              </ListItemIcon>
            </>
          </ListItemButton>

          <Collapse
            in={!!dropdowns[label]}
            timeout={250}
            unmountOnExit
            sx={{ width: "100%" }}
          >
            <List
              disablePadding
              sx={{ display: "flex", flexDirection: "column" }}
            >
              {subLinks?.map((item, index) => (
                <NavItemChild
                  key={index}
                  {...item}
                  childClick={() => {
                    closeSidebar();
                  }}
                  NavItemChildOpen={NavItemOpen}
                />
              ))}
            </List>
          </Collapse>
        </>
      ) : (
        <ListItemButton
          component={NavLink}
          to={path!}
          sx={buttonStyle}
          onClick={() => {
            closeSidebar();
          }}
          disableRipple
          selected={location?.pathname === path}
        >
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText>{label}</ListItemText>
        </ListItemButton>
      )}
    </ListItem>
  );
};

export default NavItem;
