"use client";

import React, { useState } from "react";
import { 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Box, 
  Typography,
  Chip,
  OutlinedInput,
  ListItemText,
  Checkbox,
  FormHelperText
} from "@mui/material";
import ShowcaseLayout from "@/components/ComponentShowcase/ShowcaseLayout";
import LiveExample from "@/components/ComponentShowcase/LiveExample";
import CodeBlock from "@/components/ComponentShowcase/CodeBlock";
import ComponentSection from "@/components/ComponentShowcase/ComponentSection";

export default function SelectShowcase() {
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [frameworks, setFrameworks] = useState<string[]>([]);

  const basicSelectCode = `const [age, setAge] = useState('');

<FormControl fullWidth>
  <InputLabel>Age</InputLabel>
  <Select
    value={age}
    label="Age"
    onChange={(e) => setAge(e.target.value)}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>`;

  const selectVariantsCode = `<FormControl variant="standard">
  <InputLabel>Age</InputLabel>
  <Select value={age} onChange={handleChange}>
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
  </Select>
</FormControl>

<FormControl variant="filled">
  <InputLabel>Age</InputLabel>
  <Select value={age} onChange={handleChange}>
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
  </Select>
</FormControl>

<FormControl variant="outlined">
  <InputLabel>Age</InputLabel>
  <Select value={age} onChange={handleChange}>
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
  </Select>
</FormControl>`;

  const selectSizesCode = `<FormControl size="small">
  <InputLabel>Size Small</InputLabel>
  <Select value={value} onChange={handleChange}>
    <MenuItem value="option1">Option 1</MenuItem>
    <MenuItem value="option2">Option 2</MenuItem>
  </Select>
</FormControl>

<FormControl size="medium">
  <InputLabel>Size Medium</InputLabel>
  <Select value={value} onChange={handleChange}>
    <MenuItem value="option1">Option 1</MenuItem>
    <MenuItem value="option2">Option 2</MenuItem>
  </Select>
</FormControl>`;

  const multipleSelectCode = `const [skills, setSkills] = useState([]);

<FormControl fullWidth>
  <InputLabel>Skills</InputLabel>
  <Select
    multiple
    value={skills}
    onChange={(e) => setSkills(e.target.value)}
    input={<OutlinedInput label="Skills" />}
  >
    <MenuItem value="javascript">JavaScript</MenuItem>
    <MenuItem value="typescript">TypeScript</MenuItem>
    <MenuItem value="react">React</MenuItem>
    <MenuItem value="vue">Vue</MenuItem>
  </Select>
</FormControl>`;

  const multipleSelectChipsCode = `const [frameworks, setFrameworks] = useState([]);

<FormControl fullWidth>
  <InputLabel>Frameworks</InputLabel>
  <Select
    multiple
    value={frameworks}
    onChange={(e) => setFrameworks(e.target.value)}
    input={<OutlinedInput label="Frameworks" />}
    renderValue={(selected) => (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
        {selected.map((value) => (
          <Chip key={value} label={value} size="small" />
        ))}
      </Box>
    )}
  >
    <MenuItem value="React">React</MenuItem>
    <MenuItem value="Vue">Vue</MenuItem>
    <MenuItem value="Angular">Angular</MenuItem>
    <MenuItem value="Svelte">Svelte</MenuItem>
  </Select>
</FormControl>`;

  const selectWithCheckboxCode = `<FormControl fullWidth>
  <InputLabel>Technologies</InputLabel>
  <Select
    multiple
    value={skills}
    onChange={(e) => setSkills(e.target.value)}
    input={<OutlinedInput label="Technologies" />}
    renderValue={(selected) => selected.join(', ')}
  >
    {['JavaScript', 'TypeScript', 'React', 'Vue', 'Angular'].map((name) => (
      <MenuItem key={name} value={name}>
        <Checkbox checked={skills.indexOf(name) > -1} />
        <ListItemText primary={name} />
      </MenuItem>
    ))}
  </Select>
</FormControl>`;

  const selectStatesCode = `<FormControl fullWidth>
  <InputLabel>Normal</InputLabel>
  <Select value="" onChange={() => {}}>
    <MenuItem value="option1">Option 1</MenuItem>
  </Select>
</FormControl>

<FormControl fullWidth disabled>
  <InputLabel>Disabled</InputLabel>
  <Select value="" onChange={() => {}}>
    <MenuItem value="option1">Option 1</MenuItem>
  </Select>
</FormControl>

<FormControl fullWidth error>
  <InputLabel>Error</InputLabel>
  <Select value="" onChange={() => {}}>
    <MenuItem value="option1">Option 1</MenuItem>
  </Select>
  <FormHelperText>This field has an error</FormHelperText>
</FormControl>`;

  const skillsList = ['JavaScript', 'TypeScript', 'React', 'Vue', 'Angular', 'Node.js', 'Python', 'Go'];
  const frameworksList = ['React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Nuxt.js', 'SvelteKit'];

  return (
    <ShowcaseLayout
      title="Select"
      description="Select components allow users to choose from a list of options. They are ideal when you have limited space and multiple options to choose from."
    >
      {/* Basic Select */}
      <ComponentSection 
        title="Basic Select"
        description="A simple select component with a label and options."
      >
        <LiveExample>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Age</InputLabel>
            <Select
              value={age}
              label="Age"
              onChange={(e) => setAge(e.target.value as string)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </LiveExample>
        <CodeBlock code={basicSelectCode} title="BasicSelect.tsx" />
      </ComponentSection>

      {/* Select Variants */}
      <ComponentSection 
        title="Select Variants"
        description="Select components come in three variants: standard, filled, and outlined."
      >
        <LiveExample>
          <FormControl variant="standard" sx={{ minWidth: 120 }}>
            <InputLabel>Standard</InputLabel>
            <Select
              value={country}
              onChange={(e) => setCountry(e.target.value as string)}
            >
              <MenuItem value="us">United States</MenuItem>
              <MenuItem value="ca">Canada</MenuItem>
              <MenuItem value="uk">United Kingdom</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="filled" sx={{ minWidth: 120 }}>
            <InputLabel>Filled</InputLabel>
            <Select
              value={country}
              onChange={(e) => setCountry(e.target.value as string)}
            >
              <MenuItem value="us">United States</MenuItem>
              <MenuItem value="ca">Canada</MenuItem>
              <MenuItem value="uk">United Kingdom</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="outlined" sx={{ minWidth: 120 }}>
            <InputLabel>Outlined</InputLabel>
            <Select
              value={country}
              onChange={(e) => setCountry(e.target.value as string)}
            >
              <MenuItem value="us">United States</MenuItem>
              <MenuItem value="ca">Canada</MenuItem>
              <MenuItem value="uk">United Kingdom</MenuItem>
            </Select>
          </FormControl>
        </LiveExample>
        <CodeBlock code={selectVariantsCode} title="SelectVariants.tsx" />
      </ComponentSection>

      {/* Select Sizes */}
      <ComponentSection 
        title="Select Sizes"
        description="Control the size of select components using the size prop."
      >
        <LiveExample>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Small</InputLabel>
            <Select
              value=""
              onChange={() => {}}
            >
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="medium" sx={{ minWidth: 120 }}>
            <InputLabel>Medium</InputLabel>
            <Select
              value=""
              onChange={() => {}}
            >
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
            </Select>
          </FormControl>
        </LiveExample>
        <CodeBlock code={selectSizesCode} title="SelectSizes.tsx" />
      </ComponentSection>

      {/* Multiple Select */}
      <ComponentSection 
        title="Multiple Select"
        description="Allow users to select multiple options from the list."
      >
        <LiveExample>
          <FormControl sx={{ minWidth: 300 }}>
            <InputLabel>Skills</InputLabel>
            <Select
              multiple
              value={skills}
              onChange={(e) => setSkills(typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value)}
              input={<OutlinedInput label="Skills" />}
            >
              {skillsList.map((skill) => (
                <MenuItem key={skill} value={skill}>
                  {skill}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </LiveExample>
        <CodeBlock code={multipleSelectCode} title="MultipleSelect.tsx" />
      </ComponentSection>

      {/* Multiple Select with Chips */}
      <ComponentSection 
        title="Multiple Select with Chips"
        description="Display selected options as chips for better visual representation."
      >
        <LiveExample>
          <FormControl sx={{ minWidth: 300 }}>
            <InputLabel>Frameworks</InputLabel>
            <Select
              multiple
              value={frameworks}
              onChange={(e) => setFrameworks(typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value)}
              input={<OutlinedInput label="Frameworks" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} size="small" />
                  ))}
                </Box>
              )}
            >
              {frameworksList.map((framework) => (
                <MenuItem key={framework} value={framework}>
                  {framework}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </LiveExample>
        <CodeBlock code={multipleSelectChipsCode} title="MultipleSelectChips.tsx" />
      </ComponentSection>

      {/* Select with Checkboxes */}
      <ComponentSection 
        title="Select with Checkboxes"
        description="Include checkboxes in the dropdown for clearer multiple selection."
      >
        <LiveExample>
          <FormControl sx={{ minWidth: 300 }}>
            <InputLabel>Technologies</InputLabel>
            <Select
              multiple
              value={skills}
              onChange={(e) => setSkills(typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value)}
              input={<OutlinedInput label="Technologies" />}
              renderValue={(selected) => selected.join(', ')}
            >
              {skillsList.slice(0, 5).map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={skills.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </LiveExample>
        <CodeBlock code={selectWithCheckboxCode} title="SelectWithCheckbox.tsx" />
      </ComponentSection>

      {/* Select States */}
      <ComponentSection 
        title="Select States"
        description="Different states of select components including normal, disabled, and error states."
      >
        <LiveExample>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel>Normal</InputLabel>
            <Select value="" onChange={() => {}}>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 120 }} disabled>
            <InputLabel>Disabled</InputLabel>
            <Select value="" onChange={() => {}}>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 120 }} error>
            <InputLabel>Error</InputLabel>
            <Select value="" onChange={() => {}}>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
            </Select>
            <FormHelperText>This field has an error</FormHelperText>
          </FormControl>
        </LiveExample>
        <CodeBlock code={selectStatesCode} title="SelectStates.tsx" />
      </ComponentSection>

      {/* Native Select */}
      <ComponentSection 
        title="Native Select"
        description="Use native HTML select for simpler styling and better performance on mobile."
      >
        <LiveExample>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel>Native Select</InputLabel>
            <Select
              native
              value=""
              onChange={() => {}}
              input={<OutlinedInput label="Native Select" />}
            >
              <option aria-label="None" value="" />
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>
        </LiveExample>
      </ComponentSection>

      {/* Usage Guidelines */}
      <ComponentSection 
        title="Usage Guidelines"
        description="Best practices for using select components effectively."
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'success.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'success.dark', mb: 1, fontWeight: 600 }}>
              ✅ Do's
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Use clear and descriptive option labels</li>
              <li>Order options logically (alphabetical, by popularity, etc.)</li>
              <li>Provide a default or placeholder option when appropriate</li>
              <li>Use multiple select for non-exclusive choices</li>
              <li>Consider search functionality for long lists</li>
            </Typography>
          </Box>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'error.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'error.dark', mb: 1, fontWeight: 600 }}>
              ❌ Don'ts
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Don't use select for less than 4 options (use radio buttons)</li>
              <li>Avoid very long lists without search or grouping</li>
              <li>Don't use unclear or ambiguous option labels</li>
              <li>Avoid auto-selecting options without user consent</li>
              <li>Don't mix single and multiple selection patterns</li>
            </Typography>
          </Box>
        </Box>
      </ComponentSection>
    </ShowcaseLayout>
  );
}