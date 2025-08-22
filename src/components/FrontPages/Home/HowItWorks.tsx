"use client";

import * as React from "react";
import { 
  Box, 
  Typography, 
  Container, 
  Card, 
  CardContent,
  Stepper,
  Step,
  StepLabel,
  StepContent
} from "@mui/material";
import { 
  ChatBubble as ChatIcon,
  Build as BuildIcon,
  Rocket as LaunchIcon,
  AutoAwesome as MagicIcon
} from "@mui/icons-material";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: "Tell Claude What You Want",
      description: "Simply describe your vision in plain English. 'Build me a blog', 'Create a dashboard', 'I need an e-commerce page'",
      icon: <ChatIcon sx={{ fontSize: 40 }} />,
      color: "#E3F2FD",
      accentColor: "#2196F3",
      example: "Hey Claude, I need a user profile page with avatar upload and settings forms"
    },
    {
      title: "Claude Selects Components", 
      description: "AI analyzes your request and chooses the perfect combination from 45+ pre-built components",
      icon: <MagicIcon sx={{ fontSize: 40 }} />,
      color: "#F3E5F5",
      accentColor: "#9C27B0",
      example: "Claude picks: Avatar component + File Upload + Form Fields + Card Layout + Save Button"
    },
    {
      title: "Components Assemble Automatically",
      description: "Watch as individual pieces come together into a complete, functional page with proper styling and logic",
      icon: <BuildIcon sx={{ fontSize: 40 }} />,
      color: "#E8F5E8", 
      accentColor: "#4CAF50",
      example: "Components merge into a polished profile page with working upload and form validation"
    },
    {
      title: "Ready to Customize & Deploy",
      description: "Your page is ready! Tweak colors, adjust layouts, or ask Claude to add more features",
      icon: <LaunchIcon sx={{ fontSize: 40 }} />,
      color: "#FFF3E0",
      accentColor: "#FF9800",
      example: "Change the theme, add social login, or deploy to production - it's all ready to go"
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
            How It Works
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
            From idea to working page in minutes. No complex setup, no lengthy tutorials - just tell Claude what you want.
          </Typography>
        </Box>

        {/* Desktop Stepper */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Stepper orientation="vertical" sx={{ maxWidth: "800px", mx: "auto" }}>
            {steps.map((step, index) => (
              <Step key={index} active={true}>
                <StepLabel
                  StepIconComponent={() => (
                    <Box 
                      sx={{ 
                        width: 60, 
                        height: 60, 
                        borderRadius: 2,
                        bgcolor: step.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: step.accentColor,
                        mr: 3
                      }}
                    >
                      {step.icon}
                    </Box>
                  )}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                    {step.title}
                  </Typography>
                </StepLabel>
                <StepContent sx={{ ml: 4, pb: 4 }}>
                  <Typography 
                    variant="body1" 
                    sx={{ mb: 2, color: "text.secondary", lineHeight: 1.6 }}
                  >
                    {step.description}
                  </Typography>
                  <Box 
                    sx={{ 
                      bgcolor: "#F8F9FA",
                      p: 2,
                      borderRadius: 1,
                      borderLeft: `4px solid ${step.accentColor}`,
                      fontStyle: "italic"
                    }}
                  >
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      {step.example}
                    </Typography>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>

        {/* Mobile Cards */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {steps.map((step, index) => (
              <Card key={index} elevation={0} sx={{ border: "1px solid #E0E0E0" }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Box 
                      sx={{ 
                        width: 50, 
                        height: 50, 
                        borderRadius: 2,
                        bgcolor: step.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: step.accentColor,
                        mr: 2
                      }}
                    >
                      {step.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {index + 1}. {step.title}
                    </Typography>
                  </Box>
                  <Typography 
                    variant="body2" 
                    sx={{ mb: 2, color: "text.secondary", lineHeight: 1.5 }}
                  >
                    {step.description}
                  </Typography>
                  <Box 
                    sx={{ 
                      bgcolor: "#F8F9FA",
                      p: 2,
                      borderRadius: 1,
                      borderLeft: `3px solid ${step.accentColor}`
                    }}
                  >
                    <Typography variant="body2" sx={{ color: "#555", fontStyle: "italic" }}>
                      {step.example}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Bottom Message */}
        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 500,
              color: "#1a1a1a",
              mb: 2
            }}
          >
            No Code Knowledge Required
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: "text.secondary",
              maxWidth: "500px",
              mx: "auto"
            }}
          >
            Whether you're a beginner or experienced developer, the AI handles the complexity while you focus on your vision.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorks;