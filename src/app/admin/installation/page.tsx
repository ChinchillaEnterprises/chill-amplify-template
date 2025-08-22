"use client";

import React from "react";
import { Box, Typography, Paper, Alert, Chip } from "@mui/material";
import ShowcaseLayout from "@/components/ComponentShowcase/ShowcaseLayout";
import ComponentSection from "@/components/ComponentShowcase/ComponentSection";
import CodeBlock from "@/components/ComponentShowcase/CodeBlock";
import { 
  Terminal as TerminalIcon,
  FolderOpen as FolderIcon,
  CheckCircle as CheckIcon
} from "@mui/icons-material";

export default function InstallationPage() {
  const npmInstallCode = `npm install @mui/material @emotion/react @emotion/styled`;
  
  const packageJsonCode = `{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "next": "^15.0.0",
    "@mui/material": "^5.14.0",
    "@emotion/react": "^11.11.0",
    "@emotion/styled": "^11.11.0"
  }
}`;

  const appSetupCode = `import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  // Your theme configuration
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;`;

  const firstComponentCode = `import { Button } from '@mui/material';

export default function MyComponent() {
  return (
    <Button variant="contained" color="primary">
      Hello Chill Components!
    </Button>
  );
}`;

  return (
    <ShowcaseLayout
      title="Installation"
      description="Get started with Chill Components in your React or Next.js application."
    >
      {/* Prerequisites */}
      <ComponentSection 
        title="Prerequisites"
        description="Before you begin, ensure you have the following installed"
      >
        <Box sx={{ my: 3 }}>
          <Paper elevation={0} sx={{ p: 3, border: '1px solid', borderColor: 'divider' }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              System Requirements
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckIcon sx={{ color: 'success.main', fontSize: 20 }} />
                <Typography variant="body2">
                  Node.js 16.8 or later
                </Typography>
                <Chip label="Required" size="small" color="error" />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckIcon sx={{ color: 'success.main', fontSize: 20 }} />
                <Typography variant="body2">
                  React 18.0 or later
                </Typography>
                <Chip label="Required" size="small" color="error" />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckIcon sx={{ color: 'success.main', fontSize: 20 }} />
                <Typography variant="body2">
                  TypeScript 4.5 or later
                </Typography>
                <Chip label="Recommended" size="small" color="warning" />
              </Box>
            </Box>
          </Paper>
        </Box>
      </ComponentSection>

      {/* Quick Start */}
      <ComponentSection 
        title="Quick Start"
        description="The fastest way to get started with Chill Components"
      >
        <Box sx={{ my: 3 }}>
          <Alert severity="info" sx={{ mb: 3 }}>
            This guide assumes you already have a React or Next.js application. 
            If not, create one using create-react-app or create-next-app first.
          </Alert>

          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <TerminalIcon sx={{ color: 'text.secondary' }} />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Step 1: Install Dependencies
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
              Install Material-UI and its peer dependencies using npm:
            </Typography>
            <CodeBlock code={npmInstallCode} title="Terminal" />
          </Box>

          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <FolderIcon sx={{ color: 'text.secondary' }} />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Step 2: Verify package.json
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
              Your package.json should now include these dependencies:
            </Typography>
            <CodeBlock code={packageJsonCode} title="package.json" />
          </Box>
        </Box>
      </ComponentSection>

      {/* Setup */}
      <ComponentSection 
        title="Application Setup"
        description="Configure your application to use Material-UI components"
      >
        <Box sx={{ my: 3 }}>
          <Typography variant="body1" paragraph>
            Wrap your application with the ThemeProvider and include CssBaseline for consistent styling:
          </Typography>
          <CodeBlock code={appSetupCode} title="_app.tsx (Next.js) or App.tsx (React)" />
          
          <Alert severity="success" sx={{ mt: 3 }}>
            <Typography variant="body2">
              <strong>Pro Tip:</strong> CssBaseline kickstarts an elegant, consistent, and simple baseline 
              to build upon. It removes browser default styles and applies Material Design principles.
            </Typography>
          </Alert>
        </Box>
      </ComponentSection>

      {/* First Component */}
      <ComponentSection 
        title="Your First Component"
        description="Let's create your first component using Chill Components"
      >
        <Box sx={{ my: 3 }}>
          <Typography variant="body1" paragraph>
            Now you're ready to use any Material-UI component in your application:
          </Typography>
          <CodeBlock code={firstComponentCode} title="MyComponent.tsx" />
          
          <Box sx={{ mt: 3, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              That's it! You've successfully installed Chill Components and created your first component. 
              Browse through our component library to discover all the available components and their usage.
            </Typography>
          </Box>
        </Box>
      </ComponentSection>

      {/* Alternative Installation Methods */}
      <ComponentSection 
        title="Alternative Installation"
        description="Other ways to install the components"
      >
        <Box sx={{ my: 3 }}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              Using Yarn
            </Typography>
            <CodeBlock code="yarn add @mui/material @emotion/react @emotion/styled" title="Terminal" />
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              Using pnpm
            </Typography>
            <CodeBlock code="pnpm add @mui/material @emotion/react @emotion/styled" title="Terminal" />
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              CDN (for prototyping only)
            </Typography>
            <Alert severity="warning" sx={{ mb: 2 }}>
              CDN links are great for prototyping, but not recommended for production use.
            </Alert>
            <CodeBlock 
              code={`<!-- Fonts -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
<!-- Icons -->
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />`} 
              title="index.html" 
            />
          </Box>
        </Box>
      </ComponentSection>

      {/* Troubleshooting */}
      <ComponentSection 
        title="Troubleshooting"
        description="Common installation issues and their solutions"
      >
        <Box sx={{ my: 3 }}>
          <Alert severity="error" sx={{ mb: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              Error: Can't resolve '@emotion/react'
            </Typography>
            <Typography variant="body2">
              Solution: Ensure you've installed all peer dependencies: @emotion/react and @emotion/styled
            </Typography>
          </Alert>

          <Alert severity="error" sx={{ mb: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              TypeScript errors with Material-UI components
            </Typography>
            <Typography variant="body2">
              Solution: Install type definitions: npm install @types/react @types/react-dom
            </Typography>
          </Alert>

          <Alert severity="error">
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              Styles not applying correctly
            </Typography>
            <Typography variant="body2">
              Solution: Make sure you've wrapped your app with ThemeProvider and included CssBaseline
            </Typography>
          </Alert>
        </Box>
      </ComponentSection>
    </ShowcaseLayout>
  );
}