"use client";

import React from "react";
import { 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle,
  Button, 
  Box,
  TextField,
  Typography
} from "@mui/material";
import ShowcaseLayout from "@/components/ComponentShowcase/ShowcaseLayout";
import LiveExample from "@/components/ComponentShowcase/LiveExample";
import CodeBlock from "@/components/ComponentShowcase/CodeBlock";
import ComponentSection from "@/components/ComponentShowcase/ComponentSection";

export default function DialogsShowcase() {
  const [basicOpen, setBasicOpen] = React.useState(false);
  const [formOpen, setFormOpen] = React.useState(false);
  const [alertOpen, setAlertOpen] = React.useState(false);

  const basicDialogCode = `const [open, setOpen] = React.useState(false);

<Button variant="outlined" onClick={() => setOpen(true)}>
  Open Dialog
</Button>
<Dialog open={open} onClose={() => setOpen(false)}>
  <DialogTitle>Dialog Title</DialogTitle>
  <DialogContent>
    <DialogContentText>
      This is a basic dialog with title and content.
    </DialogContentText>
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setOpen(false)}>Cancel</Button>
    <Button onClick={() => setOpen(false)} variant="contained">
      OK
    </Button>
  </DialogActions>
</Dialog>`;

  const formDialogCode = `<Dialog open={open} onClose={handleClose}>
  <DialogTitle>Subscribe</DialogTitle>
  <DialogContent>
    <DialogContentText>
      Enter your email address to subscribe to our newsletter.
    </DialogContentText>
    <TextField
      autoFocus
      margin="dense"
      label="Email Address"
      type="email"
      fullWidth
      variant="standard"
    />
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button onClick={handleClose}>Subscribe</Button>
  </DialogActions>
</Dialog>`;

  const alertDialogCode = `<Dialog open={open} onClose={handleClose}>
  <DialogTitle>Delete Item?</DialogTitle>
  <DialogContent>
    <DialogContentText>
      This action cannot be undone. Are you sure?
    </DialogContentText>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button onClick={handleClose} color="error" variant="contained">
      Delete
    </Button>
  </DialogActions>
</Dialog>`;

  return (
    <ShowcaseLayout
      title="Dialogs"
      description="Dialogs interrupt the user with important content and require a decision or additional information."
    >
      {/* Basic Dialog */}
      <ComponentSection 
        title="Basic Dialog"
        description="A simple dialog with title, content, and actions."
      >
        <LiveExample>
          <Button variant="outlined" onClick={() => setBasicOpen(true)}>
            Open Basic Dialog
          </Button>
          <Dialog open={basicOpen} onClose={() => setBasicOpen(false)}>
            <DialogTitle>Basic Dialog</DialogTitle>
            <DialogContent>
              <DialogContentText>
                This is a basic dialog with title and content. You can place any content here.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setBasicOpen(false)}>Cancel</Button>
              <Button onClick={() => setBasicOpen(false)} variant="contained">
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </LiveExample>
        <CodeBlock code={basicDialogCode} title="BasicDialog.tsx" />
      </ComponentSection>

      {/* Form Dialog */}
      <ComponentSection 
        title="Form Dialog"
        description="A dialog containing form elements for user input."
      >
        <LiveExample>
          <Button variant="contained" onClick={() => setFormOpen(true)}>
            Open Form Dialog
          </Button>
          <Dialog open={formOpen} onClose={() => setFormOpen(false)}>
            <DialogTitle>Subscribe to Newsletter</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Enter your email address to subscribe to our newsletter and receive updates.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                label="Email Address"
                type="email"
                fullWidth
                variant="outlined"
                sx={{ mt: 2 }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setFormOpen(false)}>Cancel</Button>
              <Button onClick={() => setFormOpen(false)} variant="contained">
                Subscribe
              </Button>
            </DialogActions>
          </Dialog>
        </LiveExample>
        <CodeBlock code={formDialogCode} title="FormDialog.tsx" />
      </ComponentSection>

      {/* Alert Dialog */}
      <ComponentSection 
        title="Alert Dialog"
        description="A dialog for critical decisions and confirmations."
      >
        <LiveExample>
          <Button variant="contained" color="error" onClick={() => setAlertOpen(true)}>
            Delete Item
          </Button>
          <Dialog open={alertOpen} onClose={() => setAlertOpen(false)}>
            <DialogTitle>Delete Item?</DialogTitle>
            <DialogContent>
              <DialogContentText>
                This action cannot be undone. Are you sure you want to delete this item?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setAlertOpen(false)}>Cancel</Button>
              <Button 
                onClick={() => setAlertOpen(false)} 
                color="error" 
                variant="contained"
              >
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </LiveExample>
        <CodeBlock code={alertDialogCode} title="AlertDialog.tsx" />
      </ComponentSection>

      {/* Usage Guidelines */}
      <ComponentSection 
        title="Usage Guidelines"
        description="Best practices for using dialogs effectively."
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'success.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'success.dark', mb: 1, fontWeight: 600 }}>
              ✅ Do's
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Use dialogs for critical actions that need confirmation</li>
              <li>Keep dialog content concise and focused</li>
              <li>Provide clear action buttons (primary and secondary)</li>
              <li>Include a way to close the dialog (X button or escape key)</li>
            </Typography>
          </Box>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'error.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'error.dark', mb: 1, fontWeight: 600 }}>
              ❌ Don'ts
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Don't use dialogs for non-critical information</li>
              <li>Avoid opening dialogs automatically on page load</li>
              <li>Don't make dialogs too large or complex</li>
              <li>Avoid stacking multiple dialogs on top of each other</li>
            </Typography>
          </Box>
        </Box>
      </ComponentSection>
    </ShowcaseLayout>
  );
}