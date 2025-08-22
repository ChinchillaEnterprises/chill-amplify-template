"use client";

import React, { useState } from "react";
import { 
  Slider, 
  Box, 
  Typography,
  Input
} from "@mui/material";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import ShowcaseLayout from "@/components/ComponentShowcase/ShowcaseLayout";
import LiveExample from "@/components/ComponentShowcase/LiveExample";
import CodeBlock from "@/components/ComponentShowcase/CodeBlock";
import ComponentSection from "@/components/ComponentShowcase/ComponentSection";

export default function SliderShowcase() {
  const [value, setValue] = useState(30);
  const [volume, setVolume] = useState(30);
  const [rangeValue, setRangeValue] = useState([20, 80]);
  const [inputValue, setInputValue] = useState(50);
  const [temperature, setTemperature] = useState(20);

  const basicSliderCode = `const [value, setValue] = useState(30);

<Slider
  value={value}
  onChange={(e, newValue) => setValue(newValue)}
  valueLabelDisplay="auto"
  step={10}
  marks
  min={0}
  max={100}
/>`;

  const sliderColorsCode = `<Slider defaultValue={30} color="primary" />
<Slider defaultValue={30} color="secondary" />
<Slider defaultValue={30} color="success" />
<Slider defaultValue={30} color="error" />
<Slider defaultValue={30} color="warning" />
<Slider defaultValue={30} color="info" />`;

  const sliderSizesCode = `<Slider size="small" defaultValue={30} />
<Slider size="medium" defaultValue={30} />`;

  const rangeSliderCode = `const [rangeValue, setRangeValue] = useState([20, 80]);

<Slider
  value={rangeValue}
  onChange={(e, newValue) => setRangeValue(newValue)}
  valueLabelDisplay="auto"
  min={0}
  max={100}
/>`;

  const sliderWithInputCode = `const [inputValue, setInputValue] = useState(50);

<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
  <Slider
    value={inputValue}
    onChange={(e, newValue) => setInputValue(newValue)}
    min={0}
    max={100}
    sx={{ flexGrow: 1 }}
  />
  <Input
    value={inputValue}
    size="small"
    onChange={(e) => setInputValue(Number(e.target.value))}
    inputProps={{
      step: 1,
      min: 0,
      max: 100,
      type: 'number',
    }}
    sx={{ width: 60 }}
  />
</Box>`;

  const volumeSliderCode = `const [volume, setVolume] = useState(30);

<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
  <VolumeDownIcon />
  <Slider
    value={volume}
    onChange={(e, newValue) => setVolume(newValue)}
    sx={{ flexGrow: 1 }}
  />
  <VolumeUpIcon />
</Box>`;

  const customMarksCode = `const marks = [
  { value: 0, label: '0°C' },
  { value: 20, label: '20°C' },
  { value: 37, label: '37°C' },
  { value: 100, label: '100°C' },
];

<Slider
  value={temperature}
  onChange={(e, newValue) => setTemperature(newValue)}
  step={null}
  marks={marks}
  min={0}
  max={100}
  valueLabelDisplay="auto"
/>`;

  const marks = [
    { value: 0, label: '0°C' },
    { value: 20, label: '20°C' },
    { value: 37, label: '37°C' },
    { value: 100, label: '100°C' },
  ];

  const restrictedMarks = [
    { value: 0, label: '0°C' },
    { value: 25, label: '25°C' },
    { value: 50, label: '50°C' },
    { value: 75, label: '75°C' },
    { value: 100, label: '100°C' },
  ];

  return (
    <ShowcaseLayout
      title="Slider"
      description="Sliders allow users to make selections from a range of values by moving a handle along a track. They're ideal for adjusting settings like volume, brightness, or price ranges."
    >
      {/* Basic Slider */}
      <ComponentSection 
        title="Basic Slider"
        description="A simple slider with default styling and automatic value labels."
      >
        <LiveExample>
          <Box sx={{ width: 300 }}>
            <Typography gutterBottom>Basic Slider</Typography>
            <Slider
              value={value}
              onChange={(e, newValue) => setValue(newValue as number)}
              valueLabelDisplay="auto"
              step={10}
              marks
              min={0}
              max={100}
            />
          </Box>
        </LiveExample>
        <CodeBlock code={basicSliderCode} title="BasicSlider.tsx" />
      </ComponentSection>

      {/* Slider Colors */}
      <ComponentSection 
        title="Slider Colors"
        description="Use different colors to match your design system or indicate different types of values."
      >
        <LiveExample>
          <Box sx={{ width: 300, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Slider defaultValue={30} color="primary" />
            <Slider defaultValue={30} color="secondary" />
            <Slider defaultValue={30} color="success" />
            <Slider defaultValue={30} color="error" />
            <Slider defaultValue={30} color="warning" />
            <Slider defaultValue={30} color="info" />
          </Box>
        </LiveExample>
        <CodeBlock code={sliderColorsCode} title="SliderColors.tsx" />
      </ComponentSection>

      {/* Slider Sizes */}
      <ComponentSection 
        title="Slider Sizes"
        description="Control the size of sliders using the size prop."
      >
        <LiveExample>
          <Box sx={{ width: 300, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box>
              <Typography variant="body2">Small</Typography>
              <Slider size="small" defaultValue={30} />
            </Box>
            <Box>
              <Typography variant="body2">Medium</Typography>
              <Slider size="medium" defaultValue={30} />
            </Box>
          </Box>
        </LiveExample>
        <CodeBlock code={sliderSizesCode} title="SliderSizes.tsx" />
      </ComponentSection>

      {/* Range Slider */}
      <ComponentSection 
        title="Range Slider"
        description="Allow users to select a range of values with two handles."
      >
        <LiveExample>
          <Box sx={{ width: 300 }}>
            <Typography gutterBottom>Price Range</Typography>
            <Slider
              value={rangeValue}
              onChange={(e, newValue) => setRangeValue(newValue as number[])}
              valueLabelDisplay="auto"
              min={0}
              max={100}
              valueLabelFormat={(value) => `$${value}`}
            />
            <Typography variant="body2" color="text.secondary">
              ${rangeValue[0]} - ${rangeValue[1]}
            </Typography>
          </Box>
        </LiveExample>
        <CodeBlock code={rangeSliderCode} title="RangeSlider.tsx" />
      </ComponentSection>

      {/* Slider with Input */}
      <ComponentSection 
        title="Slider with Input"
        description="Combine a slider with an input field for precise value entry."
      >
        <LiveExample>
          <Box sx={{ width: 300 }}>
            <Typography gutterBottom>Volume Level</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Slider
                value={inputValue}
                onChange={(e, newValue) => setInputValue(newValue as number)}
                min={0}
                max={100}
                sx={{ flexGrow: 1 }}
              />
              <Input
                value={inputValue}
                size="small"
                onChange={(e) => setInputValue(Number(e.target.value) || 0)}
                onBlur={() => {
                  if (inputValue < 0) setInputValue(0);
                  if (inputValue > 100) setInputValue(100);
                }}
                inputProps={{
                  step: 1,
                  min: 0,
                  max: 100,
                  type: 'number',
                }}
                sx={{ width: 60 }}
              />
            </Box>
          </Box>
        </LiveExample>
        <CodeBlock code={sliderWithInputCode} title="SliderWithInput.tsx" />
      </ComponentSection>

      {/* Volume Slider */}
      <ComponentSection 
        title="Volume Slider"
        description="A practical example with icons showing volume control."
      >
        <LiveExample>
          <Box sx={{ width: 300 }}>
            <Typography gutterBottom>Volume</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <VolumeDownIcon />
              <Slider
                value={volume}
                onChange={(e, newValue) => setVolume(newValue as number)}
                sx={{ flexGrow: 1 }}
              />
              <VolumeUpIcon />
            </Box>
          </Box>
        </LiveExample>
        <CodeBlock code={volumeSliderCode} title="VolumeSlider.tsx" />
      </ComponentSection>

      {/* Slider with Custom Marks */}
      <ComponentSection 
        title="Slider with Custom Marks"
        description="Add custom marks and labels to provide context for specific values."
      >
        <LiveExample>
          <Box sx={{ width: 300 }}>
            <Typography gutterBottom>Temperature</Typography>
            <Slider
              value={temperature}
              onChange={(e, newValue) => setTemperature(newValue as number)}
              step={null}
              marks={marks}
              min={0}
              max={100}
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => `${value}°C`}
            />
          </Box>
        </LiveExample>
        <CodeBlock code={customMarksCode} title="CustomMarks.tsx" />
      </ComponentSection>

      {/* Disabled Slider */}
      <ComponentSection 
        title="Disabled Slider"
        description="Sliders can be disabled to prevent user interaction."
      >
        <LiveExample>
          <Box sx={{ width: 300, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box>
              <Typography variant="body2">Disabled</Typography>
              <Slider defaultValue={30} disabled />
            </Box>
            <Box>
              <Typography variant="body2">Disabled Range</Typography>
              <Slider defaultValue={[20, 50]} disabled />
            </Box>
          </Box>
        </LiveExample>
      </ComponentSection>

      {/* Vertical Slider */}
      <ComponentSection 
        title="Vertical Slider"
        description="Sliders can be oriented vertically for specific use cases."
      >
        <LiveExample>
          <Box sx={{ height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2" sx={{ mb: 1 }}>Volume</Typography>
              <Slider
                orientation="vertical"
                defaultValue={30}
                valueLabelDisplay="auto"
                sx={{ height: 150 }}
              />
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2" sx={{ mb: 1 }}>Range</Typography>
              <Slider
                orientation="vertical"
                defaultValue={[20, 60]}
                valueLabelDisplay="auto"
                sx={{ height: 150 }}
              />
            </Box>
          </Box>
        </LiveExample>
      </ComponentSection>

      {/* Usage Guidelines */}
      <ComponentSection 
        title="Usage Guidelines"
        description="Best practices for using sliders effectively."
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'success.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'success.dark', mb: 1, fontWeight: 600 }}>
              ✅ Do's
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Use for continuous values or ranges</li>
              <li>Provide clear labels and value indicators</li>
              <li>Set appropriate min/max values and steps</li>
              <li>Consider providing an input field for precise values</li>
              <li>Use marks for important reference points</li>
            </Typography>
          </Box>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'error.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'error.dark', mb: 1, fontWeight: 600 }}>
              ❌ Don'ts
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Don't use for discrete choices (use radio buttons)</li>
              <li>Avoid sliders for values with many precision requirements</li>
              <li>Don't forget to provide feedback for the current value</li>
              <li>Avoid using sliders for binary choices</li>
              <li>Don't make the slider track too small on mobile</li>
            </Typography>
          </Box>
        </Box>
      </ComponentSection>
    </ShowcaseLayout>
  );
}