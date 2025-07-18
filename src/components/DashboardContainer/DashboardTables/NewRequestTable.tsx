import {
  Box,
  Typography,
  Grid,
  Stack,
  TextField,
  InputAdornment,
  Button,
  Menu,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import MUIDataTable from "mui-datatables";
import type { MUIDataTableOptions } from "mui-datatables";
import { useState } from "react";
import { MdSearch, MdFilterList } from "react-icons/md";
import { FaEllipsisVertical } from "react-icons/fa6";

const NewRequestTable = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorElTwo, setAnchorElTwo] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const openTwo = Boolean(anchorElTwo);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickTwo = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElTwo(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseTwo = () => {
    setAnchorElTwo(null);
  };
  const tableData = [
    {
      id: 1,
      vendor: "MTN Connect",
      vendorTier: "1",
      vendorLogo: "/public/mtn-logo.png",
      serviceType: "Airtime & Data",
      successRate: 99.98,
      averageResponse: "178ms",
      status: "Active",
    },
    {
      id: 2,
      vendor: "InterSwitch Payments",
      vendorTier: "2",
      vendorLogo: "/interswitch-logo.png",
      serviceType: "Bills Payment",
      successRate: 99.98,
      averageResponse: "178ms",
      status: "Active",
    },
    {
      id: 3,
      vendor: "MTN Connect",
      vendorTier: "1",
      vendorLogo: "/mtn-logo.png",
      serviceType: "Airtime & Data",
      successRate: 99.98,
      averageResponse: "178ms",
      status: "Active",
    },
  ];
  const columns = [
    {
      name: "sn",
      label: "S/N",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (values: string, meta: any) => {
          return (
            <Typography
              sx={{
                fontSize: "1em",
                fontWeight: 500,
                color: "black.main",
                textAlign: "center",
              }}
            >
              {meta.rowIndex + 1}
            </Typography>
          );
        },
      },
    },
    {
      name: "vendor",
      label: "VENDOR",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (values: string, meta: any) => {
          return (
            <Grid container sx={{ display: "flex", alignItems: "center" }}>
              <Grid size={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
                <img
                  src={meta.rowData[6]}
                  alt={values}
                  style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                <Stack>
                  <Typography
                    sx={{
                      fontSize: "1em",
                      fontWeight: 500,
                      color: "black.main",
                    }}
                  >
                    {values}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.8em",
                      fontWeight: 400,
                      color: "grey.main",
                    }}
                  >
                    {`Tier ${meta.rowData[5]}`}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          );
        },
      },
    },
    {
      name: "serviceType",
      label: "SERVICE TYPE",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (values: string) => {
          const textColor =
            values === "Airtime & Data"
              ? "#0D6EFD"
              : values === "Bills Payment"
              ? "#FFA455"
              : "black.main";
          const backgroundColor =
            values === "Airtime & Data"
              ? "#0D6EFD33"
              : values === "Bills Payment"
              ? "#FFA45533"
              : "#0D6EFD33";
          return (
            <Typography
              sx={{
                fontSize: "1em",
                fontWeight: 500,
                color: textColor,
                textAlign: "center",
                background: backgroundColor,
                borderRadius: "30px",
                padding: "0.5rem",
              }}
            >
              {values}
            </Typography>
          );
        },
      },
    },
    {
      name: "successRate",
      label: "SUCCESS RATE",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (values: string) => {
          return (
            <Typography
              sx={{
                fontSize: "1em",
                fontWeight: 500,
                color: "black.main",
                textAlign: "center",
              }}
            >
              {values}
            </Typography>
          );
        },
      },
    },
    {
      name: "averageResponse",
      label: "AVG RESPONSE",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (values: string) => {
          return (
            <Typography
              sx={{
                fontSize: "1em",
                fontWeight: 500,
                color: "black.main",
                textAlign: "center",
              }}
            >
              {values}
            </Typography>
          );
        },
      },
    },
    {
      name: "vendorTier",
      label: "TIER",
      options: {
        display: false, // This hides the column
        filter: true,
      },
    },
    {
      name: "vendorLogo",
      label: "IMAGE",
      options: {
        display: false, // This hides the column
        filter: true,
      },
    },
    {
      name: "status",
      label: "STATUS",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (values: string) => {
          return (
            <Typography
              sx={{
                color:
                  values === "Active"
                    ? "#34A853"
                    : values === "Inactive"
                    ? "error.main"
                    : "black.main",
                background:
                  values === "Active"
                    ? "#34A85333"
                    : values === "Inactive"
                    ? "#FFF2F2"
                    : "#F1F1F1",
                borderRadius: "30px",
                padding: "0.5rem",
                fontSize: "1em",
                width: "100%",
                textAlign: "center",
              }}
            >
              {values}
            </Typography>
          );
        },
      },
    },
    // {
    //   name: "c",
    //   label: "Action",
    //   options: {
    //     sort: false,
    //     customBodyRenderLite: () => (
    //       <div>
    //         <Button
    //           id="basic-button"
    //           aria-controls={openTwo ? "basic-menu" : undefined}
    //           aria-haspopup="true"
    //           aria-expanded={openTwo ? "true" : undefined}
    //           onClick={handleClickTwo}
    //         >
    //           <FaEllipsisVertical size={20} color="#000" />
    //         </Button>
    //         <Menu
    //           id="basic-menu"
    //           anchorEl={anchorElTwo}
    //           open={openTwo}
    //           onClose={handleCloseTwo}
    //           slotProps={{
    //             list: {
    //               "aria-labelledby": "basic-button",
    //             },
    //           }}
    //         >
    //           <RadioGroup
    //             aria-labelledby="demo-radio-buttons-group-label"
    //             defaultValue="pending"
    //             name="radio-buttons-group"
    //             sx={{ padding: "1rem" }}
    //           >
    //             <FormControlLabel
    //               sx={{ fontSize: "0.8em" }}
    //               value="view"
    //               control={<Radio sx={{ fontSize: 15 }} />}
    //               label="View"
    //             />
    //             <FormControlLabel
    //               value="edit"
    //               control={<Radio sx={{ fontSize: 15 }} />}
    //               label="Edit"
    //               sx={{ fontSize: "0.8em" }}
    //             />
    //           </RadioGroup>
    //         </Menu>
    //       </div>
    //     ),
    //   },
    // },
  ];
  const option: MUIDataTableOptions = {
    rowsPerPageOptions: [5, 10, 20],
    selectableRows: "none",
    pagination: false,
    print: false,
    viewColumns: false,
    filter: false,
    search: false,
    download: false,
  };
  return (
    <Box>
      <Stack>
        <Grid container sx={{ width: "100%", marginBottom: "1rem" }}>
          <Grid
            size={{ xs: 12, sm: 12, md: 3, lg: 3 }}
            sx={{ display: "flex", justifyContent: "flex-start" }}
          >
            <Typography>Top Vendor Performance</Typography>
          </Grid>
        </Grid>
        <Grid>
          <MUIDataTable
            data={tableData}
            columns={columns}
            options={option}
            title=""
          />
        </Grid>
      </Stack>
    </Box>
  );
};

export default NewRequestTable;
