# 🎨 Chill Amplify Template

A production-ready, student-friendly AWS Amplify Gen 2 template with Next.js 15, React 19, and a beautiful Apple-inspired UI library. This template provides everything you need to build modern full-stack applications without the boilerplate setup.

## ✨ Features

- **🔐 Authentication Ready** - Complete signup/login flows (mock implementation for demo)
- **🎨 Apple-Inspired UI Library** - Polished primitives, forms, and components
- **📱 Responsive Dashboard** - Professional layout with navigation and sidebar
- **⚡ Modern Stack** - Next.js 15, React 19, TypeScript 5.8
- **🎯 Zero Config** - Ready to use out of the box
- **🎓 Student Friendly** - Clear structure, well-documented patterns

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 with App Router, React 19, TypeScript
- **Styling**: Tailwind CSS v3.4 (stable production build)
- **Authentication**: AWS Amplify Auth (Cognito) - mock implementation included
- **Backend**: AWS Amplify Gen 2 (CDK-based infrastructure)
- **UI Components**: Custom Apple-inspired design system

## 🚀 Quick Start

```bash
# Clone or use this template
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the template in action.

### 🌟 Template Pages

- **Homepage** (`/`) - Marketing landing with feature overview
- **Authentication** (`/login`, `/signup`) - Complete auth flows
- **Dashboard** (`/dashboard`) - Protected area with navigation
- **Browse Freely** - No auth barriers, perfect for exploring the template

## 🎨 Why Tailwind v3?

This template uses **Tailwind CSS v3.4** instead of the latest v4 for important reasons:

- **🛡️ Production Stability** - v3 is battle-tested and reliable
- **📚 Student Learning** - Extensive documentation and community resources
- **🔧 Zero Configuration Issues** - Works seamlessly with Next.js and PostCSS
- **🎯 Focus on Building** - Spend time on features, not debugging build tools

*Future versions may upgrade to Tailwind v4 once it reaches stable release.*

## 📁 Project Structure

```
chill-amplify-template/
├── app/                    # Next.js App Router pages
│   ├── (protected)/       # Protected routes (dashboard, etc.)
│   ├── login/             # Authentication pages
│   ├── signup/            
│   └── page.tsx           # Homepage
├── components/            # Reusable UI components
│   ├── auth/              # Authentication forms
│   ├── dashboard/         # Dashboard-specific components
│   └── ui/                # Core UI library
│       ├── primitives/    # Base components (Button, Input, etc.)
│       ├── forms/         # Form components
│       └── navigation/    # Navigation components
├── hooks/                 # Custom React hooks
├── utils/                 # Utility functions
└── amplify/              # AWS Amplify backend configuration
```

## 🔧 Development

```bash
# Development server
npm run dev

# Build for production
npm run build

# Run production build
npm start

# Lint code
npm run lint
```

## 🎓 Perfect for Students

This template is designed with learning in mind:

- **Clear Code Structure** - Well-organized components and utilities
- **TypeScript Throughout** - Learn modern development practices
- **Production Patterns** - See how real applications are structured
- **No Auth Barriers** - Browse all pages freely during development
- **Comprehensive Examples** - Forms, navigation, responsive design

## 🚀 Deploy to AWS

This template is ready for AWS Amplify hosting:

1. Connect your GitHub repository to AWS Amplify
2. Amplify will automatically detect the Next.js framework
3. Your app will be deployed with CDN, SSL, and global distribution

For full-stack features (auth, database, etc.), follow the [AWS Amplify Gen 2 documentation](https://docs.amplify.aws/gen2/).

## 🛠️ Customization

### Adding New Components
1. Create components in `/components/ui/primitives/`
2. Follow the existing patterns for variants and sizing
3. Use the `cn()` utility for conditional classes

### Modifying the Design System
- Update Tailwind theme in `tailwind.config.js`
- Customize colors, fonts, and spacing as needed
- All components will automatically inherit changes

### Adding Real Authentication
- Uncomment Amplify auth imports
- Configure your AWS Amplify backend
- Replace mock auth with real Cognito flows

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [AWS Amplify Gen 2 Guide](https://docs.amplify.aws/gen2/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

This template is designed to be a solid starting point. Feel free to:
- Extend the UI library with new components
- Add more example patterns and layouts
- Improve documentation and examples
- Share feedback and suggestions

---

**Built with ❤️ for the developer community**

*Ready to build something amazing? Start with this template and focus on what makes your app unique.*