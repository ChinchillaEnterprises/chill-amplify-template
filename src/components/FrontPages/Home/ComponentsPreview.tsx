"use client";

import * as React from "react";
import { 
  Box, 
  Typography, 
  Container, 
  Card, 
  CardContent, 
  Button,
  Chip,
  Avatar,
  LinearProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel
} from "@mui/material";
import Link from "next/link";
import { 
  ExpandMore as ExpandMoreIcon,
  Favorite as FavoriteIcon,
  Star as StarIcon,
  Visibility as EyeIcon,
  Code as CodeIcon
} from "@mui/icons-material";

const ComponentsPreview: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [accordionExpanded, setAccordionExpanded] = React.useState(false);
  const [switchChecked, setSwitchChecked] = React.useState(true);

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#FAFAFA" }}>
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
            See Components in Action
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: "text.secondary",
              maxWidth: "700px",
              mx: "auto",
              lineHeight: 1.6,
              mb: 4
            }}
          >
            Every component is battle-tested and ready to use. Here's a small taste of what you get out of the box.
          </Typography>
        </Box>

        {/* Live Component Examples Grid */}
        <Box sx={{ 
          display: "grid", 
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 4,
          mb: 8
        }}>
          {/* Forms & Inputs Example */}
          <Card elevation={2} sx={{ p: 3 }}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                Forms & Inputs
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Complete form components with validation
              </Typography>
            </Box>
            
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField 
                label="Email Address" 
                variant="outlined" 
                size="small"
                defaultValue="user@example.com"
                disabled
              />
              <FormControl size="small">
                <InputLabel>Category</InputLabel>
                <Select
                  value={selectedCategory}
                  label="Category"
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <MenuItem value="all">All Categories</MenuItem>
                  <MenuItem value="business">Business</MenuItem>
                  <MenuItem value="personal">Personal</MenuItem>
                </Select>
              </FormControl>
              <FormControlLabel
                control={
                  <Switch 
                    checked={switchChecked}
                    onChange={(e) => setSwitchChecked(e.target.checked)}
                  />
                }
                label="Enable notifications"
              />
            </Box>
          </Card>

          {/* Data Display Example */}
          <Card elevation={2} sx={{ p: 3 }}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                Data Display
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Cards, chips, progress, and more
              </Typography>
            </Box>
            
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar sx={{ bgcolor: "#2196F3" }}>JD</Avatar>
                <Box>
                  <Typography variant="subtitle2">John Doe</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Product Manager
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                <Chip label="React" color="primary" size="small" />
                <Chip label="TypeScript" color="secondary" size="small" />
                <Chip label="Next.js" variant="outlined" size="small" />
              </Box>
              
              <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Typography variant="body2">Project Progress</Typography>
                  <Typography variant="body2">75%</Typography>
                </Box>
                <LinearProgress variant="determinate" value={75} />
              </Box>
              
              <Box sx={{ display: "flex", gap: 1 }}>
                <Button size="small" startIcon={<FavoriteIcon />} variant="outlined">
                  Like
                </Button>
                <Button size="small" startIcon={<StarIcon />} variant="contained">
                  Star
                </Button>
              </Box>
            </Box>
          </Card>

          {/* Interactive Components Example */}
          <Card elevation={2} sx={{ p: 3 }}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                Interactive Components
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Accordions, tabs, and expandable content
              </Typography>
            </Box>
            
            <Accordion 
              expanded={accordionExpanded} 
              onChange={() => setAccordionExpanded(!accordionExpanded)}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Frequently Asked Questions</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary">
                  This is an example of an expandable accordion component. 
                  Perfect for FAQs, feature lists, or any collapsible content.
                </Typography>
              </AccordionDetails>
            </Accordion>
            
            <Box sx={{ mt: 2, p: 2, bgcolor: "#F5F5F5", borderRadius: 1 }}>
              <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                💡 Tip: Every component is fully customizable and follows Material Design principles.
              </Typography>
            </Box>
          </Card>

          {/* Charts & Visualization Placeholder */}
          <Card elevation={2} sx={{ p: 3 }}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                Charts & Visualization
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Recharts integration for beautiful data viz
              </Typography>
            </Box>
            
            {/* Simple Chart Mockup */}
            <Box sx={{ 
              height: 120, 
              bgcolor: "#E3F2FD", 
              borderRadius: 1, 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              mb: 2,
              position: "relative"
            }}>
              <Typography variant="h4" sx={{ color: "#1976D2", fontWeight: 300 }}>
                📊
              </Typography>
              <Box sx={{ 
                position: "absolute", 
                bottom: 8, 
                left: 8, 
                right: 8,
                display: "flex",
                justifyContent: "space-between"
              }}>
                {[40, 65, 80, 45, 90].map((height, index) => (
                  <Box 
                    key={index}
                    sx={{ 
                      width: 12, 
                      height: `${height}%`, 
                      bgcolor: "#1976D2", 
                      borderRadius: "2px 2px 0 0",
                      opacity: 0.7
                    }} 
                  />
                ))}
              </Box>
            </Box>
            
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center" }}>
              Line charts, bar charts, pie charts, and more - all responsive and interactive.
            </Typography>
          </Card>
        </Box>

        {/* Stats Section */}
        <Box 
          sx={{ 
            bgcolor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            borderRadius: 4,
            p: 5,
            color: "white",
            textAlign: "center",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            mb: 6
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            Production-Ready Components
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, mb: 4, maxWidth: "600px", mx: "auto" }}>
            Every component includes documentation, examples, and TypeScript support
          </Typography>

          <Box sx={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: 6, 
            flexWrap: "wrap"
          }}>
            {[
              { icon: "🎨", label: "Material Design", value: "100%" },
              { icon: "📱", label: "Mobile Ready", value: "100%" },
              { icon: "⚡", label: "Performance", value: "A+ Grade" },
              { icon: "🔧", label: "Customizable", value: "Fully" }
            ].map((stat, index) => (
              <Box key={index} sx={{ textAlign: "center" }}>
                <Typography variant="h3" sx={{ mb: 1 }}>
                  {stat.icon}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, color: "#FFD700" }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* CTA Section */}
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
            This is just the beginning. Explore all 45+ components.
          </Typography>
          <Box sx={{ display: "flex", gap: 3, justifyContent: "center", flexWrap: "wrap" }}>
            <Button
              component={Link}
              href="/admin"
              variant="contained"
              size="large"
              startIcon={<EyeIcon />}
              sx={{
                bgcolor: "#667eea",
                fontWeight: 600,
                px: 4,
                py: 1.5,
                "&:hover": { bgcolor: "#5a6fd8" }
              }}
            >
              Browse All Components
            </Button>
            <Button
              component={Link}
              href="/admin/basic-components/buttons"
              variant="outlined"
              size="large"
              startIcon={<CodeIcon />}
              sx={{
                borderColor: "#667eea",
                color: "#667eea",
                fontWeight: 500,
                px: 4,
                py: 1.5,
                "&:hover": {
                  borderColor: "#5a6fd8",
                  bgcolor: "rgba(102, 126, 234, 0.05)"
                }
              }}
            >
              See Code Examples
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ComponentsPreview;