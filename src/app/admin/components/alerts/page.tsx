"use client";

import React, { useState } from "react";
import { 
  Alert, 
  AlertTitle,
  Button, 
  Box, 
  Typography,
  IconButton,
  Collapse
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import ShowcaseLayout from "@/components/ComponentShowcase/ShowcaseLayout";
import LiveExample from "@/components/ComponentShowcase/LiveExample";
import CodeBlock from "@/components/ComponentShowcase/CodeBlock";
import ComponentSection from "@/components/ComponentShowcase/ComponentSection";

export default function AlertsShowcase() {
  const [open, setOpen] = useState(true);

  const basicAlertCode = `<Alert severity="error">This is an error alert.</Alert>
<Alert severity="warning">This is a warning alert.</Alert>
<Alert severity="info">This is an info alert.</Alert>
<Alert severity="success">This is a success alert.</Alert>`;

  const alertWithTitleCode = `<Alert severity="error">
  <AlertTitle>Error</AlertTitle>
  This is an error alert with a title.
</Alert>`;

  const alertWithActionCode = `<Alert 
  severity="warning"
  action={
    <Button color="inherit" size="small">
      UNDO
    </Button>
  }
>
  This is a warning alert with an action.
</Alert>`;

  return (
    <ShowcaseLayout
      title="Alerts"
      description="Alerts display brief, important messages in a way that attracts the user's attention without interrupting the user's task."
    >
      {/* Basic Alerts */}
      <ComponentSection 
        title="Basic Alerts"
        description="Alerts with different severity levels."
      >
        <LiveExample>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Alert severity="error">This is an error alert — check it out!</Alert>
            <Alert severity="warning">This is a warning alert — check it out!</Alert>
            <Alert severity="info">This is an info alert — check it out!</Alert>
            <Alert severity="success">This is a success alert — check it out!</Alert>
          </Box>
        </LiveExample>
        <CodeBlock code={basicAlertCode} title="BasicAlerts.tsx" />
      </ComponentSection>

      {/* Alerts with Titles */}
      <ComponentSection 
        title="Alerts with Titles"
        description="Use AlertTitle to add descriptive titles to alerts."
      >
        <LiveExample>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              This is an error alert with a title — <strong>check it out!</strong>
            </Alert>
            <Alert severity="warning">
              <AlertTitle>Warning</AlertTitle>
              This is a warning alert with a title — <strong>check it out!</strong>
            </Alert>
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              This is a success alert with a title — <strong>check it out!</strong>
            </Alert>
          </Box>
        </LiveExample>
        <CodeBlock code={alertWithTitleCode} title="AlertsWithTitle.tsx" />
      </ComponentSection>

      {/* Alerts with Actions */}
      <ComponentSection 
        title="Alerts with Actions"
        description="Include action buttons in alerts for user interaction."
      >
        <LiveExample>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Alert 
              severity="warning"
              action={
                <Button color="inherit" size="small">
                  UNDO
                </Button>
              }
            >
              This is a warning alert with an action button.
            </Alert>
            <Alert
              severity="info"
              action={
                <IconButton
                  color="inherit"
                  size="small"
                  onClick={() => setOpen(false)}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              This is an info alert with a close button.
            </Alert>
          </Box>
        </LiveExample>
        <CodeBlock code={alertWithActionCode} title="AlertsWithAction.tsx" />
      </ComponentSection>

      {/* Alert Variants */}
      <ComponentSection 
        title="Alert Variants"
        description="Different visual styles for alerts."
      >
        <LiveExample>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Alert variant="filled" severity="success">
              Filled success alert
            </Alert>
            <Alert variant="outlined" severity="info">
              Outlined info alert
            </Alert>
            <Alert variant="standard" severity="warning">
              Standard warning alert
            </Alert>
          </Box>
        </LiveExample>
      </ComponentSection>

      {/* Collapsible Alert */}
      <ComponentSection 
        title="Collapsible Alert"
        description="Alerts that can be shown or hidden."
      >
        <LiveExample>
          <Box>
            <Button 
              onClick={() => setOpen(!open)}
              sx={{ mb: 2 }}
            >
              {open ? 'Hide' : 'Show'} Alert
            </Button>
            <Collapse in={open}>
              <Alert
                severity="success"
                action={
                  <IconButton
                    color="inherit"
                    size="small"
                    onClick={() => setOpen(false)}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                <AlertTitle>Success</AlertTitle>
                This is a collapsible alert that can be toggled!
              </Alert>
            </Collapse>
          </Box>
        </LiveExample>
      </ComponentSection>

      {/* Usage Guidelines */}
      <ComponentSection 
        title="Usage Guidelines"
        description="Best practices for using alerts effectively."
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'success.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'success.dark', mb: 1, fontWeight: 600 }}>
              ✅ Do's
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Use appropriate severity levels</li>
              <li>Keep alert messages concise and clear</li>
              <li>Provide actionable next steps when possible</li>
              <li>Place alerts in contextually relevant locations</li>
              <li>Use dismissible alerts for non-critical messages</li>
            </Typography>
          </Box>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'error.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'error.dark', mb: 1, fontWeight: 600 }}>
              ❌ Don'ts
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Don't overuse alerts - they lose impact</li>
              <li>Avoid vague or unhelpful error messages</li>
              <li>Don't use alerts for regular content</li>
              <li>Avoid blocking critical user flows</li>
              <li>Don't forget to handle alert dismissal</li>
            </Typography>
          </Box>
        </Box>
      </ComponentSection>
    </ShowcaseLayout>
  );
}