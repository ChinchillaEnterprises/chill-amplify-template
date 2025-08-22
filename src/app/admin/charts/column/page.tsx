"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import ShowcaseLayout from "@/components/ComponentShowcase/ShowcaseLayout";
import LiveExample from "@/components/ComponentShowcase/LiveExample";
import ComponentSection from "@/components/ComponentShowcase/ComponentSection";

export default function ColumnChartsShowcase() {
  const SimpleColumnChart = () => (
    <Box sx={{ width: '100%', height: 300, bgcolor: 'grey.50', borderRadius: 1, p: 2 }}>
      <svg width="100%" height="100%" viewBox="0 0 400 250">
        {/* Grid */}
        {[0, 1, 2, 3, 4, 5].map(i => (
          <line key={i} x1="50" y1={50 + i * 30} x2="350" y2={50 + i * 30} stroke="#e0e0e0" strokeWidth="1" />
        ))}
        
        {/* Columns */}
        <rect x="70" y="100" width="30" height="100" fill="#1976d2" />
        <rect x="120" y="80" width="30" height="120" fill="#1976d2" />
        <rect x="170" y="120" width="30" height="80" fill="#1976d2" />
        <rect x="220" y="70" width="30" height="130" fill="#1976d2" />
        <rect x="270" y="90" width="30" height="110" fill="#1976d2" />
        
        {/* Labels */}
        <text x="85" y="230" textAnchor="middle" fontSize="12" fill="#666">Jan</text>
        <text x="135" y="230" textAnchor="middle" fontSize="12" fill="#666">Feb</text>
        <text x="185" y="230" textAnchor="middle" fontSize="12" fill="#666">Mar</text>
        <text x="235" y="230" textAnchor="middle" fontSize="12" fill="#666">Apr</text>
        <text x="285" y="230" textAnchor="middle" fontSize="12" fill="#666">May</text>
      </svg>
    </Box>
  );

  return (
    <ShowcaseLayout
      title="Column Charts"
      description="Column charts display data using vertical bars. They're excellent for comparing values across categories and showing changes over time."
    >
      <ComponentSection 
        title="Basic Column Chart"
        description="A simple column chart comparing values across different categories."
      >
        <LiveExample>
          <SimpleColumnChart />
        </LiveExample>
      </ComponentSection>

      <ComponentSection 
        title="Implementation Notes"
        description="Column charts are versatile and widely understood."
      >
        <Box sx={{ p: 2, bgcolor: 'info.soft', borderRadius: 2 }}>
          <Typography variant="body2">
            Column charts are ideal for comparing discrete categories of data. 
            They make it easy to compare values and identify patterns or outliers in your data.
          </Typography>
        </Box>
      </ComponentSection>
    </ShowcaseLayout>
  );
}