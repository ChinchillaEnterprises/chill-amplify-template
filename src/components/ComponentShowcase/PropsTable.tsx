"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Chip,
  Box
} from "@mui/material";

interface PropDefinition {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
}

interface PropsTableProps {
  props: PropDefinition[];
  title?: string;
}

export default function PropsTable({ props, title = "Props" }: PropsTableProps) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography 
        variant="h6" 
        sx={{ mb: 2, fontWeight: 500 }}
      >
        {title}
      </Typography>
      
      <TableContainer 
        component={Paper} 
        elevation={0}
        sx={{ 
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Prop</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Type</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Default</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.map((prop) => (
              <TableRow key={prop.name}>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography
                      component="code"
                      sx={{
                        fontFamily: 'Consolas, Monaco, monospace',
                        fontSize: '0.875rem',
                        color: 'primary.main',
                        backgroundColor: 'action.hover',
                        px: 1,
                        py: 0.25,
                        borderRadius: 1
                      }}
                    >
                      {prop.name}
                    </Typography>
                    {prop.required && (
                      <Chip 
                        label="required" 
                        size="small" 
                        color="error"
                        sx={{ height: '20px', fontSize: '0.7rem' }}
                      />
                    )}
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography
                    component="code"
                    sx={{
                      fontFamily: 'Consolas, Monaco, monospace',
                      fontSize: '0.8rem',
                      color: 'text.secondary'
                    }}
                  >
                    {prop.type}
                  </Typography>
                </TableCell>
                <TableCell>
                  {prop.default ? (
                    <Typography
                      component="code"
                      sx={{
                        fontFamily: 'Consolas, Monaco, monospace',
                        fontSize: '0.8rem',
                        color: 'text.secondary'
                      }}
                    >
                      {prop.default}
                    </Typography>
                  ) : (
                    <Typography sx={{ color: 'text.disabled', fontSize: '0.875rem' }}>
                      —
                    </Typography>
                  )}
                </TableCell>
                <TableCell>
                  <Typography variant="body2">
                    {prop.description}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}