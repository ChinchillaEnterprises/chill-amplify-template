"use client";

import React, { useState } from "react";
import { Box, Paper, IconButton, Tooltip, ButtonGroup, Button } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DevicesIcon from "@mui/icons-material/Devices";
import TabletIcon from "@mui/icons-material/Tablet";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

interface LiveExampleProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  centered?: boolean;
  background?: 'default' | 'paper' | 'grey';
  minHeight?: number;
  title?: string;
}

export default function LiveExample({ 
  children, 
  fullWidth = false,
  centered = true,
  background = 'paper',
  minHeight = 200,
  title
}: LiveExampleProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const getViewportWidth = () => {
    switch(viewport) {
      case 'mobile': return '375px';
      case 'tablet': return '768px';
      default: return '100%';
    }
  };

  const backgroundColors = {
    light: {
      default: '#ffffff',
      paper: '#f5f5f5',
      grey: '#e0e0e0'
    },
    dark: {
      default: '#121212',
      paper: '#1e1e1e',
      grey: '#2c2c2c'
    }
  };

  return (
    <Paper 
      elevation={0}
      sx={{ 
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        overflow: 'hidden',
        mb: 3
      }}
    >
      {/* Toolbar */}
      <Box 
        sx={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          py: 1,
          borderBottom: '1px solid',
          borderColor: 'divider',
          bgcolor: 'background.paper'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {title && (
            <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
              {title}
            </Typography>
          )}
        </Box>
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          {/* Viewport Selector */}
          <ButtonGroup size="small" variant="outlined">
            <Tooltip title="Desktop">
              <Button
                onClick={() => setViewport('desktop')}
                variant={viewport === 'desktop' ? 'contained' : 'outlined'}
                sx={{ minWidth: 'auto', px: 1 }}
              >
                <DevicesIcon fontSize="small" />
              </Button>
            </Tooltip>
            <Tooltip title="Tablet">
              <Button
                onClick={() => setViewport('tablet')}
                variant={viewport === 'tablet' ? 'contained' : 'outlined'}
                sx={{ minWidth: 'auto', px: 1 }}
              >
                <TabletIcon fontSize="small" />
              </Button>
            </Tooltip>
            <Tooltip title="Mobile">
              <Button
                onClick={() => setViewport('mobile')}
                variant={viewport === 'mobile' ? 'contained' : 'outlined'}
                sx={{ minWidth: 'auto', px: 1 }}
              >
                <PhoneIphoneIcon fontSize="small" />
              </Button>
            </Tooltip>
          </ButtonGroup>

          {/* Theme Toggle */}
          <ButtonGroup size="small" variant="outlined">
            <Tooltip title="Light Theme">
              <Button
                onClick={() => setTheme('light')}
                variant={theme === 'light' ? 'contained' : 'outlined'}
                sx={{ minWidth: 'auto', px: 1 }}
              >
                <LightModeIcon fontSize="small" />
              </Button>
            </Tooltip>
            <Tooltip title="Dark Theme">
              <Button
                onClick={() => setTheme('dark')}
                variant={theme === 'dark' ? 'contained' : 'outlined'}
                sx={{ minWidth: 'auto', px: 1 }}
              >
                <DarkModeIcon fontSize="small" />
              </Button>
            </Tooltip>
          </ButtonGroup>
        </Box>
      </Box>

      {/* Preview Area */}
      <Box
        sx={{
          backgroundColor: backgroundColors[theme][background],
          minHeight: minHeight,
          display: 'flex',
          alignItems: centered ? 'center' : 'flex-start',
          justifyContent: centered ? 'center' : 'flex-start',
          p: 3,
          transition: 'background-color 0.3s ease',
        }}
      >
        <Box
          sx={{
            width: getViewportWidth(),
            maxWidth: '100%',
            mx: 'auto',
            transition: 'width 0.3s ease',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              alignItems: 'center',
              justifyContent: centered ? 'center' : 'flex-start',
              ...(fullWidth && { width: '100%' })
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

// Add missing import
import { Typography } from "@mui/material";