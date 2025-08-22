"use client";

import React from "react";
import { 
  IconButton, 
  Box, 
  Typography, 
  Icon,
  SvgIcon
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import DownloadIcon from "@mui/icons-material/Download";
import UploadIcon from "@mui/icons-material/Upload";
import ShowcaseLayout from "@/components/ComponentShowcase/ShowcaseLayout";
import LiveExample from "@/components/ComponentShowcase/LiveExample";
import CodeBlock from "@/components/ComponentShowcase/CodeBlock";
import ComponentSection from "@/components/ComponentShowcase/ComponentSection";

export default function IconsShowcase() {
  const basicIconsCode = `import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";

<HomeIcon />
<FavoriteIcon />
<DeleteIcon />`;

  const iconButtonsCode = `import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

<IconButton color="primary">
  <FavoriteIcon />
</IconButton>
<IconButton color="secondary">
  <DeleteIcon />
</IconButton>
<IconButton color="error">
  <CloseIcon />
</IconButton>`;

  const iconSizesCode = `<HomeIcon fontSize="small" />
<HomeIcon fontSize="medium" />
<HomeIcon fontSize="large" />`;

  const iconColorsCode = `<FavoriteIcon color="primary" />
<FavoriteIcon color="secondary" />
<FavoriteIcon color="success" />
<FavoriteIcon color="error" />
<FavoriteIcon color="warning" />
<FavoriteIcon color="info" />`;

  const customIconCode = `function CustomIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

<CustomIcon />
<CustomIcon color="primary" />
<CustomIcon color="secondary" />`;

  function CustomIcon(props: any) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

  return (
    <ShowcaseLayout
      title="Icons"
      description="Material UI provides access to over 2,000+ Material Design icons. Icons convey meaning and enhance the user interface."
    >
      {/* Basic Icons */}
      <ComponentSection 
        title="Basic Icons"
        description="Import and use Material Design icons directly from @mui/icons-material."
      >
        <LiveExample>
          <HomeIcon />
          <FavoriteIcon />
          <DeleteIcon />
          <SearchIcon />
          <SettingsIcon />
          <PersonIcon />
        </LiveExample>
        <CodeBlock code={basicIconsCode} title="BasicIcons.tsx" />
      </ComponentSection>

      {/* Icon Buttons */}
      <ComponentSection 
        title="Icon Buttons"
        description="Icons are often used within IconButton components for interactive elements."
      >
        <LiveExample>
          <IconButton color="primary">
            <FavoriteIcon />
          </IconButton>
          <IconButton color="secondary">
            <DeleteIcon />
          </IconButton>
          <IconButton color="error">
            <CloseIcon />
          </IconButton>
          <IconButton color="success">
            <CheckIcon />
          </IconButton>
        </LiveExample>
        <CodeBlock code={iconButtonsCode} title="IconButtons.tsx" />
      </ComponentSection>

      {/* Icon Sizes */}
      <ComponentSection 
        title="Icon Sizes"
        description="Control the size of icons using the fontSize prop."
      >
        <LiveExample>
          <HomeIcon fontSize="small" />
          <HomeIcon fontSize="medium" />
          <HomeIcon fontSize="large" />
        </LiveExample>
        <CodeBlock code={iconSizesCode} title="IconSizes.tsx" />
      </ComponentSection>

      {/* Icon Colors */}
      <ComponentSection 
        title="Icon Colors"
        description="Apply theme colors to icons using the color prop."
      >
        <LiveExample>
          <FavoriteIcon color="primary" />
          <FavoriteIcon color="secondary" />
          <FavoriteIcon color="success" />
          <FavoriteIcon color="error" />
          <FavoriteIcon color="warning" />
          <FavoriteIcon color="info" />
        </LiveExample>
        <CodeBlock code={iconColorsCode} title="IconColors.tsx" />
      </ComponentSection>

      {/* Common Icon Categories */}
      <ComponentSection 
        title="Common Icon Categories"
        description="Examples of commonly used icon categories for different UI purposes."
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
              Navigation & Actions
            </Typography>
            <LiveExample>
              <ArrowBackIcon />
              <ArrowForwardIcon />
              <ExpandMoreIcon />
              <ExpandLessIcon />
              <AddIcon />
              <RemoveIcon />
            </LiveExample>
          </Box>
          
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
              Communication
            </Typography>
            <LiveExample>
              <EmailIcon />
              <PhoneIcon />
              <NotificationsIcon />
              <StarIcon />
              <ThumbUpIcon />
              <VisibilityIcon />
            </LiveExample>
          </Box>
          
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
              File Operations
            </Typography>
            <LiveExample>
              <DownloadIcon />
              <UploadIcon />
              <EditIcon />
              <DeleteIcon />
              <SearchIcon />
              <SettingsIcon />
            </LiveExample>
          </Box>
        </Box>
      </ComponentSection>

      {/* Custom Icons */}
      <ComponentSection 
        title="Custom Icons"
        description="Create custom icons using the SvgIcon component."
      >
        <LiveExample>
          <CustomIcon />
          <CustomIcon color="primary" />
          <CustomIcon color="secondary" />
        </LiveExample>
        <CodeBlock code={customIconCode} title="CustomIcons.tsx" />
      </ComponentSection>

      {/* Usage Guidelines */}
      <ComponentSection 
        title="Usage Guidelines"
        description="Best practices for using icons in your application."
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'success.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'success.dark', mb: 1, fontWeight: 600 }}>
              ✅ Do's
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Use familiar icons that users recognize</li>
              <li>Maintain consistent icon sizes throughout your app</li>
              <li>Provide proper accessibility labels</li>
              <li>Use icons to enhance, not replace, text labels</li>
              <li>Choose icons that match your brand style</li>
            </Typography>
          </Box>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'error.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'error.dark', mb: 1, fontWeight: 600 }}>
              ❌ Don'ts
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Don't use icons without proper context or labels</li>
              <li>Avoid mixing different icon styles in one interface</li>
              <li>Don't make icons too small for touch targets</li>
              <li>Avoid using unfamiliar or abstract icons</li>
              <li>Don't rely solely on color to convey meaning</li>
            </Typography>
          </Box>
        </Box>
      </ComponentSection>
    </ShowcaseLayout>
  );
}