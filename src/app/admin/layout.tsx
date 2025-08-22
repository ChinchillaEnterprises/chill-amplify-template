"use client";

import React from "react";
import { Box, Container } from "@mui/material";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // The main layout already has the sidebar, so we just need to wrap the content
  return (
    <Box sx={{ width: '100%' }}>
      <Container maxWidth="xl" sx={{ py: 3 }}>
        {children}
      </Container>
    </Box>
  );
}