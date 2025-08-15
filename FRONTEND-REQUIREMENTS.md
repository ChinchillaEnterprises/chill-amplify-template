# Frontend Requirements for Chill Amplify Template UI Library

## Overview

This document outlines the requirements for building a comprehensive UI component library for the Chill Amplify Template. The template is designed to help students and developers quickly bootstrap AWS Amplify Gen 2 applications with Next.js 14+ (App Router) and TypeScript.

The UI library should provide all necessary components for building modern web applications, with a special focus on authentication flows, dashboards, and common application patterns.

## Design Direction

The UI library should embody a **modern, clean, and sophisticated design language inspired by Apple's design philosophy**:

### Core Design Principles
- **Clarity**: Content is king. Remove unnecessary elements and let the content breathe.
- **Deference**: The UI should defer to content, not compete with it.
- **Depth**: Use subtle shadows, layers, and motion to create hierarchy.
- **Simplicity**: Every element should have a clear purpose.
- **Consistency**: Uniform spacing, typography, and interaction patterns.

### Visual Style Guidelines
- **Color Palette**: Start with a monochromatic base (blacks, whites, grays) with one or two accent colors for actions and highlights
- **Typography**: Clean, modern sans-serif fonts with clear hierarchy (consider Inter, SF Pro Display, or similar)
- **Spacing**: Generous whitespace, consistent padding/margins using an 8px grid system
- **Border Radius**: Subtle rounded corners (4-12px range, consistent across components)
- **Shadows**: Soft, subtle shadows for depth (avoid harsh drop shadows)
- **Animations**: Smooth, purposeful micro-interactions (ease-in-out, 200-300ms durations)
- **Icons**: Thin, elegant line icons with consistent stroke width
- **Surfaces**: Clean backgrounds with subtle gradients or noise textures for depth

### Interaction Patterns
- **Hover States**: Subtle color shifts or slight scale transformations
- **Active States**: Clear but not jarring feedback
- **Focus States**: Accessible focus rings that match the design aesthetic
- **Loading States**: Elegant skeleton screens and smooth transitions
- **Error States**: Clear but not alarming, with helpful guidance

### Responsive Behavior
- **Mobile First**: Design for mobile, enhance for desktop
- **Touch Targets**: Minimum 44x44px for mobile touch targets
- **Adaptive Layouts**: Components should gracefully adapt, not just shrink

## Project Context

### Technology Stack
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Authentication**: AWS Amplify Gen 2 with Cognito
- **Data**: AWS Amplify GraphQL API
- **Deployment**: AWS Amplify Hosting

### Target Audience
- Students learning full-stack development
- Developers prototyping applications quickly
- Teams building MVPs and production applications

## Component Library Structure

The component library should be organized in the following structure:

```
/components/
├── ui/                    # Core UI components
│   ├── primitives/       # Atomic components
│   ├── forms/           # Form-specific components
│   ├── feedback/        # User feedback components
│   ├── navigation/      # Navigation components
│   ├── layout/          # Layout components
│   └── data-display/    # Data presentation components
├── auth/                  # Authentication-specific components
├── dashboard/            # Dashboard-specific components
└── showcase/             # Component showcase/demo pages
```

## Core UI Components Required

### Primitives (`/components/ui/primitives/`)

1. **Button**
   - Variants: primary, secondary, danger, ghost, link
   - Sizes: sm, md, lg
   - States: default, hover, active, disabled, loading
   - Support for icons (left/right)
   - Full width option

2. **Input**
   - Types: text, email, password, number, tel, url, search
   - States: default, focused, disabled, error, success
   - With label and helper text
   - Optional icon support
   - Clear button option

3. **Textarea**
   - Auto-resize option
   - Character counter
   - States: default, focused, disabled, error

4. **Checkbox**
   - States: unchecked, checked, indeterminate, disabled
   - With label support
   - Error state

5. **Radio**
   - Radio group component
   - States: unchecked, checked, disabled
   - With label support

6. **Select/Dropdown**
   - Single and multi-select
   - Searchable option
   - Custom option rendering
   - States: default, open, disabled, error

7. **Switch/Toggle**
   - States: on, off, disabled
   - With label support
   - Size variants

