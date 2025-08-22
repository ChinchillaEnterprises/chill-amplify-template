"use client";

import React from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Card,
  CardContent,
  CardActions,
  TextField,
  InputAdornment
} from "@mui/material";
import {
  Search as SearchIcon,
  SmartButton as ButtonIcon,
  TextFields as TextFieldsIcon,
  TableChart as TableIcon,
  ShowChart as ChartIcon,
  Warning as AlertIcon,
  Speed as SpeedIcon,
  AutoAwesome as AutoAwesomeIcon,
  School as SchoolIcon,
  Code as CodeIcon,
  Palette as PaletteIcon,
  ViewInAr as ViewInArIcon
} from "@mui/icons-material";
import Link from "next/link";

const quickLinks = [
  {
    title: "Buttons",
    description: "Interactive elements for user actions",
    icon: <ButtonIcon />,
    path: "/admin/components/buttons",
    color: "#2196F3"
  },
  {
    title: "Text Fields",
    description: "Input components for user data",
    icon: <TextFieldsIcon />,
    path: "/admin/components/text-fields",
    color: "#4CAF50"
  },
  {
    title: "Tables",
    description: "Display data in rows and columns",
    icon: <TableIcon />,
    path: "/admin/components/tables",
    color: "#FF9800"
  },
  {
    title: "Charts",
    description: "Visualize data with beautiful charts",
    icon: <ChartIcon />,
    path: "/admin/charts/line",
    color: "#9C27B0"
  },
  {
    title: "Alerts",
    description: "Provide feedback messages to users",
    icon: <AlertIcon />,
    path: "/admin/components/alerts",
    color: "#F44336"
  },
  {
    title: "Cards",
    description: "Container components for content",
    icon: <ViewInArIcon />,
    path: "/admin/components/cards",
    color: "#00BCD4"
  }
];

const stats = [
  { label: "Total Components", value: "45+", color: "primary.main" },
  { label: "Code Examples", value: "200+", color: "success.main" },
  { label: "Chart Types", value: "10", color: "warning.main" },
  { label: "Form Controls", value: "15", color: "info.main" }
];

export default function AdminDashboard() {
  return (
    <Box>
      {/* Welcome Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
          Welcome to Chill Components 🎨
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary', mb: 3 }}>
          A comprehensive library of React components built with Material-UI
        </Typography>
        
        {/* Search Bar */}
        <Paper
          elevation={0}
          sx={{
            p: 2,
            border: '2px solid',
            borderColor: 'divider',
            borderRadius: 2,
            maxWidth: 600
          }}
        >
          <TextField
            fullWidth
            placeholder="Search components, examples, or documentation..."
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  border: 'none',
                },
              },
            }}
          />
        </Paper>
      </Box>

      {/* Stats */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 4 }}>
        {stats.map((stat) => (
          <Box key={stat.label} sx={{ flex: '1 1 200px' }}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                textAlign: 'center',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  color: stat.color,
                  mb: 1
                }}
              >
                {stat.value}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {stat.label}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Box>

      {/* Quick Links */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
          Popular Components
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          {quickLinks.map((link) => (
            <Box key={link.title} sx={{ flex: '1 1 300px', minWidth: 0 }}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'all 0.3s',
                  '&:hover': {
                    borderColor: link.color,
                    transform: 'translateY(-4px)',
                    boxShadow: `0 8px 24px ${link.color}20`
                  }
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 1.5,
                      borderRadius: 2,
                      bgcolor: `${link.color}15`,
                      color: link.color,
                      mb: 2
                    }}
                  >
                    {link.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {link.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {link.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    component={Link}
                    href={link.path}
                    size="small"
                    sx={{ color: link.color }}
                  >
                    Explore →
                  </Button>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Getting Started */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        <Box sx={{ flex: '1 1 300px', minWidth: 0 }}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              height: '100%'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <SchoolIcon sx={{ mr: 1, color: 'primary.main' }} />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Getting Started
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
              New to the component library? Start here to learn the basics and set up your project.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button variant="contained" size="small" component={Link} href="/admin/introduction">
                Read Docs
              </Button>
              <Button variant="outlined" size="small" component={Link} href="/admin/installation">
                Installation
              </Button>
            </Box>
          </Paper>
        </Box>

        <Box sx={{ flex: '1 1 300px', minWidth: 0 }}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              height: '100%'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <CodeIcon sx={{ mr: 1, color: 'success.main' }} />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Code Examples
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
              Browse real-world examples and complete implementations ready to copy and customize.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button variant="contained" color="success" size="small" component={Link} href="/admin/examples/forms">
                View Examples
              </Button>
              <Button variant="outlined" color="success" size="small" component={Link} href="/admin/examples/dashboards">
                Templates
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>

      {/* What's New */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
          What's New
        </Typography>
        <Paper
          elevation={0}
          sx={{
            p: 3,
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            bgcolor: 'primary.soft'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <AutoAwesomeIcon sx={{ color: 'primary.main' }} />
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                Component Showcase Launch 🚀
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Just now
              </Typography>
            </Box>
          </Box>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
            We've completely redesigned the admin area as a comprehensive component library. 
            Browse through 45+ components with live examples, copy-ready code, and detailed documentation.
          </Typography>
          <Button variant="text" size="small" component={Link} href="/admin/components/buttons">
            Explore Components →
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}