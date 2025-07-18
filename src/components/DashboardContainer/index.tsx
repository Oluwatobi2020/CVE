import { Box, Grid, Stack, Typography } from "@mui/material";
import DashboardMetricsCards from "./DashboardMetricsCards";
import {
  FaHandshakeSimple,
  FaUsersGear,
  FaCheck,
  FaUsers,
} from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbArrowsRightLeft } from "react-icons/tb";
import { AreaChart } from "./AreaChart";
// import ControlledSelect from "../../shared/ControlledComponents/ControlledSelect";
import { useFormik } from "formik";
import PieChart from "./PieChart";
import RequestTable from "./DashboardTables/DashboardTablesTabs";
import NewRequestTable from "./DashboardTables/NewRequestTable";
import DashboardTablesTabs from "./DashboardTables/DashboardTablesTabs";
import NewPieChart from "./NewPieChart";
import NewAreacchart from "./NewAreachart";

const onSubmit = (values: any) => {
  console.log("values", values);
};

const dashboardCardsMetrics = [
  {
    id: 1,
    requestType: "Total Transactions",
    requestValue: 2758940,
    responseRate: null,
    yesterdayTotalTransaction: "+12.5% from yesterday",
    yesterdaySuccessRate: null,
    newVendors: 0,
    icon: <TbArrowsRightLeft size={20} color="#0D6EFD" />,
    backgroundColor: "#0D6EFD1A",
  },
  {
    id: 2,
    requestType: "Success Rate",
    requestValue: 99.87,
    responseRate: null,
    yesterdayTotalTransaction: "+12.5% from yesterday",
    yesterdaySuccessRate: null,
    newVendors: 0,
    icon: <FaCheck size={20} color="#34A853" />,
    backgroundColor: "#34A8531A",
  },
  {
    id: 3,
    requestType: "Active Vendors",
    requestValue: 49,
    responseRate: null,
    yesterdayTotalTransaction: null,
    yesterdaySuccessRate: null,
    newVendors: 3,
    icon: <FaUsers size={20} color="#FFB133" />,
    backgroundColor: "#FFB1331A",
  },
  {
    id: 4,
    requestType: "Average Response Time",
    requestValue: 247,
    responseRate: 15,
    yesterdayTotalTransaction: null,
    yesterdaySuccessRate: null,
    newVendors: 0,
    icon: <MdOutlineAccessTimeFilled size={20} color="#FF9955" />,
    backgroundColor: "#FF99551A",
  },
];

const DashboardContainer = () => {
  const periodList = [
    {
      id: 1,
      val: "Yearly",
      desc: "Yearly",
    },
    {
      id: 2,
      val: "Monthly",
      desc: "Monthly",
    },
    {
      id: 3,
      val: "Weekly",
      desc: "Weekly",
    },
    {
      id: 4,
      val: "Daily",
      desc: "Daily",
    },
  ];

  const periodOptions = periodList.map((singlePeriod) => {
    return {
      value: singlePeriod.val,
      label: singlePeriod.desc,
    };
  });
  const formik = useFormik({
    initialValues: {
      period: "Yearly",
    },
    onSubmit,
  });
  return (
    <Box sx={{ width: "100%", padding: "5rem 0 0 0" }}>
      <Stack>
        <Grid container spacing={2} sx={{ width: "100%" }}>
          {dashboardCardsMetrics.map((card) => {
            const {
              id,
              requestType,
              requestValue,
              responseRate,
              icon,
              yesterdayTotalTransaction,
              backgroundColor,
              newVendors,
              yesterdaySuccessRate,
            } = card;
            return (
              <DashboardMetricsCards
                id={id}
                requestType={requestType}
                responseRate={responseRate}
                requestValue={requestValue}
                icon={icon}
                yesterdayTotalTransaction={yesterdayTotalTransaction}
                backgroundColor={backgroundColor}
                newVendors={newVendors}
                yesterdaySuccessRate={yesterdaySuccessRate}
              />
            );
          })}
        </Grid>

        <Grid container spacing={2} sx={{ width: "100%", marginTop: "1rem" }}>
          <Grid
            size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
            sx={{
              background: "#fff",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              padding: "1rem",
              display: "flex",
              alignItems: "center",
              borderRadius: "7px",
            }}
          >
            <Stack sx={{ width: "100%" }}>
              <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
                {/* <ControlledSelect
                  formik={formik}
                  name="period"
                  options={periodOptions}
                  label=""
                  sx={{ width: "30%" }}
                /> */}
              </Grid>
              <Grid
                size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                sx={{ marginBottom: "3rem" }}
              >
                <Typography sx={{ fontSize: "1em", fontWeight: 500 }}>
                  Transaction Volume (24h)
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                <NewAreacchart />
              </Grid>
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
            sx={{
              background: "#fff",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              padding: "0 1rem 1rem 1rem",
              display: "flex",
              alignItems: "center",
              borderRadius: "7px",
            }}
          >
            <Stack
              sx={{
                width: "100%",
                marginTop: "-1rem",
              }}
            >
              <Grid
                container
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Grid
                  size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                  sx={{ marginBottom: "1rem" }}
                >
                  <Typography sx={{ fontSize: "1em", fontWeight: 500 }}>
                    Service Distribution
                  </Typography>
                </Grid>
                <Grid
                  size={{ xs: 12, sm: 12, md: 9, lg: 9 }}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  {/* <ControlledSelect
                    formik={formik}
                    name="period"
                    options={periodOptions}
                    label=""
                    sx={{ width: "60%" }}
                  /> */}
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <NewPieChart />
              </Grid>
            </Stack>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            width: "100%",
            background: "#fff",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            marginTop: "1rem",
            padding: "1rem",
          }}
        >
          <Grid sx={{ width: "100%" }}>
            <NewRequestTable />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default DashboardContainer;
