"use client";

import React from "react";
import { Box, Typography, Divider } from "@mui/material";

interface ComponentSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export default function ComponentSection({ 
  title, 
  description, 
  children 
}: ComponentSectionProps) {
  return (
    <Box sx={{ mb: 6 }}>
      <Box sx={{ mb: 3 }}>
        <Typography 
          variant="h5" 
          component="h2" 
          sx={{ 
            fontWeight: 500,
            mb: 1,
            color: 'text.primary'
          }}
        >
          {title}
        </Typography>
        {description && (
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'text.secondary',
              mb: 2
            }}
          >
            {description}
          </Typography>
        )}
        <Divider sx={{ mt: 2 }} />
      </Box>
      
      <Box>
        {children}
      </Box>
    </Box>
  );
}