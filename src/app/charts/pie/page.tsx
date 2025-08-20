import * as React from "react";
import NextLink from 'next/link';
import Grid from "@mui/material/Grid"; 
import BasicPieChart from "@/components/Charts/PieCharts/BasicPieChart";
import PieDonutChart from "@/components/Charts/PieCharts/PieDonutChart";
import PieMonochromeChart from "@/components/Charts/PieCharts/PieMonochromeChart";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Pie Charts</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li> 
          <li>Charts</li>
          <li>Pie Charts</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <BasicPieChart />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <PieDonutChart />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <PieMonochromeChart />
        </Grid>
      </Grid>
    </>
  );
}
