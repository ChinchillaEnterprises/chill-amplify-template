"use client";

import React from "react";
import { Box, Typography, Paper, Button, Divider } from "@mui/material";
import ShowcaseLayout from "@/components/ComponentShowcase/ShowcaseLayout";
import ComponentSection from "@/components/ComponentShowcase/ComponentSection";
import Link from "next/link";
import { 
  Speed as SpeedIcon,
  School as SchoolIcon,
  Code as CodeIcon,
  Palette as PaletteIcon,
  AutoAwesome as AutoAwesomeIcon,
  Groups as GroupsIcon
} from "@mui/icons-material";

export default function IntroductionPage() {
  return (
    <ShowcaseLayout
      title="Introduction"
      description="Welcome to Chill Components - A comprehensive React component library built with Material-UI for modern web applications."
    >
      {/* Welcome */}
      <ComponentSection 
        title="Welcome to Chill Components"
        description="Build beautiful, responsive applications faster with our extensive collection of pre-built components."
      >
        <Box sx={{ my: 3 }}>
          <Typography variant="body1" paragraph>
            Chill Components is a comprehensive library of React components designed to help developers 
            build modern web applications quickly and efficiently. Built on top of Material-UI, 
            our components are fully customizable, accessible, and ready for production use.
          </Typography>
          <Typography variant="body1" paragraph>
            Whether you're building a simple landing page or a complex dashboard application, 
            our component library provides everything you need to create stunning user interfaces.
          </Typography>
        </Box>
      </ComponentSection>

      {/* Key Features */}
      <ComponentSection 
        title="Key Features"
        description="What makes Chill Components special"
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, my: 3 }}>
          <Paper elevation={0} sx={{ flex: '1 1 280px', p: 3, border: '1px solid', borderColor: 'divider' }}>
            <SpeedIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Fast Development
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Pre-built components that work out of the box, allowing you to focus on your application logic.
            </Typography>
          </Paper>

          <Paper elevation={0} sx={{ flex: '1 1 280px', p: 3, border: '1px solid', borderColor: 'divider' }}>
            <PaletteIcon sx={{ fontSize: 40, color: 'secondary.main', mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Fully Customizable
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Every component can be customized to match your brand and design requirements.
            </Typography>
          </Paper>

          <Paper elevation={0} sx={{ flex: '1 1 280px', p: 3, border: '1px solid', borderColor: 'divider' }}>
            <CodeIcon sx={{ fontSize: 40, color: 'success.main', mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Clean Code
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Well-structured, documented code that follows React best practices and conventions.
            </Typography>
          </Paper>

          <Paper elevation={0} sx={{ flex: '1 1 280px', p: 3, border: '1px solid', borderColor: 'divider' }}>
            <AutoAwesomeIcon sx={{ fontSize: 40, color: 'warning.main', mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Modern Stack
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Built with React 18+, TypeScript, and Material-UI v5 for the best developer experience.
            </Typography>
          </Paper>
        </Box>
      </ComponentSection>

      {/* What's Included */}
      <ComponentSection 
        title="What's Included"
        description="Everything you need to build amazing applications"
      >
        <Box sx={{ my: 3 }}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              📦 45+ Components
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              From basic buttons to complex data tables, we've got you covered.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              🎨 Theming System
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Powerful theming capabilities to match your brand identity perfectly.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              📊 Chart Library
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Beautiful, responsive charts for data visualization needs.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              📱 Responsive Design
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              All components are mobile-first and work seamlessly across devices.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              ♿ Accessibility
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              WCAG 2.1 compliant components for inclusive applications.
            </Typography>
          </Box>
        </Box>
      </ComponentSection>

      {/* Getting Started */}
      <ComponentSection 
        title="Getting Started"
        description="Ready to build something amazing?"
      >
        <Box sx={{ my: 3 }}>
          <Typography variant="body1" paragraph>
            Follow our quick start guide to get up and running in minutes. We'll walk you through 
            installation, basic setup, and creating your first component.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
            <Button 
              variant="contained" 
              component={Link} 
              href="/admin/installation"
              endIcon={<SchoolIcon />}
            >
              Installation Guide
            </Button>
            <Button 
              variant="outlined" 
              component={Link} 
              href="/admin/theme-setup"
              endIcon={<PaletteIcon />}
            >
              Theme Setup
            </Button>
          </Box>
        </Box>
      </ComponentSection>

      {/* Community */}
      <ComponentSection 
        title="Join Our Community"
        description="Get help, share ideas, and contribute"
      >
        <Paper 
          elevation={0} 
          sx={{ 
            p: 3, 
            border: '1px solid', 
            borderColor: 'divider',
            bgcolor: 'primary.soft'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <GroupsIcon sx={{ fontSize: 40, color: 'primary.main' }} />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Built for Developers, by Developers
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Join thousands of developers using Chill Components in production
              </Typography>
            </Box>
          </Box>
          
          <Divider sx={{ my: 2 }} />
          
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Have questions or feedback? We'd love to hear from you! Check out our documentation, 
            browse examples, or reach out to our community for support.
          </Typography>
        </Paper>
      </ComponentSection>
    </ShowcaseLayout>
  );
}