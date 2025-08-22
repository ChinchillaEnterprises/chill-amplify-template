"use client";

import React from "react";
import { Box, Container, Typography, Breadcrumbs, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { usePathname } from "next/navigation";

interface ShowcaseLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function ShowcaseLayout({ 
  children, 
  title,
  description 
}: ShowcaseLayoutProps) {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);
  
  return (
    <Box sx={{ pb: 4 }}>
      {/* Breadcrumbs */}
      <Box sx={{ mb: 3 }}>
        <Breadcrumbs 
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          sx={{ 
            '& .MuiBreadcrumbs-separator': { 
              color: 'text.secondary' 
            }
          }}
        >
          <Link
            underline="hover"
            color="inherit"
            href="/admin"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            Dashboard
          </Link>
          {pathSegments.slice(1).map((segment, index) => {
            const href = `/${pathSegments.slice(0, index + 2).join('/')}`;
            const isLast = index === pathSegments.slice(1).length - 1;
            const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
            
            return isLast ? (
              <Typography key={segment} color="text.primary">
                {label}
              </Typography>
            ) : (
              <Link
                key={segment}
                underline="hover"
                color="inherit"
                href={href}
              >
                {label}
              </Link>
            );
          })}
        </Breadcrumbs>
      </Box>

      {/* Page Header */}
      {(title || description) && (
        <Box sx={{ mb: 4 }}>
          {title && (
            <Typography 
              variant="h4" 
              component="h1" 
              sx={{ 
                fontWeight: 600,
                mb: 1,
                color: 'text.primary'
              }}
            >
              {title}
            </Typography>
          )}
          {description && (
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'text.secondary',
                maxWidth: '800px'
              }}
            >
              {description}
            </Typography>
          )}
        </Box>
      )}

      {/* Main Content */}
      <Box>
        {children}
      </Box>
    </Box>
  );
}