"use client";

import * as React from "react";
import { 
  Box, 
  Typography, 
  Container, 
  Card, 
  CardContent, 
  Button,
  Chip
} from "@mui/material";
import Link from "next/link";
import { 
  Article as BlogIcon,
  ShoppingCart as EcommerceIcon,
  Dashboard as DashboardIcon,
  Palette as PortfolioIcon,
  Visibility as PreviewIcon,
  Code as CodeIcon
} from "@mui/icons-material";

const ExampleShowcase: React.FC = () => {
  const examples = [
    {
      id: "blog",
      title: "Blog Page",
      description: "Article layouts, comments, categories, and rich content formatting",
      icon: <BlogIcon sx={{ fontSize: 40 }} />,
      color: "#E3F2FD",
      accentColor: "#2196F3",
      components: ["Typography", "Cards", "Navigation", "Comments"],
      preview: "/dashboard", // Will replace with actual demo
      prompt: '"Hey Claude, build me a blog page with article cards and categories"'
    },
    {
      id: "ecommerce", 
      title: "E-commerce",
      description: "Product grids, shopping cart, checkout flow, and payment forms",
      icon: <EcommerceIcon sx={{ fontSize: 40 }} />,
      color: "#E8F5E8",
      accentColor: "#4CAF50",
      components: ["Product Cards", "Forms", "Tables", "Payment"],
      preview: "/dashboard", // Will replace with actual demo
      prompt: '"Hey Claude, create an e-commerce product page with cart functionality"'
    },
    {
      id: "dashboard",
      title: "Dashboard",
      description: "Analytics charts, data tables, KPI widgets, and admin panels",
      icon: <DashboardIcon sx={{ fontSize: 40 }} />,
      color: "#FFF3E0",
      accentColor: "#FF9800",
      components: ["Charts", "Tables", "Cards", "Navigation"],
      preview: "/dashboard", // Will replace with actual demo
      prompt: '"Hey Claude, build me a sales dashboard with charts and metrics"'
    },
    {
      id: "portfolio",
      title: "Portfolio",
      description: "Project galleries, contact forms, testimonials, and about sections",
      icon: <PortfolioIcon sx={{ fontSize: 40 }} />,
      color: "#F3E5F5",
      accentColor: "#9C27B0",
      components: ["Gallery", "Forms", "Typography", "Layout"],
      preview: "/dashboard", // Will replace with actual demo
      prompt: '"Hey Claude, create a portfolio site with project showcase"'
    }
  ];

  return (
    <Box 
      id="examples"
      sx={{ 
        py: { xs: 8, md: 12 },
        bgcolor: "#FAFAFA"
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              mb: 2,
              color: "#1a1a1a"
            }}
          >
            "Hey Claude, build me a..."
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: "text.secondary",
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.6
            }}
          >
            See how AI assembles components into complete pages. 
            Each example uses the same building blocks in different combinations.
          </Typography>
        </Box>

        {/* Example Cards Grid */}
        <Box sx={{ 
          display: "grid", 
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 4,
          mb: 6
        }}>
          {examples.map((example) => (
            <Card 
              key={example.id}
              elevation={0}
              sx={{
                height: "100%",
                border: "2px solid",
                borderColor: "transparent",
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: example.accentColor,
                  transform: "translateY(-4px)",
                  boxShadow: `0 8px 32px ${example.accentColor}20`
                }
              }}
            >
              <CardContent sx={{ p: 4, height: "100%", display: "flex", flexDirection: "column" }}>
                {/* Icon and Title */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Box 
                    sx={{ 
                      width: 80, 
                      height: 80, 
                      borderRadius: 2,
                      bgcolor: example.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: example.accentColor,
                      mr: 3
                    }}
                  >
                    {example.icon}
                  </Box>
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 0.5 }}>
                      {example.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {example.description}
                    </Typography>
                  </Box>
                </Box>

                {/* AI Prompt */}
                <Box 
                  sx={{ 
                    bgcolor: "#F5F5F5",
                    p: 2,
                    borderRadius: 1,
                    mb: 3,
                    border: "1px solid #E0E0E0"
                  }}
                >
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      fontStyle: "italic",
                      color: "#555",
                      fontSize: "0.9rem"
                    }}
                  >
                    {example.prompt}
                  </Typography>
                </Box>

                {/* Components Used */}
                <Box sx={{ mb: 3, flexGrow: 1 }}>
                  <Typography variant="subtitle2" sx={{ mb: 1.5, fontWeight: 600 }}>
                    Components Used:
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {example.components.map((component) => (
                      <Chip 
                        key={component}
                        label={component}
                        size="small"
                        sx={{
                          bgcolor: example.color,
                          color: example.accentColor,
                          fontWeight: 500
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                {/* Action Buttons */}
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Button
                    component={Link}
                    href={example.preview}
                    variant="contained"
                    startIcon={<PreviewIcon />}
                    sx={{
                      bgcolor: example.accentColor,
                      "&:hover": { bgcolor: example.accentColor }
                    }}
                  >
                    See Demo
                  </Button>
                  <Button
                    component={Link}
                    href="/admin"
                    variant="outlined"
                    startIcon={<CodeIcon />}
                    sx={{
                      borderColor: example.accentColor,
                      color: example.accentColor,
                      "&:hover": {
                        borderColor: example.accentColor,
                        bgcolor: example.color
                      }
                    }}
                  >
                    View Code
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Bottom CTA */}
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 500 }}>
            These are just examples. With 45+ components, the possibilities are endless.
          </Typography>
          <Button
            component={Link}
            href="/admin"
            variant="contained"
            size="large"
            sx={{
              bgcolor: "#667eea",
              fontWeight: 600,
              px: 4,
              py: 1.5,
              "&:hover": { bgcolor: "#5a6fd8" }
            }}
          >
            Explore All Components
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ExampleShowcase;