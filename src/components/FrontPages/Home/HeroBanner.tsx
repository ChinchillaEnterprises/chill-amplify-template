"use client";

import * as React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Link from "next/link";
import { 
  AutoAwesome as AutoAwesomeIcon,
  Build as BuildIcon,
  Speed as SpeedIcon
} from "@mui/icons-material";

const HeroBanner: React.FC = () => {
  return (
    <>
      <Box
        className="fp-banner-area"
        sx={{
          mb: { xs: "60px", sm: "60px", md: "80px", lg: "100px", xl: "150px" },
          pt: { xs: "120px", md: "150px" },
          pb: { xs: "60px", md: "100px" },
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Background decoration */}
        <Box
          sx={{
            position: "absolute",
            top: "-50%",
            right: "-20%",
            width: "40%",
            height: "200%",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "50%",
            transform: "rotate(15deg)"
          }}
        />
        
        <Container maxWidth="lg">
          <Box
            className="fp-banner-content"
            sx={{
              textAlign: "center",
              position: "relative",
              zIndex: 2
            }}
          >
            {/* Badge */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                bgcolor: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
                px: 3,
                py: 1,
                borderRadius: "50px",
                mb: 3,
                border: "1px solid rgba(255,255,255,0.2)"
              }}
            >
              <AutoAwesomeIcon sx={{ fontSize: 20 }} />
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                AI-Powered Component Building
              </Typography>
            </Box>

            {/* Main heading */}
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
                fontWeight: 700,
                mb: 3,
                lineHeight: 1.2
              }}
            >
              Build Anything with
              <br />
              <Box component="span" sx={{ color: "#FFD700" }}>
                AI + Components
              </Box>
            </Typography>

            {/* Subtitle */}
            <Typography 
              variant="h5" 
              sx={{ 
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                fontWeight: 400,
                mb: 4,
                opacity: 0.9,
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.6
              }}
            >
              Tell Claude what you want to build. Watch it assemble 45+ ready-made components into your vision. 
              Blog, dashboard, e-commerce – it's all possible.
            </Typography>

            {/* CTA Buttons */}
            <Box sx={{ display: "flex", gap: 3, justifyContent: "center", flexWrap: "wrap" }}>
              <Button
                component={Link}
                href="/admin"
                variant="contained"
                size="large"
                startIcon={<BuildIcon />}
                sx={{
                  bgcolor: "#FFD700",
                  color: "#1a1a1a",
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  fontSize: "1.1rem",
                  "&:hover": {
                    bgcolor: "#FFC107",
                    transform: "translateY(-2px)"
                  },
                  transition: "all 0.3s ease"
                }}
              >
                Explore Components
              </Button>
              
              <Button
                component={Link}
                href="#examples"
                variant="outlined"
                size="large"
                startIcon={<SpeedIcon />}
                sx={{
                  borderColor: "rgba(255,255,255,0.5)",
                  color: "white",
                  fontWeight: 500,
                  px: 4,
                  py: 1.5,
                  fontSize: "1.1rem",
                  "&:hover": {
                    borderColor: "white",
                    bgcolor: "rgba(255,255,255,0.1)",
                    transform: "translateY(-2px)"
                  },
                  transition: "all 0.3s ease"
                }}
              >
                See Examples
              </Button>
            </Box>

            {/* Quick stats */}
            <Box 
              sx={{ 
                display: "flex", 
                justifyContent: "center", 
                gap: 4, 
                mt: 6,
                flexWrap: "wrap"
              }}
            >
              {[
                { number: "45+", label: "Components" },
                { number: "∞", label: "Possibilities" },
                { number: "0", label: "Setup Time" }
              ].map((stat, index) => (
                <Box key={index} sx={{ textAlign: "center" }}>
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      fontWeight: 700, 
                      color: "#FFD700",
                      mb: 0.5
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      opacity: 0.8,
                      fontWeight: 500
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HeroBanner;