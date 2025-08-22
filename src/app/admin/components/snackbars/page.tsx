"use client";

import React from "react";
import { 
  Snackbar, 
  Alert,
  Button, 
  Box,
  IconButton,
  Typography
} from "@mui/material";
import ShowcaseLayout from "@/components/ComponentShowcase/ShowcaseLayout";
import LiveExample from "@/components/ComponentShowcase/LiveExample";
import CodeBlock from "@/components/ComponentShowcase/CodeBlock";
import ComponentSection from "@/components/ComponentShowcase/ComponentSection";
import CloseIcon from "@mui/icons-material/Close";

export default function SnackbarsShowcase() {
  const [basicOpen, setBasicOpen] = React.useState(false);
  const [successOpen, setSuccessOpen] = React.useState(false);
  const [errorOpen, setErrorOpen] = React.useState(false);
  const [warningOpen, setWarningOpen] = React.useState(false);

  const basicSnackbarCode = `const [open, setOpen] = React.useState(false);

<Button onClick={() => setOpen(true)}>Show Snackbar</Button>
<Snackbar
  open={open}
  autoHideDuration={6000}
  onClose={() => setOpen(false)}
  message="This is a basic snackbar message"
  action={
    <IconButton size="small" color="inherit" onClick={() => setOpen(false)}>
      <CloseIcon fontSize="small" />
    </IconButton>
  }
/>`;

  const alertSnackbarCode = `<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
  <Alert onClose={handleClose} severity="success">
    This is a success message!
  </Alert>
</Snackbar>

<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
  <Alert onClose={handleClose} severity="error">
    This is an error message!
  </Alert>
</Snackbar>`;

  const positionCode = `// Top center
<Snackbar
  anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
  open={open}
  message="Top center snackbar"
/>

// Bottom right
<Snackbar
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  open={open}
  message="Bottom right snackbar"
/>`;

  return (
    <ShowcaseLayout
      title="Snackbars"
      description="Snackbars provide brief messages about app processes at the bottom of the screen."
    >
      {/* Basic Snackbar */}
      <ComponentSection 
        title="Basic Snackbar"
        description="A simple snackbar with a message and close action."
      >
        <LiveExample>
          <Button variant="outlined" onClick={() => setBasicOpen(true)}>
            Show Basic Snackbar
          </Button>
          <Snackbar
            open={basicOpen}
            autoHideDuration={6000}
            onClose={() => setBasicOpen(false)}
            message="This is a basic snackbar message"
            action={
              <IconButton size="small" color="inherit" onClick={() => setBasicOpen(false)}>
                <CloseIcon fontSize="small" />
              </IconButton>
            }
          />
        </LiveExample>
        <CodeBlock code={basicSnackbarCode} title="BasicSnackbar.tsx" />
      </ComponentSection>

      {/* Alert Snackbars */}
      <ComponentSection 
        title="Alert Snackbars"
        description="Snackbars with different severity levels using Alert component."
      >
        <LiveExample>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button variant="contained" color="success" onClick={() => setSuccessOpen(true)}>
              Success
            </Button>
            <Button variant="contained" color="error" onClick={() => setErrorOpen(true)}>
              Error
            </Button>
            <Button variant="contained" color="warning" onClick={() => setWarningOpen(true)}>
              Warning
            </Button>
          </Box>

          <Snackbar open={successOpen} autoHideDuration={6000} onClose={() => setSuccessOpen(false)}>
            <Alert onClose={() => setSuccessOpen(false)} severity="success">
              Operation completed successfully!
            </Alert>
          </Snackbar>

          <Snackbar open={errorOpen} autoHideDuration={6000} onClose={() => setErrorOpen(false)}>
            <Alert onClose={() => setErrorOpen(false)} severity="error">
              An error occurred while processing your request.
            </Alert>
          </Snackbar>

          <Snackbar open={warningOpen} autoHideDuration={6000} onClose={() => setWarningOpen(false)}>
            <Alert onClose={() => setWarningOpen(false)} severity="warning">
              Please check your input and try again.
            </Alert>
          </Snackbar>
        </LiveExample>
        <CodeBlock code={alertSnackbarCode} title="AlertSnackbars.tsx" />
      </ComponentSection>

      {/* Positioning */}
      <ComponentSection 
        title="Positioning"
        description="Control where snackbars appear on the screen."
      >
        <CodeBlock code={positionCode} title="SnackbarPositions.tsx" />
        <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
          <Typography variant="body2">
            <strong>Available positions:</strong> top/bottom + left/center/right
          </Typography>
        </Box>
      </ComponentSection>

      {/* Usage Guidelines */}
      <ComponentSection 
        title="Usage Guidelines"
        description="Best practices for using snackbars effectively."
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'success.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'success.dark', mb: 1, fontWeight: 600 }}>
              ✅ Do's
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Use for brief confirmations and status updates</li>
              <li>Keep messages short and actionable</li>
              <li>Set appropriate auto-hide duration (4-6 seconds)</li>
              <li>Provide a way to dismiss manually</li>
            </Typography>
          </Box>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'error.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'error.dark', mb: 1, fontWeight: 600 }}>
              ❌ Don'ts
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Don't use for critical information that requires action</li>
              <li>Avoid showing multiple snackbars simultaneously</li>
              <li>Don't make them too persistent (no auto-hide)</li>
              <li>Avoid using for complex messages</li>
            </Typography>
          </Box>
        </Box>
      </ComponentSection>
    </ShowcaseLayout>
  );
}