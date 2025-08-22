"use client";

import React, { useState } from "react";
import { 
  TextField, 
  Box, 
  Typography,
  InputAdornment,
  IconButton
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import SearchIcon from "@mui/icons-material/Search";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import ShowcaseLayout from "@/components/ComponentShowcase/ShowcaseLayout";
import LiveExample from "@/components/ComponentShowcase/LiveExample";
import CodeBlock from "@/components/ComponentShowcase/CodeBlock";
import ComponentSection from "@/components/ComponentShowcase/ComponentSection";

export default function TextFieldsShowcase() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const basicTextFieldCode = `<TextField 
  label="Standard" 
  variant="standard" 
/>
<TextField 
  label="Filled" 
  variant="filled" 
/>
<TextField 
  label="Outlined" 
  variant="outlined" 
/>`;

  const textFieldStatesCode = `<TextField 
  label="Normal" 
  variant="outlined" 
/>
<TextField 
  label="Disabled" 
  variant="outlined" 
  disabled 
/>
<TextField 
  label="Error" 
  variant="outlined" 
  error 
  helperText="This field has an error"
/>
<TextField 
  label="Required" 
  variant="outlined" 
  required 
/>`;

  const textFieldTypesCode = `<TextField 
  label="Email" 
  type="email" 
  variant="outlined" 
/>
<TextField 
  label="Password" 
  type="password" 
  variant="outlined" 
/>
<TextField 
  label="Number" 
  type="number" 
  variant="outlined" 
/>
<TextField 
  label="Date" 
  type="date" 
  variant="outlined" 
  InputLabelProps={{ shrink: true }}
/>`;

  const textFieldSizesCode = `<TextField 
  label="Small" 
  variant="outlined" 
  size="small" 
/>
<TextField 
  label="Medium" 
  variant="outlined" 
  size="medium" 
/>`;

  const textFieldWithIconsCode = `<TextField
  label="Username"
  variant="outlined"
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <AccountCircleIcon />
      </InputAdornment>
    ),
  }}
/>

<TextField
  label="Search"
  variant="outlined"
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <SearchIcon />
      </InputAdornment>
    ),
  }}
/>`;

  const passwordFieldCode = `const [showPassword, setShowPassword] = useState(false);

<TextField
  label="Password"
  type={showPassword ? 'text' : 'password'}
  variant="outlined"
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
      </InputAdornment>
    ),
  }}
/>`;

  const multilineTextFieldCode = `<TextField
  label="Multiline"
  multiline
  rows={4}
  variant="outlined"
  placeholder="Enter your message here..."
/>`;

  const fullWidthTextFieldCode = `<TextField
  label="Full Width"
  variant="outlined"
  fullWidth
  helperText="This field takes the full width of its container"
/>`;

  return (
    <ShowcaseLayout
      title="Text Fields"
      description="Text fields allow users to enter and edit text. They are a fundamental input component for forms and data entry."
    >
      {/* Basic Text Fields */}
      <ComponentSection 
        title="Text Field Variants"
        description="Text fields come in three variants: standard, filled, and outlined."
      >
        <LiveExample>
          <TextField 
            label="Standard" 
            variant="standard" 
          />
          <TextField 
            label="Filled" 
            variant="filled" 
          />
          <TextField 
            label="Outlined" 
            variant="outlined" 
          />
        </LiveExample>
        <CodeBlock code={basicTextFieldCode} title="TextFieldVariants.tsx" />
      </ComponentSection>

      {/* Text Field States */}
      <ComponentSection 
        title="Text Field States"
        description="Text fields support various states including normal, disabled, error, and required."
      >
        <LiveExample>
          <TextField 
            label="Normal" 
            variant="outlined" 
          />
          <TextField 
            label="Disabled" 
            variant="outlined" 
            disabled 
          />
          <TextField 
            label="Error" 
            variant="outlined" 
            error 
            helperText="This field has an error"
          />
          <TextField 
            label="Required" 
            variant="outlined" 
            required 
          />
        </LiveExample>
        <CodeBlock code={textFieldStatesCode} title="TextFieldStates.tsx" />
      </ComponentSection>

      {/* Text Field Sizes */}
      <ComponentSection 
        title="Text Field Sizes"
        description="Control the size of text fields using the size prop."
      >
        <LiveExample>
          <TextField 
            label="Small" 
            variant="outlined" 
            size="small" 
          />
          <TextField 
            label="Medium" 
            variant="outlined" 
            size="medium" 
          />
        </LiveExample>
        <CodeBlock code={textFieldSizesCode} title="TextFieldSizes.tsx" />
      </ComponentSection>

      {/* Text Field Types */}
      <ComponentSection 
        title="Input Types"
        description="Text fields support various input types for different data formats."
      >
        <LiveExample>
          <TextField 
            label="Email" 
            type="email" 
            variant="outlined" 
          />
          <TextField 
            label="Password" 
            type="password" 
            variant="outlined" 
          />
          <TextField 
            label="Number" 
            type="number" 
            variant="outlined" 
          />
          <TextField 
            label="Date" 
            type="date" 
            variant="outlined" 
            InputLabelProps={{ shrink: true }}
          />
        </LiveExample>
        <CodeBlock code={textFieldTypesCode} title="TextFieldTypes.tsx" />
      </ComponentSection>

      {/* Text Fields with Icons */}
      <ComponentSection 
        title="Text Fields with Icons"
        description="Enhance text fields with icons in start or end positions."
      >
        <LiveExample>
          <TextField
            label="Username"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Email"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Search"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </LiveExample>
        <CodeBlock code={textFieldWithIconsCode} title="TextFieldWithIcons.tsx" />
      </ComponentSection>

      {/* Password Field */}
      <ComponentSection 
        title="Password Field with Toggle"
        description="Create password fields with show/hide functionality."
      >
        <LiveExample>
          <TextField
            label="Password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </LiveExample>
        <CodeBlock code={passwordFieldCode} title="PasswordField.tsx" />
      </ComponentSection>

      {/* Multiline Text Field */}
      <ComponentSection 
        title="Multiline Text Field"
        description="Use multiline text fields for longer text input like comments or descriptions."
      >
        <LiveExample>
          <TextField
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            placeholder="Enter your message here..."
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          />
        </LiveExample>
        <CodeBlock code={multilineTextFieldCode} title="MultilineTextField.tsx" />
      </ComponentSection>

      {/* Full Width Text Field */}
      <ComponentSection 
        title="Full Width Text Field"
        description="Make text fields span the full width of their container."
      >
        <LiveExample fullWidth>
          <TextField
            label="Full Width"
            variant="outlined"
            fullWidth
            helperText="This field takes the full width of its container"
          />
        </LiveExample>
        <CodeBlock code={fullWidthTextFieldCode} title="FullWidthTextField.tsx" />
      </ComponentSection>

      {/* Form Example */}
      <ComponentSection 
        title="Form Example"
        description="A practical example of text fields in a form layout."
      >
        <Box sx={{ maxWidth: 400 }}>
          <LiveExample fullWidth>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Email Address"
                type="email"
                variant="outlined"
                fullWidth
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Phone Number"
                type="tel"
                variant="outlined"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </LiveExample>
        </Box>
      </ComponentSection>

      {/* Usage Guidelines */}
      <ComponentSection 
        title="Usage Guidelines"
        description="Best practices for using text fields effectively."
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'success.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'success.dark', mb: 1, fontWeight: 600 }}>
              ✅ Do's
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Use clear and descriptive labels</li>
              <li>Provide helpful placeholder text when appropriate</li>
              <li>Include validation and error messages</li>
              <li>Use appropriate input types for different data</li>
              <li>Consider using icons to enhance usability</li>
            </Typography>
          </Box>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'error.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'error.dark', mb: 1, fontWeight: 600 }}>
              ❌ Don'ts
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Don't use vague or unclear labels</li>
              <li>Avoid making too many fields required</li>
              <li>Don't use placeholder text as the only label</li>
              <li>Avoid inconsistent field sizing in forms</li>
              <li>Don't forget to handle loading and error states</li>
            </Typography>
          </Box>
        </Box>
      </ComponentSection>
    </ShowcaseLayout>
  );
}