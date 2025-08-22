"use client";

import React, { useState } from "react";
import { Box, Paper, IconButton, Tooltip, Typography, Collapse } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  collapsible?: boolean;
  defaultExpanded?: boolean;
  showLineNumbers?: boolean;
}

export default function CodeBlock({
  code,
  language = 'tsx',
  title,
  collapsible = false,
  defaultExpanded = true,
  showLineNumbers = true
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(defaultExpanded);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        overflow: 'hidden',
        mb: 3,
        backgroundColor: '#1e1e1e'
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          py: 1,
          borderBottom: '1px solid',
          borderColor: 'rgba(255, 255, 255, 0.1)',
          backgroundColor: '#252526'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {title && (
            <Typography 
              variant="caption" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.7)',
                fontFamily: 'monospace',
                fontSize: '0.875rem'
              }}
            >
              {title}
            </Typography>
          )}
        </Box>

        <Box sx={{ display: 'flex', gap: 0.5 }}>
          {collapsible && (
            <Tooltip title={expanded ? "Collapse" : "Expand"}>
              <IconButton
                size="small"
                onClick={toggleExpanded}
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  '&:hover': {
                    color: 'rgba(255, 255, 255, 0.9)'
                  }
                }}
              >
                {expanded ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
              </IconButton>
            </Tooltip>
          )}
          
          <Tooltip title={copied ? "Copied!" : "Copy code"}>
            <IconButton
              size="small"
              onClick={handleCopy}
              sx={{ 
                color: copied ? '#4caf50' : 'rgba(255, 255, 255, 0.7)',
                '&:hover': {
                  color: copied ? '#4caf50' : 'rgba(255, 255, 255, 0.9)'
                }
              }}
            >
              {copied ? <CheckIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* Code Content */}
      <Collapse in={expanded}>
        <Box
          component="pre"
          sx={{
            margin: 0,
            padding: 2,
            backgroundColor: '#1e1e1e',
            color: '#d4d4d4',
            fontSize: '0.875rem',
            fontFamily: 'Consolas, Monaco, "Courier New", monospace',
            overflowX: 'auto',
            lineHeight: 1.5,
            '&::-webkit-scrollbar': {
              height: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#2e2e2e',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#555',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: '#666',
            },
          }}
        >
          <code>{code.trim()}</code>
        </Box>
      </Collapse>
    </Paper>
  );
}