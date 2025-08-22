"use client";

import React, { useState } from "react";
import { 
  Radio, 
  RadioGroup, 
  FormControlLabel, 
  FormControl, 
  FormLabel, 
  Box, 
  Typography,
  FormHelperText
} from "@mui/material";
import ShowcaseLayout from "@/components/ComponentShowcase/ShowcaseLayout";
import LiveExample from "@/components/ComponentShowcase/LiveExample";
import CodeBlock from "@/components/ComponentShowcase/CodeBlock";
import ComponentSection from "@/components/ComponentShowcase/ComponentSection";

export default function RadioShowcase() {
  const [value, setValue] = useState('option1');
  const [gender, setGender] = useState('female');
  const [plan, setPlan] = useState('basic');
  const [theme, setTheme] = useState('light');

  const basicRadioCode = `const [value, setValue] = useState('option1');

<FormControl>
  <FormLabel>Basic Radio Group</FormLabel>
  <RadioGroup
    value={value}
    onChange={(e) => setValue(e.target.value)}
  >
    <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
    <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
    <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
  </RadioGroup>
</FormControl>`;

  const radioColorsCode = `<FormControlLabel 
  value="primary" 
  control={<Radio color="primary" />} 
  label="Primary" 
/>
<FormControlLabel 
  value="secondary" 
  control={<Radio color="secondary" />} 
  label="Secondary" 
/>
<FormControlLabel 
  value="success" 
  control={<Radio color="success" />} 
  label="Success" 
/>
<FormControlLabel 
  value="error" 
  control={<Radio color="error" />} 
  label="Error" 
/>`;

  const radioSizesCode = `<FormControlLabel 
  value="small" 
  control={<Radio size="small" />} 
  label="Small" 
/>
<FormControlLabel 
  value="medium" 
  control={<Radio size="medium" />} 
  label="Medium" 
/>`;

  const horizontalRadioCode = `<FormControl>
  <FormLabel>Gender</FormLabel>
  <RadioGroup
    row
    value={gender}
    onChange={(e) => setGender(e.target.value)}
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
</FormControl>`;

  const radioStatesCode = `<FormControlLabel 
  value="normal" 
  control={<Radio />} 
  label="Normal" 
/>
<FormControlLabel 
  value="disabled" 
  control={<Radio />} 
  label="Disabled" 
  disabled
/>
<FormControlLabel 
  value="checked-disabled" 
  control={<Radio checked />} 
  label="Checked Disabled" 
  disabled
/>`;

  const customRadioCode = `<RadioGroup value={theme} onChange={(e) => setTheme(e.target.value)}>
  <FormControlLabel 
    value="light" 
    control={
      <Radio 
        sx={{
          color: 'warning.main',
          '&.Mui-checked': {
            color: 'warning.main',
          },
        }}
      />
    } 
    label="Light Theme" 
  />
  <FormControlLabel 
    value="dark" 
    control={
      <Radio 
        sx={{
          color: 'grey.800',
          '&.Mui-checked': {
            color: 'grey.800',
          },
        }}
      />
    } 
    label="Dark Theme" 
  />
</RadioGroup>`;

  return (
    <ShowcaseLayout
      title="Radio Buttons"
      description="Radio buttons allow users to select one option from a set of mutually exclusive options. Use radio buttons when users need to see all available options."
    >
      {/* Basic Radio */}
      <ComponentSection 
        title="Basic Radio Group"
        description="A simple radio group with vertical layout and basic styling."
      >
        <LiveExample>
          <FormControl>
            <FormLabel>Basic Radio Group</FormLabel>
            <RadioGroup
              value={value}
              onChange={(e) => setValue(e.target.value)}
            >
              <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
              <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
              <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
            </RadioGroup>
          </FormControl>
        </LiveExample>
        <CodeBlock code={basicRadioCode} title="BasicRadio.tsx" />
      </ComponentSection>

      {/* Radio Colors */}
      <ComponentSection 
        title="Radio Colors"
        description="Use different colors to match your design system or indicate different types of options."
      >
        <LiveExample>
          <RadioGroup value="primary" onChange={() => {}}>
            <FormControlLabel 
              value="primary" 
              control={<Radio color="primary" />} 
              label="Primary" 
            />
            <FormControlLabel 
              value="secondary" 
              control={<Radio color="secondary" />} 
              label="Secondary" 
            />
            <FormControlLabel 
              value="success" 
              control={<Radio color="success" />} 
              label="Success" 
            />
            <FormControlLabel 
              value="error" 
              control={<Radio color="error" />} 
              label="Error" 
            />
            <FormControlLabel 
              value="warning" 
              control={<Radio color="warning" />} 
              label="Warning" 
            />
            <FormControlLabel 
              value="info" 
              control={<Radio color="info" />} 
              label="Info" 
            />
          </RadioGroup>
        </LiveExample>
        <CodeBlock code={radioColorsCode} title="RadioColors.tsx" />
      </ComponentSection>

      {/* Radio Sizes */}
      <ComponentSection 
        title="Radio Sizes"
        description="Control the size of radio buttons using the size prop."
      >
        <LiveExample>
          <RadioGroup value="medium" onChange={() => {}}>
            <FormControlLabel 
              value="small" 
              control={<Radio size="small" />} 
              label="Small" 
            />
            <FormControlLabel 
              value="medium" 
              control={<Radio size="medium" />} 
              label="Medium (Default)" 
            />
          </RadioGroup>
        </LiveExample>
        <CodeBlock code={radioSizesCode} title="RadioSizes.tsx" />
      </ComponentSection>

      {/* Horizontal Radio Group */}
      <ComponentSection 
        title="Horizontal Radio Group"
        description="Display radio buttons in a horizontal layout using the row prop."
      >
        <LiveExample>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              row
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        </LiveExample>
        <CodeBlock code={horizontalRadioCode} title="HorizontalRadio.tsx" />
      </ComponentSection>

      {/* Radio States */}
      <ComponentSection 
        title="Radio States"
        description="Different states of radio buttons including normal, disabled, and checked disabled."
      >
        <LiveExample>
          <RadioGroup value="normal" onChange={() => {}}>
            <FormControlLabel 
              value="normal" 
              control={<Radio />} 
              label="Normal" 
            />
            <FormControlLabel 
              value="disabled" 
              control={<Radio />} 
              label="Disabled" 
              disabled
            />
            <FormControlLabel 
              value="checked-disabled" 
              control={<Radio checked />} 
              label="Checked Disabled" 
              disabled
            />
          </RadioGroup>
        </LiveExample>
        <CodeBlock code={radioStatesCode} title="RadioStates.tsx" />
      </ComponentSection>

      {/* Radio with Error */}
      <ComponentSection 
        title="Radio with Error State"
        description="Display validation errors with radio groups."
      >
        <LiveExample>
          <FormControl error>
            <FormLabel>Subscription Plan</FormLabel>
            <RadioGroup
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
            >
              <FormControlLabel value="basic" control={<Radio />} label="Basic - $9/month" />
              <FormControlLabel value="pro" control={<Radio />} label="Pro - $19/month" />
              <FormControlLabel value="enterprise" control={<Radio />} label="Enterprise - $49/month" />
            </RadioGroup>
            <FormHelperText>Please select a subscription plan</FormHelperText>
          </FormControl>
        </LiveExample>
      </ComponentSection>

      {/* Custom Styled Radio */}
      <ComponentSection 
        title="Custom Styled Radio"
        description="Customize radio button appearance with custom colors and styling."
      >
        <LiveExample>
          <FormControl>
            <FormLabel>Theme Preference</FormLabel>
            <RadioGroup value={theme} onChange={(e) => setTheme(e.target.value)}>
              <FormControlLabel 
                value="light" 
                control={
                  <Radio 
                    sx={{
                      color: 'warning.main',
                      '&.Mui-checked': {
                        color: 'warning.main',
                      },
                    }}
                  />
                } 
                label="Light Theme" 
              />
              <FormControlLabel 
                value="dark" 
                control={
                  <Radio 
                    sx={{
                      color: 'grey.800',
                      '&.Mui-checked': {
                        color: 'grey.800',
                      },
                    }}
                  />
                } 
                label="Dark Theme" 
              />
            </RadioGroup>
          </FormControl>
        </LiveExample>
        <CodeBlock code={customRadioCode} title="CustomRadio.tsx" />
      </ComponentSection>

      {/* Standalone Radio */}
      <ComponentSection 
        title="Standalone Radio Buttons"
        description="Individual radio buttons can be used outside of a RadioGroup for specific use cases."
      >
        <LiveExample>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Radio checked />
            <Typography>Checked</Typography>
            <Radio />
            <Typography>Unchecked</Typography>
            <Radio disabled />
            <Typography>Disabled</Typography>
            <Radio checked disabled />
            <Typography>Checked Disabled</Typography>
          </Box>
        </LiveExample>
      </ComponentSection>

      {/* Usage Guidelines */}
      <ComponentSection 
        title="Usage Guidelines"
        description="Best practices for using radio buttons effectively."
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'success.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'success.dark', mb: 1, fontWeight: 600 }}>
              ✅ Do's
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Use for mutually exclusive options (2-7 choices)</li>
              <li>Always provide clear, descriptive labels</li>
              <li>Pre-select the most common or safe option</li>
              <li>List options in logical order (alphabetical, by frequency, etc.)</li>
              <li>Use vertical layout for better readability</li>
            </Typography>
          </Box>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'error.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'error.dark', mb: 1, fontWeight: 600 }}>
              ❌ Don'ts
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Don't use for non-exclusive choices (use checkboxes)</li>
              <li>Avoid using for more than 7 options (use select instead)</li>
              <li>Don't use for binary choices (use switch or checkbox)</li>
              <li>Avoid unclear or ambiguous option labels</li>
              <li>Don't forget to provide a default selection</li>
            </Typography>
          </Box>
        </Box>
      </ComponentSection>
    </ShowcaseLayout>
  );
}