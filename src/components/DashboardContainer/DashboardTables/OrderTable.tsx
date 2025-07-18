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
import { FaEllipsisVertical } from "react-icons/fa6";
import { MdSearch, MdFilterList } from "react-icons/md";

const OrderTable = () => {
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
      requestId: "1237dghjsj",
      name: "John Snow",
      email: "johnsnow@gmail.com",
      status: "Pending",
      serviceRequested: "Instagram Influencer",
      startEndDate: "2025-04-12  -   2025-04-20",
      requestDate: "2025-04-12",
    },
    {
      id: 2,
      requestId: "1237dghjsj",
      name: "Sarah Connor",
      email: "connor@gmail.com",
      status: "Declined",
      serviceRequested: "Instagram Influencer",
      startEndDate: "2025-04-12  -   2025-04-20",
      requestDate: "2025-04-12",
    },
    {
      id: 3,
      requestId: "1237dghjsj",
      name: "John Snow",
      email: "johnsnow@gmail.com",
      status: "Approved",
      serviceRequested: "Instagram Influencer",
      startEndDate: "2025-04-12  -   2025-04-20",
      requestDate: "2025-04-12",
    },
    {
      id: 4,
      requestId: "1237dghjsj",
      name: "Sarah Connor",
      email: "connor@gmail.com",
      status: "Updated",
      serviceRequested: "Instagram Influencer",
      startEndDate: "2025-04-12  -   2025-04-20",
      requestDate: "2025-04-12",
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
          console.log("values", values);
          return meta.rowIndex + 1;
        },
      },
    },
    {
      name: "requestId",
      label: "Request ID",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "email",
      label: "Email",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "status",
      label: "Status",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (values: string) => {
          return (
            <Typography
              sx={{
                color:
                  values === "Approved"
                    ? "green.main"
                    : values === "Declined"
                    ? "error.main"
                    : values === "Updated"
                    ? "secondary.main"
                    : "black.main",
                background:
                  values === "Approved"
                    ? "#E7F7EF"
                    : values === "Declined"
                    ? "#FFF2F2"
                    : values === "Updated"
                    ? "#F7EBE7"
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
    {
      name: "serviceRequested",
      label: "Service Requested",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (values: string) => {
          return (
            <Typography sx={{ color: "primary.main", fontSize: "1em" }}>
              {values}
            </Typography>
          );
        },
      },
    },
    {
      name: "startEndDate",
      label: "Start-End Date",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "requestDate",
      label: "Request Date",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "c",
      label: "Action",
      options: {
        sort: false,
        customBodyRenderLite: () => (
          <div>
            <Button
              id="basic-button"
              aria-controls={openTwo ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openTwo ? "true" : undefined}
              onClick={handleClickTwo}
            >
              <FaEllipsisVertical size={20} color="#000" />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorElTwo}
              open={openTwo}
              onClose={handleCloseTwo}
              slotProps={{
                list: {
                  "aria-labelledby": "basic-button",
                },
              }}
            >
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="pending"
                name="radio-buttons-group"
                sx={{ padding: "1rem" }}
              >
                <FormControlLabel
                  sx={{ fontSize: "0.8em" }}
                  value="view"
                  control={<Radio sx={{ fontSize: 15 }} />}
                  label="View"
                />
                <FormControlLabel
                  value="edit"
                  control={<Radio sx={{ fontSize: 15 }} />}
                  label="Edit"
                  sx={{ fontSize: "0.8em" }}
                />
              </RadioGroup>
            </Menu>
          </div>
        ),
      },
    },
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
          <Grid size={{ lg: 9, md: 9, sm: 12, xs: 12 }}>
            <TextField
              name="search"
              fullWidth
              size="small"
              placeholder="Search by service name"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <MdSearch size={30} />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  background: "#FAFAFA",
                },
                // ...props.sx, // in case you want to allow external styles
              }}
            />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 3, lg: 3 }}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              startIcon={<MdFilterList size={20} color="grey" />}
              sx={{ color: "#718096", backgroundColor: "#FAFAFA" }}
            >
              Filters
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{
                list: {
                  "aria-labelledby": "basic-button",
                },
              }}
            >
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="pending"
                name="radio-buttons-group"
                sx={{ padding: "1rem" }}
              >
                <FormControlLabel
                  sx={{ fontSize: "0.8em" }}
                  value="pending"
                  control={<Radio sx={{ fontSize: 15 }} />}
                  label="Pending"
                />
                <FormControlLabel
                  value="approved"
                  control={<Radio sx={{ fontSize: 15 }} />}
                  label="Approved"
                  sx={{ fontSize: "0.8em" }}
                />
                <FormControlLabel
                  value="updated-request"
                  control={<Radio sx={{ fontSize: 15 }} />}
                  label="Updated Request"
                  sx={{ fontSize: "0.8em" }}
                />
                <FormControlLabel
                  value="declined"
                  control={<Radio sx={{ fontSize: 15 }} />}
                  label="Declined"
                  sx={{ fontSize: "0.8em" }}
                />
              </RadioGroup>
            </Menu>
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

export default OrderTable;
