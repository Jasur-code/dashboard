import {
  AddCircleOutline,
  DarkMode,
  Notifications,
  Search,
} from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import DonutChart from "react-donut-chart";

export default function Dashboard() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = {
    labels,
    datasets: [
      {
        data: [200, 250, 300, 240, 200, 240, 250, 330, 310, 280, 230, 270],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderRadius: 12,
      },
    ],
  };
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Salom Sheroz 👋</h2>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <DarkMode sx={{ color: "grey" }} />
          <AddCircleOutline sx={{ color: "grey" }} />
          <Notifications sx={{ color: "grey" }} />
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              borderRadius: "10px",
              backgroundColor: "white",
              color: "grey",
              padding: "6px 12px",
            }}
          >
            <Search />
            <input
              style={{ border: "none", outline: "none" }}
              type="text"
              placeholder="Qidiruv"
            />
          </Box>
        </Box>
      </Box>

      <Grid container justifyContent={"center"} mt={8}>
        <Grid
          item
          lg={8}
          sx={{ p: 4, borderRadius: "20px", backgroundColor: "white" }}
        >
          <Box>
            <Typography sx={{ fontWeight: "bold" }} variant="h5">
              Yillik Statistika
            </Typography>
          </Box>
          <Bar options={options} data={data} style={{ marginTop: "30px" }} />
        </Grid>
        
      </Grid>
    </Box>
  );
}
