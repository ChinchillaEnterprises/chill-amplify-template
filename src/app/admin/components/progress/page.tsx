"use client";

import React, { useState, useEffect } from "react";
import { 
  CircularProgress, 
  LinearProgress,
  Box, 
  Typography,
  Button
} from "@mui/material";
import ShowcaseLayout from "@/components/ComponentShowcase/ShowcaseLayout";
import LiveExample from "@/components/ComponentShowcase/LiveExample";
import CodeBlock from "@/components/ComponentShowcase/CodeBlock";
import ComponentSection from "@/components/ComponentShowcase/ComponentSection";

export default function ProgressShowcase() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const circularProgressCode = `<CircularProgress />
<CircularProgress color="secondary" />
<CircularProgress variant="determinate" value={75} />`;

  const linearProgressCode = `<LinearProgress />
<LinearProgress color="secondary" />
<LinearProgress variant="determinate" value={progress} />`;

  const progressWithLabelCode = `<Box sx={{ position: 'relative', display: 'inline-flex' }}>
  <CircularProgress variant="determinate" value={progress} />
  <Box
    sx={{
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Typography variant="caption" component="div" color="text.secondary">
      {\`\${Math.round(progress)}%\`}
    </Typography>
  </Box>
</Box>`;

  return (
    <ShowcaseLayout
      title="Progress"
      description="Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates."
    >
      {/* Circular Progress */}
      <ComponentSection 
        title="Circular Progress"
        description="Circular progress indicators for loading states."
      >
        <LiveExample>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <CircularProgress />
            <CircularProgress color="secondary" />
            <CircularProgress variant="determinate" value={75} />
          </Box>
        </LiveExample>
        <CodeBlock code={circularProgressCode} title="CircularProgress.tsx" />
      </ComponentSection>

      {/* Linear Progress */}
      <ComponentSection 
        title="Linear Progress"
        description="Linear progress bars for horizontal progress indication."
      >
        <LiveExample>
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Indeterminate
            </Typography>
            <LinearProgress sx={{ mb: 2 }} />
            
            <Typography variant="body2" sx={{ mb: 1 }}>
              Determinate
            </Typography>
            <LinearProgress variant="determinate" value={progress} sx={{ mb: 2 }} />
            
            <Typography variant="body2" sx={{ mb: 1 }}>
              Buffer
            </Typography>
            <LinearProgress variant="buffer" value={progress} valueBuffer={progress + 10} />
          </Box>
        </LiveExample>
        <CodeBlock code={linearProgressCode} title="LinearProgress.tsx" />
      </ComponentSection>

      {/* Progress with Label */}
      <ComponentSection 
        title="Progress with Label"
        description="Show progress percentage with labels."
      >
        <LiveExample>
          <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress variant="determinate" value={progress} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="caption" component="div" color="text.secondary">
                  {`${Math.round(progress)}%`}
                </Typography>
              </Box>
            </Box>
            
            <Box sx={{ width: '100%', maxWidth: 200 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                  <LinearProgress variant="determinate" value={progress} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography variant="body2" color="text.secondary">
                    {`${Math.round(progress)}%`}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </LiveExample>
        <CodeBlock code={progressWithLabelCode} title="ProgressWithLabel.tsx" />
      </ComponentSection>

      {/* Progress Colors */}
      <ComponentSection 
        title="Progress Colors"
        description="Different colors for various progress states."
      >
        <LiveExample>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <CircularProgress color="primary" />
            <CircularProgress color="secondary" />
            <CircularProgress color="success" />
            <CircularProgress color="error" />
            <CircularProgress color="warning" />
            <CircularProgress color="info" />
          </Box>
        </LiveExample>
      </ComponentSection>

      {/* Progress Sizes */}
      <ComponentSection 
        title="Progress Sizes"
        description="Different sizes for circular progress indicators."
      >
        <LiveExample>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <CircularProgress size={20} />
            <CircularProgress size={30} />
            <CircularProgress size={40} />
            <CircularProgress size={50} />
            <CircularProgress size={60} />
          </Box>
        </LiveExample>
      </ComponentSection>

      {/* Custom Progress */}
      <ComponentSection 
        title="Custom Styled Progress"
        description="Progress indicators with custom styling."
      >
        <LiveExample>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 300 }}>
            <Box>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Upload Progress
              </Typography>
              <LinearProgress 
                variant="determinate" 
                value={progress} 
                sx={{
                  height: 10,
                  borderRadius: 5,
                  '& .MuiLinearProgress-bar': {
                    borderRadius: 5,
                  }
                }}
              />
            </Box>
            
            <Box sx={{ textAlign: 'center' }}>
              <CircularProgress
                variant="determinate"
                value={progress}
                size={80}
                thickness={4}
                sx={{
                  color: 'success.main',
                }}
              />
              <Typography variant="h6" sx={{ mt: 1 }}>
                Loading...
              </Typography>
            </Box>
          </Box>
        </LiveExample>
      </ComponentSection>

      {/* Usage Guidelines */}
      <ComponentSection 
        title="Usage Guidelines"
        description="Best practices for using progress indicators."
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'success.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'success.dark', mb: 1, fontWeight: 600 }}>
              ✅ Do's
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Use determinate progress when duration is known</li>
              <li>Provide context about what is loading</li>
              <li>Use appropriate colors for different states</li>
              <li>Show progress percentage when helpful</li>
              <li>Consider skeleton screens for content loading</li>
            </Typography>
          </Box>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'error.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'error.dark', mb: 1, fontWeight: 600 }}>
              ❌ Don'ts
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Don't use progress for very quick operations</li>
              <li>Avoid blocking the entire interface unnecessarily</li>
              <li>Don't use without providing context</li>
              <li>Avoid fake progress that doesn't reflect reality</li>
              <li>Don't forget to handle error states</li>
            </Typography>
          </Box>
        </Box>
      </ComponentSection>
    </ShowcaseLayout>
  );
}