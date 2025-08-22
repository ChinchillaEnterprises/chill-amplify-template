"use client";

import React from "react";
import { Box, Typography, Paper, Button, Chip } from "@mui/material";
import ShowcaseLayout from "@/components/ComponentShowcase/ShowcaseLayout";
import ComponentSection from "@/components/ComponentShowcase/ComponentSection";
import CodeBlock from "@/components/ComponentShowcase/CodeBlock";
import LiveExample from "@/components/ComponentShowcase/LiveExample";
import { 
  Palette as PaletteIcon,
  FormatPaint as FormatPaintIcon,
  TextFields as TextFieldsIcon,
  Widgets as WidgetsIcon
} from "@mui/icons-material";

export default function ThemeSetupPage() {
  const basicThemeCode = `import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});`;

  const customColorsCode = `const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    success: {
      main: '#4caf50',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#2196f3',
    },
  },
});`;

  const typographyCode = `const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none', // Remove uppercase transformation
    },
  },
});`;

  const spacingCode = `const theme = createTheme({
  spacing: 8, // Default is 8px
  shape: {
    borderRadius: 12, // Default is 4px
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0,0,0,0.1)',
    '0px 4px 8px rgba(0,0,0,0.1)',
    // ... custom shadow values
  ],
});`;

  const componentOverridesCode = `const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          },
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
    },
  },
});`;

  const darkModeCode = `const theme = createTheme({
  palette: {
    mode: 'dark', // or 'light'
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
});

// Toggle between light and dark
const [darkMode, setDarkMode] = useState(false);
const theme = createTheme({
  palette: {
    mode: darkMode ? 'dark' : 'light',
  },
});`;

  return (
    <ShowcaseLayout
      title="Theme Setup"
      description="Learn how to customize the look and feel of your application with Material-UI's powerful theming system."
    >
      {/* Introduction */}
      <ComponentSection 
        title="Understanding Themes"
        description="Material-UI provides a powerful theming system that allows you to customize every aspect of your components"
      >
        <Box sx={{ my: 3 }}>
          <Typography variant="body1" paragraph>
            The theme specifies the color palette, typography, spacing, shadows, and component styles 
            for your application. By customizing the theme, you can ensure your app maintains a 
            consistent look and feel that matches your brand.
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 3 }}>
            <Paper elevation={0} sx={{ flex: '1 1 200px', p: 2, border: '1px solid', borderColor: 'divider' }}>
              <PaletteIcon sx={{ color: 'primary.main', mb: 1 }} />
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Colors</Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Primary, secondary, error, warning, info, success
              </Typography>
            </Paper>
            <Paper elevation={0} sx={{ flex: '1 1 200px', p: 2, border: '1px solid', borderColor: 'divider' }}>
              <TextFieldsIcon sx={{ color: 'secondary.main', mb: 1 }} />
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Typography</Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Font family, sizes, weights, line heights
              </Typography>
            </Paper>
            <Paper elevation={0} sx={{ flex: '1 1 200px', p: 2, border: '1px solid', borderColor: 'divider' }}>
              <FormatPaintIcon sx={{ color: 'success.main', mb: 1 }} />
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Spacing</Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Margins, paddings, gaps, breakpoints
              </Typography>
            </Paper>
            <Paper elevation={0} sx={{ flex: '1 1 200px', p: 2, border: '1px solid', borderColor: 'divider' }}>
              <WidgetsIcon sx={{ color: 'warning.main', mb: 1 }} />
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Components</Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Default props, style overrides, variants
              </Typography>
            </Paper>
          </Box>
        </Box>
      </ComponentSection>

      {/* Basic Theme */}
      <ComponentSection 
        title="Creating a Basic Theme"
        description="Start with a simple theme configuration"
      >
        <CodeBlock code={basicThemeCode} title="theme.js" />
        <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
          This creates a theme with custom primary and secondary colors. All components will 
          automatically use these colors.
        </Typography>
      </ComponentSection>

      {/* Color Palette */}
      <ComponentSection 
        title="Customizing Colors"
        description="Define your brand colors and semantic color tokens"
      >
        <CodeBlock code={customColorsCode} title="theme.js" />
        
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
            Color Preview
          </Typography>
          <LiveExample>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              <Button variant="contained" color="primary">Primary</Button>
              <Button variant="contained" color="secondary">Secondary</Button>
              <Button variant="contained" color="success">Success</Button>
              <Button variant="contained" color="error">Error</Button>
              <Button variant="contained" color="warning">Warning</Button>
              <Button variant="contained" color="info">Info</Button>
            </Box>
          </LiveExample>
        </Box>
      </ComponentSection>

      {/* Typography */}
      <ComponentSection 
        title="Typography Configuration"
        description="Customize fonts, sizes, and text styles"
      >
        <CodeBlock code={typographyCode} title="theme.js" />
        
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
            Typography Scale
          </Typography>
          <LiveExample>
            <Typography variant="h1" gutterBottom>Heading 1</Typography>
            <Typography variant="h2" gutterBottom>Heading 2</Typography>
            <Typography variant="h3" gutterBottom>Heading 3</Typography>
            <Typography variant="body1" gutterBottom>Body text example</Typography>
            <Typography variant="caption" gutterBottom display="block">Caption text</Typography>
          </LiveExample>
        </Box>
      </ComponentSection>

      {/* Spacing & Shape */}
      <ComponentSection 
        title="Spacing & Shape"
        description="Control the spacing system and component shapes"
      >
        <CodeBlock code={spacingCode} title="theme.js" />
        
        <Box sx={{ mt: 3 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
            The spacing unit affects all spacing-related properties (margin, padding, gap). 
            The shape defines border radius and other shape-related properties.
          </Typography>
          <LiveExample>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Paper sx={{ p: 2 }}>Default Radius (4px)</Paper>
              <Paper sx={{ p: 2, borderRadius: 2 }}>Custom Radius (16px)</Paper>
              <Paper sx={{ p: 2, borderRadius: '50%', width: 100, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Circle</Paper>
            </Box>
          </LiveExample>
        </Box>
      </ComponentSection>

      {/* Component Overrides */}
      <ComponentSection 
        title="Component Customization"
        description="Override default styles and props for specific components"
      >
        <CodeBlock code={componentOverridesCode} title="theme.js" />
        
        <Typography variant="body2" sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
          This configuration customizes all Button and TextField components globally. 
          No need to apply these styles individually.
        </Typography>
      </ComponentSection>

      {/* Dark Mode */}
      <ComponentSection 
        title="Dark Mode Support"
        description="Implement light and dark theme variants"
      >
        <CodeBlock code={darkModeCode} title="theme.js" />
        
        <Box sx={{ mt: 3, p: 3, bgcolor: 'grey.900', borderRadius: 1 }}>
          <Typography variant="body1" sx={{ color: 'grey.100', mb: 2 }}>
            Dark mode preview
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Chip label="Dark Theme" sx={{ bgcolor: 'grey.800', color: 'grey.100' }} />
            <Chip label="High Contrast" sx={{ bgcolor: 'grey.800', color: 'grey.100' }} />
            <Chip label="OLED Friendly" sx={{ bgcolor: 'grey.800', color: 'grey.100' }} />
          </Box>
        </Box>
      </ComponentSection>

      {/* Best Practices */}
      <ComponentSection 
        title="Best Practices"
        description="Tips for effective theme management"
      >
        <Box sx={{ my: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Paper elevation={0} sx={{ p: 2, border: '1px solid', borderColor: 'success.main', bgcolor: 'success.soft' }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'success.dark' }}>
                ✅ DO: Use theme tokens consistently
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                Always use theme.palette.primary.main instead of hardcoding colors
              </Typography>
            </Paper>

            <Paper elevation={0} sx={{ p: 2, border: '1px solid', borderColor: 'success.main', bgcolor: 'success.soft' }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'success.dark' }}>
                ✅ DO: Create semantic color names
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                Use 'error' for errors, 'success' for confirmations, etc.
              </Typography>
            </Paper>

            <Paper elevation={0} sx={{ p: 2, border: '1px solid', borderColor: 'error.main', bgcolor: 'error.soft' }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'error.dark' }}>
                ❌ DON'T: Override styles inline
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                Avoid style props when the styling should be consistent across the app
              </Typography>
            </Paper>

            <Paper elevation={0} sx={{ p: 2, border: '1px solid', borderColor: 'error.main', bgcolor: 'error.soft' }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'error.dark' }}>
                ❌ DON'T: Create too many custom variants
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                Keep your theme simple and maintainable
              </Typography>
            </Paper>
          </Box>
        </Box>
      </ComponentSection>
    </ShowcaseLayout>
  );
}