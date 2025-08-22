"use client";

import React, { useState } from "react";
import { 
  Chip, 
  Box, 
  Typography, 
  Avatar,
  Stack
} from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import ShowcaseLayout from "@/components/ComponentShowcase/ShowcaseLayout";
import LiveExample from "@/components/ComponentShowcase/LiveExample";
import CodeBlock from "@/components/ComponentShowcase/CodeBlock";
import ComponentSection from "@/components/ComponentShowcase/ComponentSection";

export default function ChipsShowcase() {
  const [selectedChips, setSelectedChips] = useState<string[]>(['react']);

  const handleChipClick = (chipId: string) => {
    setSelectedChips(prev => 
      prev.includes(chipId) 
        ? prev.filter(id => id !== chipId)
        : [...prev, chipId]
    );
  };

  const basicChipsCode = `<Chip label="Default" />
<Chip label="Primary" color="primary" />
<Chip label="Secondary" color="secondary" />`;

  const chipVariantsCode = `<Chip label="Filled" variant="filled" />
<Chip label="Outlined" variant="outlined" />`;

  const chipColorsCode = `<Chip label="Primary" color="primary" />
<Chip label="Secondary" color="secondary" />
<Chip label="Success" color="success" />
<Chip label="Error" color="error" />
<Chip label="Warning" color="warning" />
<Chip label="Info" color="info" />`;

  const deletableChipsCode = `<Chip 
  label="Deletable" 
  onDelete={() => console.log('Deleted')} 
/>
<Chip 
  label="Custom Delete" 
  onDelete={() => console.log('Deleted')} 
  deleteIcon={<DoneIcon />}
/>`;

  const chipWithAvatarCode = `<Chip 
  avatar={<Avatar>M</Avatar>} 
  label="Avatar" 
/>
<Chip 
  avatar={<Avatar alt="User" src="/user.jpg" />} 
  label="User" 
/>`;

  const chipWithIconCode = `<Chip 
  icon={<FaceIcon />} 
  label="Icon" 
/>
<Chip 
  icon={<DoneIcon />} 
  label="Success" 
  color="success"
/>`;

  const clickableChipsCode = `const [selected, setSelected] = useState(['react']);

const handleClick = (chipId) => {
  setSelected(prev => 
    prev.includes(chipId) 
      ? prev.filter(id => id !== chipId)
      : [...prev, chipId]
  );
};

<Chip 
  label="React" 
  clickable 
  color={selected.includes('react') ? 'primary' : 'default'}
  onClick={() => handleClick('react')}
/>`;

  const chipSizesCode = `<Chip label="Small" size="small" />
<Chip label="Medium" size="medium" />`;

  return (
    <ShowcaseLayout
      title="Chips"
      description="Chips are compact elements that represent an input, attribute, or action. They allow users to enter information, make selections, filter content, or trigger actions."
    >
      {/* Basic Chips */}
      <ComponentSection 
        title="Basic Chips"
        description="Simple chips with labels and different colors."
      >
        <LiveExample>
          <Chip label="Default" />
          <Chip label="Primary" color="primary" />
          <Chip label="Secondary" color="secondary" />
        </LiveExample>
        <CodeBlock code={basicChipsCode} title="BasicChips.tsx" />
      </ComponentSection>

      {/* Chip Variants */}
      <ComponentSection 
        title="Chip Variants"
        description="Chips come in filled and outlined variants."
      >
        <LiveExample>
          <Chip label="Filled" variant="filled" />
          <Chip label="Outlined" variant="outlined" />
          <Chip label="Filled Primary" variant="filled" color="primary" />
          <Chip label="Outlined Primary" variant="outlined" color="primary" />
        </LiveExample>
        <CodeBlock code={chipVariantsCode} title="ChipVariants.tsx" />
      </ComponentSection>

      {/* Chip Colors */}
      <ComponentSection 
        title="Chip Colors"
        description="Use different colors to categorize or emphasize chips."
      >
        <LiveExample>
          <Chip label="Primary" color="primary" />
          <Chip label="Secondary" color="secondary" />
          <Chip label="Success" color="success" />
          <Chip label="Error" color="error" />
          <Chip label="Warning" color="warning" />
          <Chip label="Info" color="info" />
        </LiveExample>
        <CodeBlock code={chipColorsCode} title="ChipColors.tsx" />
      </ComponentSection>

      {/* Chip Sizes */}
      <ComponentSection 
        title="Chip Sizes"
        description="Chips are available in small and medium sizes."
      >
        <LiveExample>
          <Chip label="Small" size="small" />
          <Chip label="Medium" size="medium" />
          <Chip label="Small Primary" size="small" color="primary" />
          <Chip label="Medium Primary" size="medium" color="primary" />
        </LiveExample>
        <CodeBlock code={chipSizesCode} title="ChipSizes.tsx" />
      </ComponentSection>

      {/* Deletable Chips */}
      <ComponentSection 
        title="Deletable Chips"
        description="Chips can be made deletable by providing an onDelete prop."
      >
        <LiveExample>
          <Chip 
            label="Deletable" 
            onDelete={() => console.log('Deleted')} 
          />
          <Chip 
            label="Custom Delete" 
            onDelete={() => console.log('Deleted')} 
            deleteIcon={<DoneIcon />}
            color="primary"
          />
          <Chip 
            label="Delete Error" 
            onDelete={() => console.log('Deleted')} 
            color="error"
          />
        </LiveExample>
        <CodeBlock code={deletableChipsCode} title="DeletableChips.tsx" />
      </ComponentSection>

      {/* Chips with Avatar */}
      <ComponentSection 
        title="Chips with Avatar"
        description="Chips can display avatars to represent users or entities."
      >
        <LiveExample>
          <Chip 
            avatar={<Avatar>M</Avatar>} 
            label="Avatar" 
          />
          <Chip 
            avatar={<Avatar sx={{ bgcolor: 'primary.main' }}>J</Avatar>} 
            label="John Doe" 
            color="primary"
          />
          <Chip 
            avatar={<Avatar sx={{ bgcolor: 'secondary.main' }}>S</Avatar>} 
            label="Sarah Smith" 
            color="secondary"
            onDelete={() => console.log('Deleted')}
          />
        </LiveExample>
        <CodeBlock code={chipWithAvatarCode} title="ChipWithAvatar.tsx" />
      </ComponentSection>

      {/* Chips with Icons */}
      <ComponentSection 
        title="Chips with Icons"
        description="Use icons to enhance the meaning or categorization of chips."
      >
        <LiveExample>
          <Chip 
            icon={<FaceIcon />} 
            label="Icon" 
          />
          <Chip 
            icon={<DoneIcon />} 
            label="Success" 
            color="success"
          />
          <Chip 
            icon={<DeleteIcon />} 
            label="Delete Action" 
            color="error"
            variant="outlined"
          />
        </LiveExample>
        <CodeBlock code={chipWithIconCode} title="ChipWithIcon.tsx" />
      </ComponentSection>

      {/* Clickable Chips */}
      <ComponentSection 
        title="Clickable Chips"
        description="Chips can be made clickable for filtering or selection purposes."
      >
        <LiveExample>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {['React', 'Vue', 'Angular', 'Svelte'].map((tech) => (
              <Chip 
                key={tech}
                label={tech} 
                clickable 
                color={selectedChips.includes(tech.toLowerCase()) ? 'primary' : 'default'}
                onClick={() => handleChipClick(tech.toLowerCase())}
              />
            ))}
          </Stack>
        </LiveExample>
        <CodeBlock code={clickableChipsCode} title="ClickableChips.tsx" />
      </ComponentSection>

      {/* Chip Arrays */}
      <ComponentSection 
        title="Chip Arrays"
        description="Example of using chips for tags, categories, or filters."
      >
        <LiveExample>
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Skills:
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              <Chip label="JavaScript" color="primary" size="small" />
              <Chip label="TypeScript" color="primary" size="small" />
              <Chip label="React" color="secondary" size="small" />
              <Chip label="Node.js" color="success" size="small" />
              <Chip label="GraphQL" color="info" size="small" />
            </Stack>
          </Box>
        </LiveExample>
      </ComponentSection>

      {/* Usage Guidelines */}
      <ComponentSection 
        title="Usage Guidelines"
        description="Best practices for using chips in your application."
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'success.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'success.dark', mb: 1, fontWeight: 600 }}>
              ✅ Do's
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Use chips for tags, filters, and attributes</li>
              <li>Keep chip labels short and descriptive</li>
              <li>Use consistent colors for similar categories</li>
              <li>Provide clear visual feedback for interactive chips</li>
              <li>Consider using deletable chips for user-generated content</li>
            </Typography>
          </Box>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'error.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'error.dark', mb: 1, fontWeight: 600 }}>
              ❌ Don'ts
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Don't use chips as primary navigation elements</li>
              <li>Avoid long text labels that don't fit well</li>
              <li>Don't overcrowd interfaces with too many chips</li>
              <li>Avoid using chips for critical actions</li>
              <li>Don't mix different chip styles inconsistently</li>
            </Typography>
          </Box>
        </Box>
      </ComponentSection>
    </ShowcaseLayout>
  );
}