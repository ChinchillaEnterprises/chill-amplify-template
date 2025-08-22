"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import ShowcaseLayout from "@/components/ComponentShowcase/ShowcaseLayout";
import LiveExample from "@/components/ComponentShowcase/LiveExample";
import ComponentSection from "@/components/ComponentShowcase/ComponentSection";

export default function AreaChartsShowcase() {
  const SimpleAreaChart = () => (
    <Box sx={{ width: '100%', height: 300, bgcolor: 'grey.50', borderRadius: 1, p: 2 }}>
      <svg width="100%" height="100%" viewBox="0 0 400 250">
        {/* Grid */}
        {[0, 1, 2, 3, 4, 5].map(i => (
          <line key={i} x1="50" y1={50 + i * 30} x2="350" y2={50 + i * 30} stroke="#e0e0e0" strokeWidth="1" />
        ))}
        
        {/* Area fill */}
        <path
          d="M 50,150 L 100,100 L 150,120 L 200,80 L 250,90 L 300,60 L 300,200 L 50,200 Z"
          fill="#1976d2"
          fillOpacity="0.3"
        />
        
        {/* Line */}
        <polyline
          points="50,150 100,100 150,120 200,80 250,90 300,60"
          fill="none"
          stroke="#1976d2"
          strokeWidth="3"
        />
        
        {/* Labels */}
        <text x="50" y="230" textAnchor="middle" fontSize="12" fill="#666">Jan</text>
        <text x="100" y="230" textAnchor="middle" fontSize="12" fill="#666">Feb</text>
        <text x="150" y="230" textAnchor="middle" fontSize="12" fill="#666">Mar</text>
        <text x="200" y="230" textAnchor="middle" fontSize="12" fill="#666">Apr</text>
        <text x="250" y="230" textAnchor="middle" fontSize="12" fill="#666">May</text>
        <text x="300" y="230" textAnchor="middle" fontSize="12" fill="#666">Jun</text>
      </svg>
    </Box>
  );

  return (
    <ShowcaseLayout
      title="Area Charts"
      description="Area charts display quantitative data graphically. They're based on line charts but fill the area between the axis and line with colors or patterns."
    >
      <ComponentSection 
        title="Basic Area Chart"
        description="A simple area chart showing trends with filled areas."
      >
        <LiveExample>
          <SimpleAreaChart />
        </LiveExample>
      </ComponentSection>

      <ComponentSection 
        title="Implementation Notes"
        description="Area charts are ideal for showing cumulative data over time."
      >
        <Box sx={{ p: 2, bgcolor: 'info.soft', borderRadius: 2 }}>
          <Typography variant="body2">
            Area charts work best for displaying trends and volumes over time. 
            Use them when you want to emphasize the magnitude of change as well as the trend direction.
          </Typography>
        </Box>
      </ComponentSection>
    </ShowcaseLayout>
  );
}