8. **Badge**
   - Variants: default, success, warning, error, info
   - Sizes: sm, md
   - Removable option

9. **Avatar**
   - Image support with fallback
   - Initial letters fallback
   - Sizes: xs, sm, md, lg, xl
   - Status indicator option

10. **Icon**
    - Wrapper for icon library integration
    - Size variants
    - Color support

### Form Components (`/components/ui/forms/`)

1. **FormField**
   - Wrapper combining label, input/select/textarea, error message
   - Required indicator
   - Helper text support

2. **FormGroup**
   - Groups related form fields
   - With optional title and description

3. **PasswordInput**
   - Show/hide password toggle
   - Password strength indicator
   - Requirements checklist

4. **EmailInput**
   - Email validation
   - Autocomplete support

5. **PhoneInput**
   - International format support
   - Country code selector
   - Format validation

6. **DatePicker**
   - Calendar popup
   - Date range support
   - Min/max date constraints

7. **FileUpload**
   - Drag and drop support
   - Multiple file selection
   - File type restrictions
   - Progress indicator
   - Preview for images

### Feedback Components (`/components/ui/feedback/`)

1. **Alert**
   - Variants: info, success, warning, error
   - Dismissible option
   - With icon support
   - Action button support

2. **Toast/Notification**
   - Position options (top, bottom, corners)
   - Auto-dismiss with timer
   - Variants: info, success, warning, error
   - Action support

3. **Modal/Dialog**
   - Size variants
   - Backdrop click to close
   - Close button
   - Header, body, footer sections
   - Scrollable content

4. **Spinner/Loader**
   - Size variants
   - With optional text
   - Full page overlay option

5. **Progress**
   - Linear and circular variants
   - Determinate and indeterminate
   - With label and percentage

6. **Skeleton**
   - For loading states
   - Text, avatar, card variants
   - Shimmer animation

7. **EmptyState**
   - Icon/illustration support
   - Title and description
   - Call-to-action button

### Navigation Components (`/components/ui/navigation/`)

1. **Navbar**
   - Logo area
   - Navigation links
   - User menu dropdown
   - Mobile responsive (hamburger menu)
   - Search bar integration

2. **Sidebar**
   - Collapsible
   - Nested menu items
   - Icon support
   - Active state indication
   - Footer area

3. **Tabs**
   - Horizontal and vertical variants
   - Icons support
   - Disabled state
   - Content panels

4. **Breadcrumb**
   - Separator customization
   - Truncation for long paths
   - Home icon support

5. **Pagination**
   - Page numbers
   - Previous/next buttons
   - Jump to page
   - Items per page selector

6. **Link**
   - Internal (Next.js Link)
   - External (with icon indicator)
   - Active state styling

### Layout Components (`/components/ui/layout/`)

1. **Container**
   - Max-width constraints
   - Padding variants
   - Fluid option

2. **Grid**
   - Responsive columns
   - Gap control
   - Alignment options

3. **Stack**
   - Vertical and horizontal
   - Spacing control
   - Alignment options

4. **Card**
   - Header, body, footer sections
   - Shadow variants
   - Clickable option
   - Loading state

5. **Divider**
   - Horizontal and vertical
   - With text option
   - Style variants

6. **Accordion**
   - Single or multiple open
   - Icons for expand/collapse
   - Smooth animations

### Data Display Components (`/components/ui/data-display/`)

1. **Table**
   - Sortable columns
   - Selectable rows
   - Pagination integration
   - Loading state
   - Empty state
   - Responsive (mobile card view)

2. **List**
   - Simple and detailed variants
   - Avatar support
   - Actions per item
   - Loading state

3. **DataCard**
   - Metric display
   - Trend indicator
   - Icon support
   - Loading state

4. **Chart** (wrapper for chart library)
   - Line, bar, pie, donut
   - Responsive
   - Loading state

5. **Timeline**
   - Vertical layout
   - Event items with timestamps
   - Icon/status indicators

## Authentication Components (`/components/auth/`)

1. **LoginForm**
   - Email/username and password fields
   - Remember me checkbox
   - Forgot password link
   - Social login buttons
   - Error handling
   - Loading state

