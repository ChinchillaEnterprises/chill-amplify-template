"use client";

import * as React from "react";
import { 
  Box, 
  Typography, 
  Container, 
  Chip,
  Button,
  Paper
} from "@mui/material";
import Link from "next/link";
import { 
  Extension as ExtensionIcon,
  SmartButton as ButtonIcon,
  TableChart as TableIcon,
  BarChart as ChartIcon,
  TextFields as FormIcon,
  Feedback as FeedbackIcon,
  Navigation as NavIcon,
  Image as MediaIcon
} from "@mui/icons-material";

const BuildingBlocks: React.FC = () => {
  const componentCategories = [
    {
      name: "Basic Components",
      icon: <ButtonIcon />,
      color: "#E3F2FD",
      textColor: "#1976D2",
      count: 6,
      components: ["Buttons", "Typography", "Colors", "Icons", "Badges", "Chips"]
    },
    {
      name: "Form Components", 
      icon: <FormIcon />,
      color: "#E8F5E8",
      textColor: "#388E3C",
      count: 5,
      components: ["Text Fields", "Select", "Radio", "Switch", "Slider"]
    },
    {
      name: "Data Display",
      icon: <TableIcon />,
      color: "#FFF3E0", 
      textColor: "#F57C00",
      count: 5,
      components: ["Tables", "Lists", "Cards", "Accordion", "Tabs"]
    },
    {
      name: "Charts & Graphs",
      icon: <ChartIcon />,
      color: "#F3E5F5",
      textColor: "#7B1FA2", 
      count: 10,
      components: ["Line", "Area", "Bar", "Pie", "Donut", "Radar", "Scatter", "Bubble", "Timeline", "Heatmap"]
    },
    {
      name: "Feedback",
      icon: <FeedbackIcon />,
      color: "#FFEBEE",
      textColor: "#C62828",
      count: 4,
      components: ["Alerts", "Dialogs", "Snackbars", "Progress"]
    },
    {
      name: "Navigation",
      icon: <NavIcon />,
      color: "#E0F2F1",
      textColor: "#00695C",
      count: 8,
      components: ["Navbar", "Sidebar", "Breadcrumbs", "Pagination", "Stepper", "Tabs", "Menu", "Drawer"]
    },
    {
      name: "Media & Content",
      icon: <MediaIcon />,
      color: "#F1F8E9",
      textColor: "#33691E",
      count: 7,
      components: ["Image Gallery", "Carousel", "Avatar", "Timeline", "Masonry", "Grid", "Divider"]
    }
  ];

  const totalComponents = componentCategories.reduce((sum, cat) => sum + cat.count, 0);

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "white" }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Box 
            sx={{ 
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              bgcolor: "#F5F5F5",
              px: 3,
              py: 1,
              borderRadius: "50px",
              mb: 3
            }}
          >
            <ExtensionIcon sx={{ fontSize: 20, color: "#666" }} />
            <Typography variant="body2" sx={{ fontWeight: 500, color: "#666" }}>
              Your Building Blocks
            </Typography>
          </Box>

          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              mb: 2,
              color: "#1a1a1a"
            }}
          >
            {totalComponents}+ Components Ready to Use
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: "text.secondary",
              maxWidth: "700px",
              mx: "auto",
              lineHeight: 1.6
            }}
          >
            Every component is pre-built, tested, and documented. 
            Claude knows how to combine them perfectly for your needs.
          </Typography>
        </Box>

        {/* Component Categories Grid */}
        <Box sx={{ 
          display: "grid", 
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr" },
          gap: 3,
          mb: 8
        }}>
          {componentCategories.map((category, index) => (
            <Paper 
              key={index}
              elevation={0}
              sx={{
                p: 3,
                border: "2px solid",
                borderColor: "transparent",
                borderRadius: 3,
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  borderColor: category.textColor,
                  transform: "translateY(-4px)",
                  boxShadow: `0 8px 32px ${category.textColor}20`
                }
              }}
            >
              {/* Category Header */}
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Box 
                  sx={{ 
                    width: 50, 
                    height: 50, 
                    borderRadius: 2,
                    bgcolor: category.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: category.textColor,
                    mr: 2
                  }}
                >
                  {category.icon}
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                    {category.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {category.count} components
                  </Typography>
                </Box>
              </Box>

              {/* Component List */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
                {category.components.map((component) => (
                  <Chip 
                    key={component}
                    label={component}
                    size="small"
                    sx={{
                      bgcolor: category.color,
                      color: category.textColor,
                      fontWeight: 500,
                      fontSize: "0.75rem"
                    }}
                  />
                ))}
              </Box>
            </Paper>
          ))}
        </Box>

        {/* Component Preview Stats */}
        <Box 
          sx={{ 
            bgcolor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            borderRadius: 4,
            p: 5,
            color: "white",
            textAlign: "center",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            Everything You Need, Nothing You Don't
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, mb: 4, maxWidth: "600px", mx: "auto" }}>
            Each component is documented with live examples, code snippets, 
            and usage guidelines. Perfect for learning or production.
          </Typography>

          <Box sx={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: 6, 
            mb: 4,
            flexWrap: "wrap"
          }}>
            {[
              { label: "Live Examples", value: "200+" },
              { label: "Code Snippets", value: "400+" },
              { label: "Usage Guides", value: "45+" },
              { label: "Ready to Copy", value: "100%" }
            ].map((stat, index) => (
              <Box key={index} sx={{ textAlign: "center" }}>
                <Typography variant="h4" sx={{ fontWeight: 700, color: "#FFD700" }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ display: "flex", gap: 3, justifyContent: "center", flexWrap: "wrap" }}>
            <Button
              component={Link}
              href="/admin"
              variant="contained"
              size="large"
              sx={{
                bgcolor: "#FFD700",
                color: "#1a1a1a",
                fontWeight: 600,
                px: 4,
                py: 1.5,
                "&:hover": { bgcolor: "#FFC107" }
              }}
            >
              Browse All Components
            </Button>
            <Button
              component={Link}
              href="/admin/introduction"
              variant="outlined"
              size="large"
              sx={{
                borderColor: "white",
                color: "white",
                fontWeight: 500,
                px: 4,
                py: 1.5,
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.1)",
                  borderColor: "white"
                }
              }}
            >
              Getting Started
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BuildingBlocks;