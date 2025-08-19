# 📋 Chill Amplify Template - Technical Requirements

## 🎯 Core Vision
Build a **self-aware, progressively-enhancing template** that works perfectly in both mock mode (no AWS) and production mode (full AWS), teaching students through the transition.

## 🏗️ Architecture Requirements

### 1. Dual-Mode Operation
The template MUST support two distinct operational modes:

#### 🎭 Mock Mode (No AWS Required)
- App runs with `npm run dev` immediately after clone
- Full UI accessible without any AWS account
- Authentication forms display but show educational messages
- Dashboard shows sample/demo data
- Clear visual indicators of mock mode throughout

#### 🚀 Production Mode (AWS Deployed)
- Activated after running `npx ampx sandbox`
- Same codebase seamlessly switches to real AWS services
- Authentication connects to real Cognito
- Dashboard shows live data from DynamoDB
- All mock indicators disappear automatically

### 2. Smart Detection System
The codebase MUST automatically detect which mode it's in:

```typescript
// Required detection logic
- Check if amplify_outputs.json contains mock values
- Verify resource IDs match AWS patterns
- No manual configuration needed
- Zero code changes required for transition
```

### 3. Educational UX Requirements

#### In Mock Mode, the app MUST:
- ✅ Show clear banners explaining mock state
- ✅ Provide deployment instructions at interaction points
- ✅ Display tooltips on auth forms about sandbox deployment
- ✅ Allow UI exploration without barriers
- ✅ Show "Deploy to Enable" CTAs where appropriate

#### Educational Messages MUST:
- Be helpful, not annoying
- Include exact commands to run
- Appear at moments of intent (e.g., trying to login)
- Be dismissible but accessible
- Link to relevant documentation

### 4. File Structure Requirements

```
amplify_outputs.json         # Mock config (COMMITTED to repo)
├── Purpose: Allow app to start without AWS
├── Content: Mock resource identifiers
└── Git: Tracked in version control

amplify_outputs.real.json    # Real config (GITIGNORED)
├── Purpose: Actual AWS resource connections
├── Content: Real Cognito, AppSync, S3 IDs
└── Git: Never committed, user-generated

.gitignore MUST include:
- amplify_outputs.real.json
- .amplify/
- Any environment-specific configs
```

### 5. Code Quality Standards

#### Every Component MUST:
- Handle both mock and real modes gracefully
- Use TypeScript with no `any` types
- Include strategic comments explaining dual-mode behavior
- Follow consistent detection patterns
- Provide loading and error states

#### Pattern Consistency:
```typescript
// Every feature MUST follow this pattern:
const isRealMode = isAmplifyDeployed();

if (isRealMode) {
  // Production implementation
} else {
  // Educational mock with clear messaging
}
```

### 6. User Experience Flow

#### Fresh Clone Experience:
1. `git clone` → `npm install` → `npm run dev`
2. App loads with beautiful UI fully functional
3. Yellow banner: "🎭 Mock Mode - Deploy backend to enable features"
4. Login attempt → Toast with deployment instructions
5. Dashboard shows sample data with "This is demo data" indicator

#### Post-Sandbox Experience:
1. `npx ampx sandbox` → Creates real resources
2. `amplify_outputs.json` updated with real IDs
3. App auto-detects real mode on next page load
4. Banner disappears, auth works, data is live
5. Seamless transition, same URLs, same code

### 7. Authentication Requirements

#### Mock Mode Behavior:
- Login form accepts any input but doesn't submit
- Shows toast: "Run `npx ampx sandbox` to enable authentication"
- Optionally allows "demo@example.com" to show demo dashboard
- Signup form shows but explains it's not functional yet
- Password reset shows "Not available in mock mode"

#### Production Mode Behavior:
- Full Cognito integration
- Real user registration with email verification
- Secure password requirements
- MFA capability ready
- Password reset flows

### 8. Dashboard Requirements

#### Mock Mode Dashboard:
- Shows beautiful charts with sample data
- Displays "Demo Data" watermark
- Includes "Deploy to see your real data" CTA
- All interactions work but don't persist
- Educational tooltips on each widget

#### Production Mode Dashboard:
- Connects to real DynamoDB data
- Live updates via subscriptions
- User-specific content
- Persistent state changes
- Real metrics and analytics

### 9. Performance Requirements

- Mock mode must load instantly (no API calls)
- Production mode must handle loading states gracefully
- Lazy load heavy components
- Optimize bundle size for both modes
- No duplicate code for mock/real implementations

### 10. Developer Experience Requirements

#### The template MUST:
- Provide clear console messages about current mode
- Include helpful error messages for common issues
- Offer single-command deployment
- Support hot reload in both modes
- Include comprehensive inline documentation

#### Console Output Examples:
```
🎭 Starting in MOCK MODE (no AWS backend detected)
   To deploy backend: npx ampx sandbox
   To learn more: npm run docs

🚀 Starting in PRODUCTION MODE (AWS backend connected)
   User Pool: us-east-1_ABC123
   API Endpoint: https://xxx.appsync-api.region.amazonaws.com/graphql
```

## 🎓 Teaching Requirements

### The template MUST teach through usage:
1. **Frontend First**: Students see UI immediately
2. **Progressive Complexity**: Add backend when ready
3. **Clear Transitions**: Obvious when to deploy
4. **Best Practices**: Production patterns from day one
5. **Error Prevention**: Impossible to get "stuck"

### Learning Milestones:
- **Hour 1**: See beautiful UI, understand mock mode
- **Day 1**: Customize components, explore structure
- **Day 2**: Deploy sandbox, see real auth work
- **Week 1**: Build new features on solid foundation

## 🚫 Anti-Requirements (What NOT to Do)

The template MUST NOT:
- ❌ Require AWS account to see UI
- ❌ Break when amplify_outputs.json is missing
- ❌ Need manual code changes for mock→real transition
- ❌ Show errors in mock mode
- ❌ Confuse students about what's real vs mock
- ❌ Require reading documentation to start
- ❌ Include complex configuration files
- ❌ Use different URLs for mock/real modes

## ✅ Success Criteria

The template is successful when:
1. Student can see UI in < 1 minute after clone
2. Mock mode clearly indicates what's not real
3. Transition to real mode requires one command
4. No code changes needed for deployment
5. Students understand the architecture intuitively
6. AI assistants can explain the dual-mode system
7. Production deployment works flawlessly

## 🔄 Maintenance Requirements

### Ongoing Commitments:
- Keep mock config in sync with schema changes
- Update educational messages for clarity
- Maintain backward compatibility
- Test both modes before releases
- Document any mode-specific behaviors
- Ensure examples work in both modes

---

**These requirements ensure the template delivers on its promise: A Ferrari that runs immediately, even without fuel, teaching students what fuel does and how to add it.**