2. **SignupForm**
   - Email, password, confirm password
   - Password requirements display
   - Terms acceptance checkbox
   - Social signup buttons
   - Error handling
   - Loading state

3. **ForgotPasswordForm**
   - Email input
   - Success message display
   - Back to login link

4. **ResetPasswordForm**
   - New password and confirm
   - Password requirements
   - Success redirect

5. **VerifyEmailForm**
   - Code input (6 digits)
   - Resend code button
   - Auto-submit on complete
   - Timer for resend

6. **MFASetup**
   - QR code display
   - Manual entry option
   - Verification code input

7. **SocialLoginButtons**
   - Google, Apple, Facebook, GitHub
   - Consistent styling
   - Loading states

8. **UserMenu**
   - Avatar with dropdown
   - User info display
   - Settings link
   - Sign out button

## Dashboard Components (`/components/dashboard/`)

1. **DashboardLayout**
   - Header with user menu
   - Sidebar navigation
   - Main content area
   - Mobile responsive

2. **StatsCard**
   - Title, value, change indicator
   - Icon support
   - Loading state

3. **ActivityFeed**
   - Timeline of events
   - User avatars
   - Timestamps
   - Action buttons

4. **QuickActions**
   - Grid of action buttons
   - Icons and labels
   - Tooltips

5. **DataTable**
   - Advanced filtering
   - Column visibility toggle
   - Export functionality
   - Bulk actions

6. **UserProfile**
   - Avatar upload
   - Personal info form
   - Password change
   - Preferences section

## Page Templates Required

### 1. Authentication Pages (`/app/(auth)/`)

#### `/app/(auth)/login/page.tsx`
- Full page layout
- LoginForm component
- Logo/branding
- Footer with links
- Responsive design

#### `/app/(auth)/signup/page.tsx`
- Full page layout
- SignupForm component
- Logo/branding
- Footer with links
- Responsive design

#### `/app/(auth)/forgot-password/page.tsx`
- ForgotPasswordForm component
- Simple centered layout

#### `/app/(auth)/reset-password/page.tsx`
- ResetPasswordForm component
- Token validation
- Success redirect

#### `/app/(auth)/verify-email/page.tsx`
- VerifyEmailForm component
- Auto-redirect after verification

### 2. Protected Pages (`/app/(protected)/`)

#### `/app/(protected)/dashboard/page.tsx`
- DashboardLayout wrapper
- Stats overview
- Recent activity
- Quick actions
- Charts/graphs

#### `/app/(protected)/profile/page.tsx`
- User profile management
- Settings tabs
- Security settings
- Preferences

#### `/app/(protected)/settings/page.tsx`
- Application settings
- Account management
- Notification preferences
- Integration settings

### 3. Component Showcase (`/app/showcase/`)

#### `/app/showcase/page.tsx`
- Interactive component library
- Live examples
- Code snippets
- Props documentation
- Copy-paste ready code

## Component Requirements

### General Requirements

1. **TypeScript**
   - Full type safety
   - Exported prop types
   - Generic components where applicable

2. **Accessibility**
   - ARIA labels and roles
   - Keyboard navigation
   - Screen reader support
   - Focus management

3. **Responsive Design**
   - Mobile-first approach
   - Breakpoint consistency
   - Touch-friendly on mobile

4. **Performance**
   - Lazy loading where appropriate
   - Optimized re-renders
   - Code splitting for large components

5. **Developer Experience**
   - Clear prop names
   - Sensible defaults
   - Composition over configuration
   - ForwardRef support where needed

### Component API Patterns

```typescript
// Example component interface pattern
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  className?: string; // Allow additional Tailwind classes
  [key: string]: any; // Allow pass-through props
}
```

### State Management Patterns

1. **Client Components**
   - Mark with 'use client' directive
   - Use React hooks for state
   - Handle user interactions

2. **Server Components**
   - Default for static content
   - No state or event handlers
   - Async data fetching support

3. **Context Providers**
   - Theme context
   - Authentication context
   - Toast/notification context

## Integration Requirements

### AWS Amplify Integration

The UI components must work seamlessly with AWS Amplify Gen 2:

