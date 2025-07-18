import { Box, Grid, Stack, Typography } from "@mui/material";

const DashboardMetricsCards = ({
  id,
  requestType,
  requestValue,
  icon,
  responseRate,
  yesterdayTotalTransaction,
  backgroundColor,
  newVendors,
  yesterdaySuccessRate,
}: any) => {
  // Render the card with the provided props

  const secondaryText =
    requestType === "Total Transactions"
      ? requestValue
      : requestType === "Success Rate"
      ? `${requestValue}%`
      : requestType === "Active Vendors"
      ? requestValue
      : requestType === "Average Response Time"
      ? `${requestValue}ms`
      : "";

  const tertiaryText =
    requestType === "Total Transactions"
      ? yesterdayTotalTransaction
      : requestType === "Success Rate"
      ? yesterdayTotalTransaction
      : requestType === "Active Vendors"
      ? `${newVendors} new this week`
      : requestType === "Average Response Time"
      ? `~${responseRate}ms faster`
      : "";

  const tertiaryTextColor =
    requestType === "Total Transactions"
      ? "#34A853"
      : requestType === "Success Rate"
      ? "#34A853"
      : requestType === "Active Vendors"
      ? "#FFB133"
      : requestType === "Average Response Time"
      ? "#FF9955"
      : "black.main";
  return (
    <Grid
      container
      key={id}
      size={{ xs: 12, sm: 12, md: 3, lg: 3 }}
      sx={{
        background: "#fff",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        borderRadius: "7px",
      }}
    >
      <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
        <Stack>
          <Grid container sx={{ display: "flex", alignItems: "center" }}>
            <Grid size={{ xs: 6, sm: 6, md: 9, lg: 9 }}>
              <Typography
                sx={{ fontSize: "0.8em", fontWeight: 550, color: "black.main" }}
              >
                {requestType}
              </Typography>
            </Grid>
            <Grid
              size={{ xs: 6, sm: 6, md: 3, lg: 3 }}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Typography
                sx={{
                  backgroundColor: { backgroundColor },
                  padding: "0.5rem",
                  textAlign: "center",
                  borderRadius: "5px",
                }}
              >
                {icon}
              </Typography>
            </Grid>
          </Grid>
          <Grid container sx={{ marginTop: "0.5rem" }}>
            <Typography
              sx={{ fontSize: "1.1em", fontWeight: 550, color: "black.main" }}
            >
              {secondaryText}
            </Typography>
          </Grid>
          <Grid container sx={{ marginTop: "0.5rem" }}>
            <Typography
              sx={{
                fontSize: "0.7em",
                fontWeight: 500,
                color: `${tertiaryTextColor}`,
              }}
            >
              {tertiaryText}
            </Typography>
          </Grid>
        </Stack>
        {/* <Box
          sx={{
            borderRadius: "30px",
            background: { backgroundColor },
            padding: "0.5rem",
            width: "55px",
            height: "55px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {icon}
        </Box> */}
      </Grid>
      {/* <Grid size={{ xs: 12, sm: 12, md: 9, lg: 9 }}>
        <Stack sx={{ display: "flex", textAlign: "left" }}>
          <Typography
            sx={{ fontSize: "1.1em", fontWeight: 550, color: "black.main" }}
          >
            {requestValue}
          </Typography>
          <Typography sx={{ fontSize: "1em", color: "#8F95B2" }}>
            {requestType}
          </Typography>
        </Stack>
      </Grid> */}
    </Grid>
  );
};

export default DashboardMetricsCards;
