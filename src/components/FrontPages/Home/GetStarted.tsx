"use client";

import * as React from "react";
import { 
  Box, 
  Typography, 
  Container, 
  Card, 
  CardContent, 
  Button,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip
} from "@mui/material";
import Link from "next/link";
import { 
  PlayArrow as PlayIcon,
  Code as CodeIcon,
  School as LearnIcon,
  Rocket as RocketIcon,
  CheckCircle as CheckIcon,
  Speed as SpeedIcon,
  AutoAwesome as AIIcon
} from "@mui/icons-material";

const GetStarted: React.FC = () => {
  const quickSteps = [
    "Clone this repository",
    "Run npm install",
    "Start with npm run dev", 
    "Open /admin to explore components",
    "Tell Claude what you want to build"
  ];

  const learningPaths = [
    {
      title: "Beginner Path",
      description: "New to coding? Start here and learn by modifying existing components.",
      icon: <LearnIcon sx={{ fontSize: 40 }} />,
      color: "#E3F2FD",
      accentColor: "#2196F3",
      duration: "1-2 weeks",
      topics: ["Component basics", "Props & styling", "Layout patterns", "Color themes"],
      nextStep: "/admin/basic-components"
    },
    {
      title: "Builder Path", 
      description: "Ready to create? Jump in and start building complete pages with AI assistance.",
      icon: <RocketIcon sx={{ fontSize: 40 }} />,
      color: "#E8F5E8",
      accentColor: "#4CAF50", 
      duration: "Few hours",
      topics: ["Page layouts", "Component combinations", "AI prompting", "Customization"],
      nextStep: "/admin"
    },
    {
      title: "Developer Path",
      description: "Experienced developer? Dive into the codebase and extend the component library.",
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      color: "#FFF3E0",
      accentColor: "#FF9800",
      duration: "Immediate",
      topics: ["Code structure", "Custom components", "Advanced patterns", "Amplify Gen 2"],
      nextStep: "/admin/introduction"
    }
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "white" }}>
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
            Ready to Start Building?
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
            Whether you're learning to code or building your next project, we've got you covered.
          </Typography>
        </Box>

        {/* Quick Start Section */}
        <Paper 
          elevation={0}
          sx={{ 
            p: 4, 
            mb: 8, 
            bgcolor: "#F8F9FA",
            border: "1px solid #E0E0E0",
            borderRadius: 3
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <SpeedIcon sx={{ fontSize: 30, color: "#667eea", mr: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Quick Start (5 minutes)
            </Typography>
          </Box>
          
          <List sx={{ mb: 3 }}>
            {quickSteps.map((step, index) => (
              <ListItem key={index} sx={{ py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Box 
                    sx={{ 
                      width: 24, 
                      height: 24, 
                      borderRadius: "50%",
                      bgcolor: "#667eea",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      fontWeight: 600
                    }}
                  >
                    {index + 1}
                  </Box>
                </ListItemIcon>
                <ListItemText 
                  primary={step}
                  primaryTypographyProps={{
                    variant: "body1",
                    sx: { fontWeight: 500 }
                  }}
                />
              </ListItem>
            ))}
          </List>

          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button
              component={Link}
              href="/admin"
              variant="contained"
              size="large"
              startIcon={<PlayIcon />}
              sx={{
                bgcolor: "#667eea",
                fontWeight: 600,
                px: 3,
                "&:hover": { bgcolor: "#5a6fd8" }
              }}
            >
              Start Exploring Now
            </Button>
            <Button
              component={Link}
              href="/admin/introduction"
              variant="outlined"
              size="large"
              startIcon={<CodeIcon />}
              sx={{
                borderColor: "#667eea",
                color: "#667eea",
                fontWeight: 500,
                px: 3,
                "&:hover": {
                  borderColor: "#5a6fd8",
                  bgcolor: "rgba(102, 126, 234, 0.05)"
                }
              }}
            >
              Read Setup Guide
            </Button>
          </Box>
        </Paper>

        {/* Learning Paths */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h4" 
            sx={{ 
              textAlign: "center",
              fontWeight: 600,
              mb: 2
            }}
          >
            Choose Your Path
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              textAlign: "center",
              color: "text.secondary",
              mb: 6,
              maxWidth: "500px",
              mx: "auto"
            }}
          >
            Different approaches for different goals. All paths lead to building amazing things.
          </Typography>

          <Box sx={{ 
            display: "grid", 
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
            gap: 3
          }}>
            {learningPaths.map((path, index) => (
              <Card 
                key={index}
                elevation={0}
                sx={{
                  height: "100%",
                  border: "2px solid",
                  borderColor: "transparent",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: path.accentColor,
                    transform: "translateY(-4px)",
                    boxShadow: `0 8px 32px ${path.accentColor}20`
                  }
                }}
              >
                <CardContent sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column" }}>
                  {/* Header */}
                  <Box sx={{ textAlign: "center", mb: 3 }}>
                    <Box 
                      sx={{ 
                        width: 80, 
                        height: 80, 
                        borderRadius: 2,
                        bgcolor: path.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: path.accentColor,
                        mx: "auto",
                        mb: 2
                      }}
                    >
                      {path.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {path.title}
                    </Typography>
                    <Chip 
                      label={path.duration}
                      size="small"
                      sx={{
                        bgcolor: path.color,
                        color: path.accentColor,
                        fontWeight: 500
                      }}
                    />
                  </Box>

                  {/* Description */}
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: "text.secondary",
                      mb: 3,
                      lineHeight: 1.5,
                      flexGrow: 1
                    }}
                  >
                    {path.description}
                  </Typography>

                  {/* Topics */}
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                      You'll learn:
                    </Typography>
                    <List dense>
                      {path.topics.map((topic, topicIndex) => (
                        <ListItem key={topicIndex} sx={{ py: 0, px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 30 }}>
                            <CheckIcon sx={{ fontSize: 16, color: path.accentColor }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={topic}
                            primaryTypographyProps={{
                              variant: "body2",
                              sx: { color: "text.secondary" }
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>

                  {/* CTA */}
                  <Button
                    component={Link}
                    href={path.nextStep}
                    variant="contained"
                    fullWidth
                    sx={{
                      bgcolor: path.accentColor,
                      fontWeight: 500,
                      "&:hover": { bgcolor: path.accentColor }
                    }}
                  >
                    Start This Path
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Final CTA */}
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
          <AIIcon sx={{ fontSize: 60, mb: 2, color: "#FFD700" }} />
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            Your AI Development Journey Starts Now
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, mb: 4, maxWidth: "700px", mx: "auto" }}>
            Join thousands of developers using AI to build faster, learn quicker, and create better applications.
          </Typography>

          <Box sx={{ display: "flex", gap: 3, justifyContent: "center", flexWrap: "wrap" }}>
            <Button
              component={Link}
              href="/admin"
              variant="contained"
              size="large"
              startIcon={<PlayIcon />}
              sx={{
                bgcolor: "#FFD700",
                color: "#1a1a1a",
                fontWeight: 600,
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                "&:hover": { bgcolor: "#FFC107" }
              }}
            >
              Start Building
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<LearnIcon />}
              href="#examples"
              component={Link}
              sx={{
                borderColor: "rgba(255,255,255,0.5)",
                color: "white",
                fontWeight: 500,
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                "&:hover": {
                  borderColor: "white",
                  bgcolor: "rgba(255,255,255,0.1)"
                }
              }}
            >
              See Examples
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default GetStarted;