1. **Authentication Flow**
   - Components use Amplify Auth API
   - Handle Cognito user pool operations
   - Support for social providers
   - MFA support

2. **Data Operations**
   - Components can display GraphQL query results
   - Handle loading and error states
   - Support for real-time subscriptions

3. **Storage Integration**
   - File upload components use Amplify Storage
   - Image display with S3 URLs
   - Progress tracking for uploads

### Example Auth Integration

```typescript
// Components should interface with Amplify like this:
import { signIn, signUp, signOut, getCurrentUser } from 'aws-amplify/auth';

// LoginForm component should handle:
const handleLogin = async (email: string, password: string) => {
  try {
    const { isSignedIn, nextStep } = await signIn({ username: email, password });
    // Handle next steps (MFA, new password, etc.)
  } catch (error) {
    // Handle errors with proper user feedback
  }
};
```

## File Organization

```
/components/
├── ui/
│   ├── primitives/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── index.ts        # Barrel export
│   │   └── ...
│   ├── forms/
│   │   ├── FormField.tsx
│   │   ├── PasswordInput.tsx
│   │   ├── index.ts
│   │   └── ...
│   └── index.ts            # Main UI export
├── auth/
│   ├── LoginForm.tsx
│   ├── SignupForm.tsx
│   ├── AuthProvider.tsx
│   ├── useAuth.ts          # Custom hook
│   ├── index.ts
│   └── ...
└── index.ts                # Main component export
```

## Utility Requirements

### Hooks (`/hooks/`)

1. **useAuth**
   - Current user state
   - Loading state
   - Auth methods

2. **useToast**
   - Show notifications
   - Queue management

3. **useModal**
   - Open/close modals
   - Stacking support

4. **useMediaQuery**
   - Responsive breakpoints
   - SSR safe

5. **useLocalStorage**
   - Persistent state
   - SSR safe

### Utilities (`/utils/`)

1. **cn()** - ClassName merger for Tailwind
2. **formatters** - Date, number, currency
3. **validators** - Form validation helpers
4. **constants** - Shared constants

## Documentation Requirements

Each component should include:

1. **Props documentation**
   - Type definitions
   - Default values
   - Required vs optional

2. **Usage examples**
   - Basic usage
   - Advanced patterns
   - Common combinations

3. **Accessibility notes**
   - Keyboard shortcuts
   - ARIA requirements
   - Screen reader behavior

## Testing Considerations

Components should be testable with:

1. **Unit tests**
   - Component rendering
   - User interactions
   - State changes

2. **Integration tests**
   - With Amplify services
   - Form submissions
   - Auth flows

3. **Visual regression tests**
   - Component appearance
   - Responsive behavior
   - Theme variations

## Phase 1 Deliverables

For the initial phase, prioritize:

1. **Core UI primitives** (Button, Input, etc.)
2. **Authentication components** (Login, Signup forms)
3. **Basic dashboard layout**
4. **Component showcase page**

The app should initially function as a component library showcase with working authentication flow:
- Users can browse the component library
- Sign up for an account
- Log in to access protected dashboard
- View their profile
- Log out

## Success Criteria

The UI library is successful when:

1. **Developers can build complete apps** using only these components
2. **Students can learn** by reading the well-documented code
3. **Components are production-ready** with proper error handling
4. **Authentication flow works** end-to-end with Amplify
5. **Component showcase** serves as living documentation

## Notes for Implementation

- Focus on **functionality over aesthetics** initially
- Ensure **TypeScript types** are comprehensive
- Make components **composable and flexible**
- Keep **bundle size** in mind
- Provide **escape hatches** (className props) for customization
- Use **Tailwind CSS** for all styling
- Follow **Next.js 14 App Router** patterns
- Ensure **server/client component** boundaries are clear

## Next Steps

After the UI library is complete:
1. Integrate authentication logic with Amplify Cognito
2. Connect data components to Amplify GraphQL
3. Add storage upload functionality
4. Create additional page templates
5. Build example applications

---

This document provides the complete requirements for building the UI component library. The implementer should focus on creating functional, well-typed components that integrate seamlessly with AWS Amplify Gen 2, while maintaining flexibility for styling and customization.