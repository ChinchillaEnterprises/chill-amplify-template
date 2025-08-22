"use client";

import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import ShowcaseLayout from "@/components/ComponentShowcase/ShowcaseLayout";
import LiveExample from "@/components/ComponentShowcase/LiveExample";
import CodeBlock from "@/components/ComponentShowcase/CodeBlock";
import ComponentSection from "@/components/ComponentShowcase/ComponentSection";

export default function LineChartsShowcase() {
  const lineChartCode = `// Note: This is a placeholder for chart implementation
// You would typically use a charting library like:
// - Chart.js with react-chartjs-2
// - Recharts
// - ApexCharts
// - D3.js

const LineChart = () => {
  return (
    <div style={{ width: '100%', height: '300px' }}>
      {/* Chart implementation would go here */}
      <svg width="100%" height="100%">
        <polyline
          points="10,150 50,100 100,120 150,80 200,90 250,60"
          fill="none"
          stroke="#1976d2"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};`;

  const SimpleLineChart = () => (
    <Box sx={{ width: '100%', height: 300, bgcolor: 'grey.50', borderRadius: 1, p: 2 }}>
      <svg width="100%" height="100%" viewBox="0 0 400 250">
        {/* Grid lines */}
        {[0, 1, 2, 3, 4, 5].map(i => (
          <line 
            key={i}
            x1="50" 
            y1={50 + i * 30} 
            x2="350" 
            y2={50 + i * 30}
            stroke="#e0e0e0" 
            strokeWidth="1"
          />
        ))}
        {[0, 1, 2, 3, 4, 5, 6].map(i => (
          <line 
            key={i}
            x1={50 + i * 50} 
            y1="50" 
            x2={50 + i * 50} 
            y2="200"
            stroke="#e0e0e0" 
            strokeWidth="1"
          />
        ))}
        
        {/* Line chart */}
        <polyline
          points="50,150 100,100 150,120 200,80 250,90 300,60"
          fill="none"
          stroke="#1976d2"
          strokeWidth="3"
        />
        
        {/* Data points */}
        {[
          [50, 150], [100, 100], [150, 120], [200, 80], [250, 90], [300, 60]
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="4" fill="#1976d2" />
        ))}
        
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

  const MultiLineChart = () => (
    <Box sx={{ width: '100%', height: 300, bgcolor: 'grey.50', borderRadius: 1, p: 2 }}>
      <svg width="100%" height="100%" viewBox="0 0 400 250">
        {/* Grid lines */}
        {[0, 1, 2, 3, 4, 5].map(i => (
          <line 
            key={i}
            x1="50" 
            y1={50 + i * 30} 
            x2="350" 
            y2={50 + i * 30}
            stroke="#e0e0e0" 
            strokeWidth="1"
          />
        ))}
        
        {/* Line 1 */}
        <polyline
          points="50,150 100,100 150,120 200,80 250,90 300,60"
          fill="none"
          stroke="#1976d2"
          strokeWidth="3"
        />
        
        {/* Line 2 */}
        <polyline
          points="50,180 100,140 150,110 200,130 250,100 300,90"
          fill="none"
          stroke="#dc004e"
          strokeWidth="3"
        />
        
        {/* Legend */}
        <rect x="60" y="20" width="12" height="3" fill="#1976d2" />
        <text x="80" y="28" fontSize="12" fill="#666">Sales</text>
        
        <rect x="140" y="20" width="12" height="3" fill="#dc004e" />
        <text x="160" y="28" fontSize="12" fill="#666">Revenue</text>
      </svg>
    </Box>
  );

  return (
    <ShowcaseLayout
      title="Line Charts"
      description="Line charts display quantitative data over a continuous interval or time span. They're ideal for showing trends and changes over time."
    >
      {/* Basic Line Chart */}
      <ComponentSection 
        title="Basic Line Chart"
        description="A simple line chart showing data trends over time."
      >
        <LiveExample>
          <SimpleLineChart />
        </LiveExample>
        <CodeBlock code={lineChartCode} title="LineChart.tsx" />
      </ComponentSection>

      {/* Multi-line Chart */}
      <ComponentSection 
        title="Multi-line Chart"
        description="Compare multiple data series on the same chart."
      >
        <LiveExample>
          <MultiLineChart />
        </LiveExample>
      </ComponentSection>

      {/* Chart Guidelines */}
      <ComponentSection 
        title="Implementation Guidelines"
        description="Best practices for implementing line charts."
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'info.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'info.dark', mb: 1, fontWeight: 600 }}>
              📊 Recommended Libraries
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li><strong>Recharts</strong> - React-specific, declarative</li>
              <li><strong>Chart.js</strong> - Feature-rich, well-documented</li>
              <li><strong>ApexCharts</strong> - Modern, interactive</li>
              <li><strong>D3.js</strong> - Maximum customization</li>
              <li><strong>Victory</strong> - Component-based</li>
            </Typography>
          </Box>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'warning.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'warning.dark', mb: 1, fontWeight: 600 }}>
              ⚠️ Note
            </Typography>
            <Typography variant="body2">
              This page shows placeholder charts using SVG. In a real application, you would implement these using a proper charting library with features like:
            </Typography>
            <Typography variant="body2" component="ul" sx={{ mt: 1, pl: 2.5 }}>
              <li>Interactive tooltips</li>
              <li>Responsive design</li>
              <li>Animation and transitions</li>
              <li>Data binding and updates</li>
            </Typography>
          </Box>
        </Box>
      </ComponentSection>
    </ShowcaseLayout>
  );
}