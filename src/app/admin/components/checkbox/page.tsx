"use client";

import React from "react";
import { Checkbox, FormControlLabel, FormGroup, Box } from "@mui/material";
import ShowcaseLayout from "@/components/ComponentShowcase/ShowcaseLayout";
import LiveExample from "@/components/ComponentShowcase/LiveExample";
import CodeBlock from "@/components/ComponentShowcase/CodeBlock";
import ComponentSection from "@/components/ComponentShowcase/ComponentSection";
import PropsTable from "@/components/ComponentShowcase/PropsTable";

export default function CheckboxShowcase() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const basicCheckboxCode = `<Checkbox defaultChecked />
<Checkbox />
<Checkbox disabled />
<Checkbox disabled checked />`;

  const labelCheckboxCode = `<FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
<FormControlLabel disabled control={<Checkbox />} label="Disabled" />`;

  const colorCheckboxCode = `<Checkbox defaultChecked />
<Checkbox defaultChecked color="secondary" />
<Checkbox defaultChecked color="success" />
<Checkbox defaultChecked color="default" />`;

  const controlledCode = `const [checked, setChecked] = React.useState(true);

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setChecked(event.target.checked);
};

<Checkbox
  checked={checked}
  onChange={handleChange}
  inputProps={{ 'aria-label': 'controlled' }}
/>`;

  const checkboxProps = [
    {
      name: "checked",
      type: "boolean",
      description: "If true, the component is checked."
    },
    {
      name: "color",
      type: "'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'default'",
      default: "'primary'",
      description: "The color of the component."
    },
    {
      name: "defaultChecked",
      type: "boolean",
      default: "false",
      description: "The default checked state. Use when the component is not controlled."
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "If true, the component is disabled."
    },
    {
      name: "indeterminate",
      type: "boolean",
      default: "false",
      description: "If true, the component appears indeterminate."
    },
    {
      name: "onChange",
      type: "function",
      description: "Callback fired when the state is changed."
    },
    {
      name: "required",
      type: "boolean",
      default: "false",
      description: "If true, the input element is required."
    },
    {
      name: "size",
      type: "'small' | 'medium' | 'large'",
      default: "'medium'",
      description: "The size of the component."
    },
    {
      name: "value",
      type: "any",
      description: "The value of the component."
    }
  ];

  return (
    <ShowcaseLayout
      title="Checkbox"
      description="Checkboxes allow users to select one or more items from a set. They can also be used to turn an option on or off."
    >
      {/* Basic Checkboxes */}
      <ComponentSection 
        title="Basic Checkboxes"
        description="Basic checkbox states including checked, unchecked, and disabled."
      >
        <LiveExample>
          <Checkbox defaultChecked />
          <Checkbox />
          <Checkbox disabled />
          <Checkbox disabled checked />
        </LiveExample>
        <CodeBlock code={basicCheckboxCode} title="BasicCheckbox.tsx" />
      </ComponentSection>

      {/* Checkbox with Label */}
      <ComponentSection 
        title="Checkbox with Label"
        description="Checkboxes can be displayed with a label using FormControlLabel."
      >
        <LiveExample>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
            <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
          </FormGroup>
        </LiveExample>
        <CodeBlock code={labelCheckboxCode} title="CheckboxWithLabel.tsx" />
      </ComponentSection>

      {/* Checkbox Colors */}
      <ComponentSection 
        title="Colors"
        description="Use the color prop to change the checkbox color."
      >
        <LiveExample>
          <Checkbox defaultChecked />
          <Checkbox defaultChecked color="secondary" />
          <Checkbox defaultChecked color="success" />
          <Checkbox defaultChecked color="default" />
        </LiveExample>
        <CodeBlock code={colorCheckboxCode} title="CheckboxColors.tsx" />
      </ComponentSection>

      {/* Controlled Checkbox */}
      <ComponentSection 
        title="Controlled Checkbox"
        description="You can control the checkbox with the checked and onChange props."
      >
        <LiveExample>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <Box sx={{ ml: 2 }}>
            State: {checked ? 'Checked' : 'Unchecked'}
          </Box>
        </LiveExample>
        <CodeBlock code={controlledCode} title="ControlledCheckbox.tsx" />
      </ComponentSection>

      {/* Size */}
      <ComponentSection 
        title="Size"
        description="Use the size prop to change the checkbox size."
      >
        <LiveExample>
          <Checkbox defaultChecked size="small" />
          <Checkbox defaultChecked />
          <Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
        </LiveExample>
        <CodeBlock 
          code={`<Checkbox defaultChecked size="small" />
<Checkbox defaultChecked />
<Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />`} 
          title="CheckboxSizes.tsx" 
        />
      </ComponentSection>

      {/* Indeterminate */}
      <ComponentSection 
        title="Indeterminate"
        description="A checkbox can be in an indeterminate state, neither checked nor unchecked."
      >
        <LiveExample>
          <Checkbox indeterminate />
          <Checkbox indeterminate disabled />
        </LiveExample>
        <CodeBlock 
          code={`<Checkbox indeterminate />
<Checkbox indeterminate disabled />`} 
          title="IndeterminateCheckbox.tsx" 
        />
      </ComponentSection>

      {/* Props Table */}
      <PropsTable props={checkboxProps} />
    </ShowcaseLayout>
  );
}