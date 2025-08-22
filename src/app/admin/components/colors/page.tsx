"use client";

import React from "react";
import { Box, Typography, Paper, Chip } from "@mui/material";
import ShowcaseLayout from "@/components/ComponentShowcase/ShowcaseLayout";
import ComponentSection from "@/components/ComponentShowcase/ComponentSection";
import CodeBlock from "@/components/ComponentShowcase/CodeBlock";

export default function ColorsShowcase() {
  const colorUsageCode = `// Using theme colors
<Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}>
  Primary Color
</Box>

<Typography color="secondary">Secondary Text</Typography>

<Button color="success">Success Button</Button>`;

  const customColorCode = `// Custom colors with sx prop
<Box sx={{ bgcolor: '#9c27b0', color: 'white' }}>
  Custom Purple
</Box>

// Using RGB values
<Box sx={{ bgcolor: 'rgb(255, 99, 71)' }}>
  Tomato Color
</Box>

// Using opacity
<Box sx={{ bgcolor: 'rgba(0, 0, 0, 0.5)' }}>
  Semi-transparent Black
</Box>`;

  const ColorPalette = ({ title, colors }: { title: string; colors: Array<{ name: string; value: string; textColor?: string }> }) => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>{title}</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {colors.map((color) => (
          <Paper
            key={color.name}
            elevation={0}
            sx={{
              width: 140,
              height: 100,
              bgcolor: color.value,
              color: color.textColor || 'white',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {color.name}
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.9 }}>
              {color.value}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );

  const primaryColors = [
    { name: 'primary.light', value: 'primary.light' },
    { name: 'primary.main', value: 'primary.main' },
    { name: 'primary.dark', value: 'primary.dark' },
  ];

  const secondaryColors = [
    { name: 'secondary.light', value: 'secondary.light' },
    { name: 'secondary.main', value: 'secondary.main' },
    { name: 'secondary.dark', value: 'secondary.dark' },
  ];

  const semanticColors = [
    { name: 'error', value: 'error.main' },
    { name: 'warning', value: 'warning.main' },
    { name: 'info', value: 'info.main' },
    { name: 'success', value: 'success.main' },
  ];

  const greyColors = [
    { name: 'grey.50', value: 'grey.50', textColor: 'grey.900' },
    { name: 'grey.100', value: 'grey.100', textColor: 'grey.900' },
    { name: 'grey.200', value: 'grey.200', textColor: 'grey.900' },
    { name: 'grey.300', value: 'grey.300', textColor: 'grey.900' },
    { name: 'grey.400', value: 'grey.400', textColor: 'grey.900' },
    { name: 'grey.500', value: 'grey.500' },
    { name: 'grey.600', value: 'grey.600' },
    { name: 'grey.700', value: 'grey.700' },
    { name: 'grey.800', value: 'grey.800' },
    { name: 'grey.900', value: 'grey.900' },
  ];

  return (
    <ShowcaseLayout
      title="Colors"
      description="Explore the color system and learn how to use theme colors effectively in your application."
    >
      {/* Primary Colors */}
      <ComponentSection 
        title="Primary Colors"
        description="The primary color is used for main actions and key interface elements."
      >
        <ColorPalette title="" colors={primaryColors} />
      </ComponentSection>

      {/* Secondary Colors */}
      <ComponentSection 
        title="Secondary Colors"
        description="Secondary colors complement the primary color and are used for secondary actions."
      >
        <ColorPalette title="" colors={secondaryColors} />
      </ComponentSection>

      {/* Semantic Colors */}
      <ComponentSection 
        title="Semantic Colors"
        description="Semantic colors convey meaning and are used for specific purposes like errors, warnings, and success states."
      >
        <ColorPalette title="" colors={semanticColors} />
      </ComponentSection>

      {/* Grey Scale */}
      <ComponentSection 
        title="Grey Scale"
        description="A range of grey shades for backgrounds, borders, and text."
      >
        <ColorPalette title="" colors={greyColors} />
      </ComponentSection>

      {/* Background Colors */}
      <ComponentSection 
        title="Background Colors"
        description="Common background colors used throughout the application."
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <Paper sx={{ p: 3, bgcolor: 'background.default', minWidth: 200 }}>
            <Typography variant="subtitle2">background.default</Typography>
            <Typography variant="caption" color="text.secondary">Default background</Typography>
          </Paper>
          <Paper sx={{ p: 3, bgcolor: 'background.paper', minWidth: 200 }}>
            <Typography variant="subtitle2">background.paper</Typography>
            <Typography variant="caption" color="text.secondary">Paper surface</Typography>
          </Paper>
          <Paper sx={{ p: 3, bgcolor: 'action.hover', minWidth: 200 }}>
            <Typography variant="subtitle2">action.hover</Typography>
            <Typography variant="caption" color="text.secondary">Hover state</Typography>
          </Paper>
          <Paper sx={{ p: 3, bgcolor: 'action.selected', minWidth: 200 }}>
            <Typography variant="subtitle2">action.selected</Typography>
            <Typography variant="caption" color="text.secondary">Selected state</Typography>
          </Paper>
        </Box>
      </ComponentSection>

      {/* Text Colors */}
      <ComponentSection 
        title="Text Colors"
        description="Standard text colors for different content types."
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography color="text.primary">
            text.primary - High emphasis text
          </Typography>
          <Typography color="text.secondary">
            text.secondary - Medium emphasis text
          </Typography>
          <Typography color="text.disabled">
            text.disabled - Disabled text
          </Typography>
          <Typography color="primary">
            primary - Primary color text
          </Typography>
          <Typography color="secondary">
            secondary - Secondary color text
          </Typography>
          <Typography color="error">
            error - Error text
          </Typography>
        </Box>
      </ComponentSection>

      {/* Color Usage */}
      <ComponentSection 
        title="Using Colors in Code"
        description="How to apply colors to components using the theme system."
      >
        <CodeBlock code={colorUsageCode} title="ColorUsage.tsx" />
      </ComponentSection>

      {/* Custom Colors */}
      <ComponentSection 
        title="Custom Colors"
        description="Using custom colors outside the theme palette."
      >
        <CodeBlock code={customColorCode} title="CustomColors.tsx" />
      </ComponentSection>

      {/* Color Contrast */}
      <ComponentSection 
        title="Color Contrast Guidelines"
        description="Ensure your color combinations meet accessibility standards."
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <Paper sx={{ p: 3, flex: '1 1 250px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Box sx={{ width: 24, height: 24, bgcolor: 'success.main', borderRadius: '50%' }} />
              <Typography variant="subtitle2" sx={{ color: 'success.main' }}>Good Contrast</Typography>
            </Box>
            <Box sx={{ p: 2, bgcolor: '#1976d2', color: 'white', borderRadius: 1, mb: 1 }}>
              White on Blue - WCAG AAA
            </Box>
            <Box sx={{ p: 2, bgcolor: '#000', color: 'white', borderRadius: 1 }}>
              White on Black - WCAG AAA
            </Box>
          </Paper>

          <Paper sx={{ p: 3, flex: '1 1 250px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Box sx={{ width: 24, height: 24, bgcolor: 'error.main', borderRadius: '50%' }} />
              <Typography variant="subtitle2" sx={{ color: 'error.main' }}>Poor Contrast</Typography>
            </Box>
            <Box sx={{ p: 2, bgcolor: '#ffeb3b', color: '#fff', borderRadius: 1, mb: 1 }}>
              White on Yellow - Fails WCAG
            </Box>
            <Box sx={{ p: 2, bgcolor: '#e0e0e0', color: '#bdbdbd', borderRadius: 1 }}>
              Light Grey on Grey - Fails WCAG
            </Box>
          </Paper>
        </Box>

        <Box sx={{ mt: 3, p: 2, bgcolor: 'info.soft', borderRadius: 1 }}>
          <Typography variant="body2">
            <strong>Tip:</strong> Always test your color combinations for accessibility. 
            Aim for a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text.
          </Typography>
        </Box>
      </ComponentSection>
    </ShowcaseLayout>
  );
}