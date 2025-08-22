"use client";

import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import ShowcaseLayout from "@/components/ComponentShowcase/ShowcaseLayout";
import LiveExample from "@/components/ComponentShowcase/LiveExample";
import CodeBlock from "@/components/ComponentShowcase/CodeBlock";
import ComponentSection from "@/components/ComponentShowcase/ComponentSection";
import PropsTable from "@/components/ComponentShowcase/PropsTable";

export default function TypographyShowcase() {
  const headingsCode = `<Typography variant="h1" gutterBottom>h1. Heading</Typography>
<Typography variant="h2" gutterBottom>h2. Heading</Typography>
<Typography variant="h3" gutterBottom>h3. Heading</Typography>
<Typography variant="h4" gutterBottom>h4. Heading</Typography>
<Typography variant="h5" gutterBottom>h5. Heading</Typography>
<Typography variant="h6" gutterBottom>h6. Heading</Typography>`;

  const bodyTextCode = `<Typography variant="body1" gutterBottom>
  body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</Typography>
<Typography variant="body2" gutterBottom>
  body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</Typography>`;

  const displayTextCode = `<Typography variant="subtitle1" gutterBottom>
  subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</Typography>
<Typography variant="subtitle2" gutterBottom>
  subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</Typography>
<Typography variant="button" display="block" gutterBottom>
  button text
</Typography>
<Typography variant="caption" display="block" gutterBottom>
  caption text
</Typography>
<Typography variant="overline" display="block" gutterBottom>
  overline text
</Typography>`;

  const alignmentCode = `<Typography align="left">Left aligned text</Typography>
<Typography align="center">Center aligned text</Typography>
<Typography align="right">Right aligned text</Typography>
<Typography align="justify">Justified text lorem ipsum dolor sit amet...</Typography>`;

  const colorCode = `<Typography color="primary">Primary color</Typography>
<Typography color="secondary">Secondary color</Typography>
<Typography color="text.secondary">Text secondary color</Typography>
<Typography color="error">Error color</Typography>
<Typography sx={{ color: '#9c27b0' }}>Custom color</Typography>`;

  const typographyProps = [
    {
      name: "variant",
      type: "string",
      default: "'body1'",
      description: "Applies the theme typography styles."
    },
    {
      name: "align",
      type: "'inherit' | 'left' | 'center' | 'right' | 'justify'",
      default: "'inherit'",
      description: "Set the text-align on the component."
    },
    {
      name: "color",
      type: "string",
      default: "'initial'",
      description: "The color of the component."
    },
    {
      name: "component",
      type: "elementType",
      description: "The component used for the root node."
    },
    {
      name: "gutterBottom",
      type: "boolean",
      default: "false",
      description: "If true, the text will have a bottom margin."
    },
    {
      name: "noWrap",
      type: "boolean",
      default: "false",
      description: "If true, the text will not wrap, but instead will truncate with an ellipsis."
    },
    {
      name: "paragraph",
      type: "boolean",
      default: "false",
      description: "If true, the element will be a paragraph element."
    },
    {
      name: "sx",
      type: "object",
      description: "The system prop that allows defining system overrides."
    }
  ];

  return (
    <ShowcaseLayout
      title="Typography"
      description="Use typography to present content clearly and efficiently. Typography helps establish hierarchy and communicate important information."
    >
      {/* Headings */}
      <ComponentSection 
        title="Headings"
        description="Six levels of heading variants from h1 to h6."
      >
        <LiveExample>
          <Typography variant="h1" gutterBottom>h1. Heading</Typography>
          <Typography variant="h2" gutterBottom>h2. Heading</Typography>
          <Typography variant="h3" gutterBottom>h3. Heading</Typography>
          <Typography variant="h4" gutterBottom>h4. Heading</Typography>
          <Typography variant="h5" gutterBottom>h5. Heading</Typography>
          <Typography variant="h6" gutterBottom>h6. Heading</Typography>
        </LiveExample>
        <CodeBlock code={headingsCode} title="Headings.tsx" />
      </ComponentSection>

      {/* Body Text */}
      <ComponentSection 
        title="Body Text"
        description="Body text variants for regular content."
      >
        <LiveExample>
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="body2" gutterBottom>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </LiveExample>
        <CodeBlock code={bodyTextCode} title="BodyText.tsx" />
      </ComponentSection>

      {/* Display Text */}
      <ComponentSection 
        title="Display Variants"
        description="Additional typography variants for specific use cases."
      >
        <LiveExample>
          <Typography variant="subtitle1" gutterBottom>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          </Typography>
          <Typography variant="button" display="block" gutterBottom>
            button text
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            caption text
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            overline text
          </Typography>
        </LiveExample>
        <CodeBlock code={displayTextCode} title="DisplayText.tsx" />
      </ComponentSection>

      {/* Alignment */}
      <ComponentSection 
        title="Text Alignment"
        description="Control text alignment with the align prop."
      >
        <LiveExample>
          <Typography align="left" sx={{ mb: 1 }}>Left aligned text</Typography>
          <Typography align="center" sx={{ mb: 1 }}>Center aligned text</Typography>
          <Typography align="right" sx={{ mb: 1 }}>Right aligned text</Typography>
          <Typography align="justify">
            Justified text lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur.
          </Typography>
        </LiveExample>
        <CodeBlock code={alignmentCode} title="TextAlignment.tsx" />
      </ComponentSection>

      {/* Colors */}
      <ComponentSection 
        title="Text Colors"
        description="Apply theme colors to typography."
      >
        <LiveExample>
          <Typography color="primary" gutterBottom>Primary color</Typography>
          <Typography color="secondary" gutterBottom>Secondary color</Typography>
          <Typography color="text.secondary" gutterBottom>Text secondary color</Typography>
          <Typography color="error" gutterBottom>Error color</Typography>
          <Typography sx={{ color: '#9c27b0' }} gutterBottom>Custom color</Typography>
        </LiveExample>
        <CodeBlock code={colorCode} title="TextColors.tsx" />
      </ComponentSection>

      {/* Truncation */}
      <ComponentSection 
        title="Text Truncation"
        description="Truncate long text with ellipsis using the noWrap prop."
      >
        <LiveExample>
          <Box sx={{ width: 300 }}>
            <Typography noWrap>
              This is a very long text that will be truncated with an ellipsis when it exceeds the container width.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Typography>
          </Box>
        </LiveExample>
        <CodeBlock 
          code={`<Box sx={{ width: 300 }}>
  <Typography noWrap>
    This is a very long text that will be truncated with an ellipsis...
  </Typography>
</Box>`} 
          title="TextTruncation.tsx" 
        />
      </ComponentSection>

      {/* Font Weight */}
      <ComponentSection 
        title="Font Weight"
        description="Control font weight using the fontWeight property."
      >
        <LiveExample>
          <Typography sx={{ fontWeight: 'light' }}>Light weight text</Typography>
          <Typography sx={{ fontWeight: 'regular' }}>Regular weight text</Typography>
          <Typography sx={{ fontWeight: 'medium' }}>Medium weight text</Typography>
          <Typography sx={{ fontWeight: 'bold' }}>Bold weight text</Typography>
          <Typography sx={{ fontWeight: 900 }}>900 weight text</Typography>
        </LiveExample>
        <CodeBlock 
          code={`<Typography sx={{ fontWeight: 'light' }}>Light weight text</Typography>
<Typography sx={{ fontWeight: 'regular' }}>Regular weight text</Typography>
<Typography sx={{ fontWeight: 'medium' }}>Medium weight text</Typography>
<Typography sx={{ fontWeight: 'bold' }}>Bold weight text</Typography>
<Typography sx={{ fontWeight: 900 }}>900 weight text</Typography>`} 
          title="FontWeight.tsx" 
        />
      </ComponentSection>

      {/* Props Table */}
      <PropsTable props={typographyProps} />

      {/* Usage Guidelines */}
      <ComponentSection 
        title="Usage Guidelines"
        description="Best practices for using typography in your application."
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'success.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'success.dark', mb: 1, fontWeight: 600 }}>
              ✅ Do's
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Use proper heading hierarchy (h1 → h2 → h3)</li>
              <li>Maintain consistent font sizes across similar content</li>
              <li>Use semantic variants (body1 for paragraphs, caption for small text)</li>
              <li>Ensure sufficient color contrast for readability</li>
            </Typography>
          </Box>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'error.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'error.dark', mb: 1, fontWeight: 600 }}>
              ❌ Don'ts
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Don't skip heading levels (h1 → h3)</li>
              <li>Avoid using too many font sizes on one page</li>
              <li>Don't use color alone to convey important information</li>
              <li>Avoid very long lines of text (use max-width)</li>
            </Typography>
          </Box>
        </Box>
      </ComponentSection>
    </ShowcaseLayout>
  );
}