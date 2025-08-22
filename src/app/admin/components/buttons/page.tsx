"use client";

import React from "react";
import { Button, IconButton, Box, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShowcaseLayout from "@/components/ComponentShowcase/ShowcaseLayout";
import LiveExample from "@/components/ComponentShowcase/LiveExample";
import CodeBlock from "@/components/ComponentShowcase/CodeBlock";
import ComponentSection from "@/components/ComponentShowcase/ComponentSection";
import PropsTable from "@/components/ComponentShowcase/PropsTable";

export default function ButtonsShowcase() {
  const basicButtonCode = `<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="text">Text</Button>`;

  const buttonSizesCode = `<Button variant="contained" size="small">Small</Button>
<Button variant="contained" size="medium">Medium</Button>
<Button variant="contained" size="large">Large</Button>`;

  const buttonColorsCode = `<Button variant="contained">Primary</Button>
<Button variant="contained" color="secondary">Secondary</Button>
<Button variant="contained" color="success">Success</Button>
<Button variant="contained" color="error">Error</Button>
<Button variant="contained" color="warning">Warning</Button>
<Button variant="contained" color="info">Info</Button>`;

  const buttonWithIconsCode = `<Button variant="contained" startIcon={<DeleteIcon />}>
  Delete
</Button>
<Button variant="contained" endIcon={<SendIcon />}>
  Send
</Button>
<Button variant="outlined" startIcon={<CloudUploadIcon />}>
  Upload
</Button>`;

  const iconButtonCode = `<IconButton color="primary">
  <DeleteIcon />
</IconButton>
<IconButton color="secondary">
  <SendIcon />
</IconButton>
<IconButton color="error">
  <DeleteIcon />
</IconButton>`;

  const buttonProps = [
    {
      name: "variant",
      type: "'text' | 'outlined' | 'contained'",
      default: "'text'",
      description: "The variant to use."
    },
    {
      name: "color",
      type: "'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'",
      default: "'primary'",
      description: "The color of the button."
    },
    {
      name: "size",
      type: "'small' | 'medium' | 'large'",
      default: "'medium'",
      description: "The size of the button."
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "If true, the button will be disabled."
    },
    {
      name: "disableElevation",
      type: "boolean",
      default: "false",
      description: "If true, no elevation is used."
    },
    {
      name: "fullWidth",
      type: "boolean",
      default: "false",
      description: "If true, the button will take up the full width of its container."
    },
    {
      name: "startIcon",
      type: "ReactNode",
      description: "Element placed before the children."
    },
    {
      name: "endIcon",
      type: "ReactNode",
      description: "Element placed after the children."
    },
    {
      name: "onClick",
      type: "function",
      description: "Callback fired when the button is clicked."
    }
  ];

  return (
    <ShowcaseLayout
      title="Buttons"
      description="Buttons allow users to take actions and make choices with a single tap. They communicate actions that users can take."
    >
      {/* Basic Buttons */}
      <ComponentSection 
        title="Basic Buttons"
        description="The Button comes with three variants: text (default), contained, and outlined."
      >
        <LiveExample>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="text">Text</Button>
        </LiveExample>
        <CodeBlock code={basicButtonCode} title="BasicButtons.tsx" />
      </ComponentSection>

      {/* Button Sizes */}
      <ComponentSection 
        title="Button Sizes"
        description="For larger or smaller buttons, use the size prop."
      >
        <LiveExample>
          <Button variant="contained" size="small">Small</Button>
          <Button variant="contained" size="medium">Medium</Button>
          <Button variant="contained" size="large">Large</Button>
        </LiveExample>
        <CodeBlock code={buttonSizesCode} title="ButtonSizes.tsx" />
      </ComponentSection>

      {/* Button Colors */}
      <ComponentSection 
        title="Button Colors"
        description="Use the color prop to apply theme color palette to the component."
      >
        <LiveExample>
          <Button variant="contained">Primary</Button>
          <Button variant="contained" color="secondary">Secondary</Button>
          <Button variant="contained" color="success">Success</Button>
          <Button variant="contained" color="error">Error</Button>
          <Button variant="contained" color="warning">Warning</Button>
          <Button variant="contained" color="info">Info</Button>
        </LiveExample>
        <CodeBlock code={buttonColorsCode} title="ButtonColors.tsx" />
      </ComponentSection>

      {/* Buttons with Icons */}
      <ComponentSection 
        title="Buttons with Icons"
        description="Sometimes you might want to have icons for certain buttons to enhance the UX."
      >
        <LiveExample>
          <Button variant="contained" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
          <Button variant="outlined" startIcon={<CloudUploadIcon />}>
            Upload
          </Button>
        </LiveExample>
        <CodeBlock code={buttonWithIconsCode} title="ButtonsWithIcons.tsx" />
      </ComponentSection>

      {/* Icon Buttons */}
      <ComponentSection 
        title="Icon Buttons"
        description="Icon buttons are commonly found in app bars and toolbars."
      >
        <LiveExample>
          <IconButton color="primary">
            <DeleteIcon />
          </IconButton>
          <IconButton color="secondary">
            <SendIcon />
          </IconButton>
          <IconButton color="error">
            <DeleteIcon />
          </IconButton>
        </LiveExample>
        <CodeBlock code={iconButtonCode} title="IconButtons.tsx" />
      </ComponentSection>

      {/* Disabled Buttons */}
      <ComponentSection 
        title="Disabled State"
        description="All button variants support a disabled state."
      >
        <LiveExample>
          <Button variant="contained" disabled>Disabled</Button>
          <Button variant="outlined" disabled>Disabled</Button>
          <Button variant="text" disabled>Disabled</Button>
        </LiveExample>
        <CodeBlock 
          code={`<Button variant="contained" disabled>Disabled</Button>
<Button variant="outlined" disabled>Disabled</Button>
<Button variant="text" disabled>Disabled</Button>`} 
          title="DisabledButtons.tsx" 
        />
      </ComponentSection>

      {/* Full Width Button */}
      <ComponentSection 
        title="Full Width Button"
        description="Use the fullWidth prop to make the button fill its container."
      >
        <Box sx={{ width: '100%', maxWidth: 400 }}>
          <LiveExample fullWidth>
            <Button variant="contained" fullWidth>
              Full Width Button
            </Button>
          </LiveExample>
        </Box>
        <CodeBlock 
          code={`<Button variant="contained" fullWidth>
  Full Width Button
</Button>`} 
          title="FullWidthButton.tsx" 
        />
      </ComponentSection>

      {/* Props Table */}
      <PropsTable props={buttonProps} />

      {/* Usage Guidelines */}
      <ComponentSection 
        title="Usage Guidelines"
        description="Best practices for using buttons in your application."
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'success.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'success.dark', mb: 1, fontWeight: 600 }}>
              ✅ Do's
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Use contained buttons for primary actions</li>
              <li>Use outlined buttons for secondary actions</li>
              <li>Ensure sufficient color contrast for accessibility</li>
              <li>Keep button labels short and descriptive</li>
              <li>Use icons to enhance meaning when appropriate</li>
            </Typography>
          </Box>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'error.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'error.dark', mb: 1, fontWeight: 600 }}>
              ❌ Don'ts
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Don't use too many contained buttons on one screen</li>
              <li>Avoid using buttons for navigation (use links instead)</li>
              <li>Don't make buttons too small to tap on mobile</li>
              <li>Avoid unclear or generic labels like "Click Here"</li>
              <li>Don't rely only on color to convey meaning</li>
            </Typography>
          </Box>
        </Box>
      </ComponentSection>
    </ShowcaseLayout>
  );
}