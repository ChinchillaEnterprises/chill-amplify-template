"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import ShowcaseLayout from "@/components/ComponentShowcase/ShowcaseLayout";
import LiveExample from "@/components/ComponentShowcase/LiveExample";
import CodeBlock from "@/components/ComponentShowcase/CodeBlock";
import ComponentSection from "@/components/ComponentShowcase/ComponentSection";

export default function PieChartsShowcase() {
  const pieChartCode = `// Example using a charting library like Recharts
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Desktop', value: 45, color: '#1976d2' },
  { name: 'Mobile', value: 35, color: '#dc004e' },
  { name: 'Tablet', value: 20, color: '#9c27b0' }
];

const SimplePieChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={entry.color} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  </ResponsiveContainer>
);`;

  const SimplePieChart = () => {
    const data = [
      { name: 'Desktop', value: 45, color: '#1976d2' },
      { name: 'Mobile', value: 35, color: '#dc004e' },
      { name: 'Tablet', value: 20, color: '#9c27b0' }
    ];

    return (
      <Box sx={{ width: '100%', height: 300, bgcolor: 'grey.50', borderRadius: 1, p: 2 }}>
        <svg width="100%" height="100%" viewBox="0 0 400 250">
          {/* Pie slices */}
          <g transform="translate(200,125)">
            {/* Desktop - 45% */}
            <path 
              d="M 0,0 L 0,-80 A 80,80 0 0,1 51.4,-58.8 z" 
              fill="#1976d2" 
            />
            {/* Mobile - 35% */}
            <path 
              d="M 0,0 L 51.4,-58.8 A 80,80 0 0,1 51.4,58.8 z" 
              fill="#dc004e" 
            />
            {/* Tablet - 20% */}
            <path 
              d="M 0,0 L 51.4,58.8 A 80,80 0 0,1 0,-80 z" 
              fill="#9c27b0" 
            />
          </g>
          
          {/* Legend */}
          <g transform="translate(50, 200)">
            <rect x="0" y="0" width="12" height="12" fill="#1976d2" />
            <text x="20" y="10" fontSize="12" fill="#666">Desktop (45%)</text>
            
            <rect x="120" y="0" width="12" height="12" fill="#dc004e" />
            <text x="140" y="10" fontSize="12" fill="#666">Mobile (35%)</text>
            
            <rect x="240" y="0" width="12" height="12" fill="#9c27b0" />
            <text x="260" y="10" fontSize="12" fill="#666">Tablet (20%)</text>
          </g>
        </svg>
      </Box>
    );
  };

  const DonutChart = () => (
    <Box sx={{ width: '100%', height: 300, bgcolor: 'grey.50', borderRadius: 1, p: 2 }}>
      <svg width="100%" height="100%" viewBox="0 0 400 250">
        {/* Donut slices */}
        <g transform="translate(200,125)">
          {/* Desktop - 45% */}
          <path 
            d="M 0,-80 A 80,80 0 0,1 51.4,-58.8 L 25.7,-29.4 A 40,40 0 0,0 0,-40 z" 
            fill="#1976d2" 
          />
          {/* Mobile - 35% */}
          <path 
            d="M 51.4,-58.8 A 80,80 0 0,1 51.4,58.8 L 25.7,29.4 A 40,40 0 0,0 25.7,-29.4 z" 
            fill="#dc004e" 
          />
          {/* Tablet - 20% */}
          <path 
            d="M 51.4,58.8 A 80,80 0 0,1 0,-80 L 0,-40 A 40,40 0 0,0 25.7,29.4 z" 
            fill="#9c27b0" 
          />
          
          {/* Center text */}
          <text x="0" y="-5" textAnchor="middle" fontSize="16" fill="#666" fontWeight="bold">
            Total
          </text>
          <text x="0" y="15" textAnchor="middle" fontSize="20" fill="#333" fontWeight="bold">
            100%
          </text>
        </g>
        
        {/* Legend */}
        <g transform="translate(50, 200)">
          <rect x="0" y="0" width="12" height="12" fill="#1976d2" />
          <text x="20" y="10" fontSize="12" fill="#666">Desktop</text>
          
          <rect x="100" y="0" width="12" height="12" fill="#dc004e" />
          <text x="120" y="10" fontSize="12" fill="#666">Mobile</text>
          
          <rect x="180" y="0" width="12" height="12" fill="#9c27b0" />
          <text x="200" y="10" fontSize="12" fill="#666">Tablet</text>
        </g>
      </svg>
    </Box>
  );

  return (
    <ShowcaseLayout
      title="Pie Charts"
      description="Pie charts show proportions and percentages between categories by dividing a circle into proportional segments."
    >
      {/* Basic Pie Chart */}
      <ComponentSection 
        title="Basic Pie Chart"
        description="A simple pie chart showing data distribution across categories."
      >
        <LiveExample>
          <SimplePieChart />
        </LiveExample>
        <CodeBlock code={pieChartCode} title="PieChart.tsx" />
      </ComponentSection>

      {/* Donut Chart */}
      <ComponentSection 
        title="Donut Chart"
        description="A variation of pie chart with a hollow center, often used to display summary information."
      >
        <LiveExample>
          <DonutChart />
        </LiveExample>
      </ComponentSection>

      {/* Implementation Guidelines */}
      <ComponentSection 
        title="Implementation Guidelines"
        description="Best practices for pie chart implementation."
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'success.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'success.dark', mb: 1, fontWeight: 600 }}>
              ✅ Best Practices
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Use for showing parts of a whole</li>
              <li>Limit to 5-7 categories maximum</li>
              <li>Start largest slice at 12 o'clock</li>
              <li>Use distinct colors for each slice</li>
              <li>Include percentage labels when helpful</li>
            </Typography>
          </Box>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'info.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'info.dark', mb: 1, fontWeight: 600 }}>
              📊 Alternatives
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li><strong>Bar charts</strong> - Better for comparing values</li>
              <li><strong>Donut charts</strong> - Space for center content</li>
              <li><strong>Treemap</strong> - Hierarchical data</li>
              <li><strong>Stacked bar</strong> - Multiple categories</li>
            </Typography>
          </Box>
        </Box>
      </ComponentSection>
    </ShowcaseLayout>
  );
}