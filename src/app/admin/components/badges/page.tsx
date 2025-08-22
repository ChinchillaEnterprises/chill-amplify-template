"use client";

import React from "react";
import { 
  Badge, 
  Box, 
  Typography, 
  IconButton,
  Avatar,
  Button
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import ShowcaseLayout from "@/components/ComponentShowcase/ShowcaseLayout";
import LiveExample from "@/components/ComponentShowcase/LiveExample";
import CodeBlock from "@/components/ComponentShowcase/CodeBlock";
import ComponentSection from "@/components/ComponentShowcase/ComponentSection";

export default function BadgesShowcase() {
  const basicBadgeCode = `import { Badge, IconButton } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

<Badge badgeContent={4} color="primary">
  <MailIcon />
</Badge>
<Badge badgeContent={10} color="secondary">
  <NotificationsIcon />
</Badge>`;

  const badgeColorsCode = `<Badge badgeContent={4} color="primary">
  <MailIcon />
</Badge>
<Badge badgeContent={4} color="secondary">
  <MailIcon />
</Badge>
<Badge badgeContent={4} color="error">
  <MailIcon />
</Badge>
<Badge badgeContent={4} color="warning">
  <MailIcon />
</Badge>
<Badge badgeContent={4} color="info">
  <MailIcon />
</Badge>
<Badge badgeContent={4} color="success">
  <MailIcon />
</Badge>`;

  const badgeVariantsCode = `<Badge badgeContent={4} variant="standard">
  <MailIcon />
</Badge>
<Badge badgeContent={4} variant="dot">
  <MailIcon />
</Badge>`;

  const badgeVisibilityCode = `<Badge badgeContent={0} showZero>
  <MailIcon />
</Badge>
<Badge badgeContent={100} max={99}>
  <MailIcon />
</Badge>
<Badge badgeContent={1000} max={999}>
  <MailIcon />
</Badge>`;

  const dotBadgeCode = `<Badge variant="dot" color="primary">
  <MailIcon />
</Badge>
<Badge variant="dot" color="secondary">
  <NotificationsIcon />
</Badge>
<Badge variant="dot" color="error">
  <ShoppingCartIcon />
</Badge>`;

  const customBadgeCode = `<Badge 
  badgeContent={4} 
  color="primary"
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}
>
  <MailIcon />
</Badge>

<Badge 
  badgeContent="NEW" 
  color="error"
  sx={{
    '& .MuiBadge-badge': {
      fontSize: '0.625rem',
      height: 16,
      minWidth: 16,
    },
  }}
>
  <Button variant="contained">
    Feature
  </Button>
</Badge>`;

  return (
    <ShowcaseLayout
      title="Badges"
      description="Badges are small components that typically appear near another component to provide additional information or indicate status."
    >
      {/* Basic Badges */}
      <ComponentSection 
        title="Basic Badges"
        description="Simple badges with numeric content to indicate counts or notifications."
      >
        <LiveExample>
          <Badge badgeContent={4} color="primary">
            <MailIcon />
          </Badge>
          <Badge badgeContent={10} color="secondary">
            <NotificationsIcon />
          </Badge>
          <Badge badgeContent={23} color="error">
            <ShoppingCartIcon />
          </Badge>
        </LiveExample>
        <CodeBlock code={basicBadgeCode} title="BasicBadges.tsx" />
      </ComponentSection>

      {/* Badge Colors */}
      <ComponentSection 
        title="Badge Colors"
        description="Use different colors to convey different types of information or urgency."
      >
        <LiveExample>
          <Badge badgeContent={4} color="primary">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="warning">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="info">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="success">
            <MailIcon />
          </Badge>
        </LiveExample>
        <CodeBlock code={badgeColorsCode} title="BadgeColors.tsx" />
      </ComponentSection>

      {/* Dot Badges */}
      <ComponentSection 
        title="Dot Badges"
        description="Dot badges are useful for indicating activity or status without showing specific numbers."
      >
        <LiveExample>
          <Badge variant="dot" color="primary">
            <MailIcon />
          </Badge>
          <Badge variant="dot" color="secondary">
            <NotificationsIcon />
          </Badge>
          <Badge variant="dot" color="error">
            <ShoppingCartIcon />
          </Badge>
          <Badge variant="dot" color="success">
            <PersonIcon />
          </Badge>
        </LiveExample>
        <CodeBlock code={dotBadgeCode} title="DotBadges.tsx" />
      </ComponentSection>

      {/* Badge Visibility */}
      <ComponentSection 
        title="Badge Visibility & Max Values"
        description="Control badge visibility and set maximum values for large numbers."
      >
        <LiveExample>
          <Badge badgeContent={0} showZero>
            <MailIcon />
          </Badge>
          <Badge badgeContent={100} max={99}>
            <MailIcon />
          </Badge>
          <Badge badgeContent={1000} max={999}>
            <MailIcon />
          </Badge>
        </LiveExample>
        <CodeBlock code={badgeVisibilityCode} title="BadgeVisibility.tsx" />
      </ComponentSection>

      {/* Badges with Different Elements */}
      <ComponentSection 
        title="Badges with Different Elements"
        description="Badges can be applied to various UI elements including avatars, buttons, and text."
      >
        <LiveExample>
          <Badge badgeContent={4} color="error">
            <Avatar sx={{ bgcolor: 'primary.main' }}>
              <PersonIcon />
            </Avatar>
          </Badge>
          <Badge badgeContent="NEW" color="secondary">
            <Button variant="contained">
              Feature
            </Button>
          </Badge>
          <Badge badgeContent={12} color="primary">
            <Typography variant="h6">
              Messages
            </Typography>
          </Badge>
        </LiveExample>
      </ComponentSection>

      {/* Custom Badge Positioning */}
      <ComponentSection 
        title="Custom Badge Positioning"
        description="Customize badge position and styling for specific use cases."
      >
        <LiveExample>
          <Badge 
            badgeContent={4} 
            color="primary"
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MailIcon />
          </Badge>
          <Badge 
            badgeContent={4} 
            color="secondary"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <MailIcon />
          </Badge>
          <Badge 
            badgeContent={4} 
            color="error"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
            <MailIcon />
          </Badge>
        </LiveExample>
        <CodeBlock code={customBadgeCode} title="CustomBadges.tsx" />
      </ComponentSection>

      {/* Usage Guidelines */}
      <ComponentSection 
        title="Usage Guidelines"
        description="Best practices for using badges effectively in your application."
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'success.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'success.dark', mb: 1, fontWeight: 600 }}>
              ✅ Do's
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Use badges for notifications and counters</li>
              <li>Keep badge content short and meaningful</li>
              <li>Use appropriate colors for different types of information</li>
              <li>Consider using dot badges for simple status indication</li>
              <li>Set reasonable max values for large numbers</li>
            </Typography>
          </Box>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'error.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'error.dark', mb: 1, fontWeight: 600 }}>
              ❌ Don'ts
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Don't use badges for decorative purposes only</li>
              <li>Avoid placing too many badges on one screen</li>
              <li>Don't use vague or unclear badge content</li>
              <li>Avoid badges that cover important UI elements</li>
              <li>Don't forget to provide accessibility context</li>
            </Typography>
          </Box>
        </Box>
      </ComponentSection>
    </ShowcaseLayout>
  );
}