# JSM Testing Projects

This repository contains two Next.js testing demonstration projects that showcase different testing frameworks and methodologies.

## Project Overview

### 📁 Project Structure

```
jsm_testing/
├── nextjs_unit_test/          # Jest + React Testing Library implementation
├── with-vitest-app/           # Vitest + React Testing Library implementation
└── README.md                  # This file
```

---

## 🧪 Testing Projects

### 1. `nextjs_unit_test/` - Jest Testing Framework

A comprehensive Next.js application demonstrating unit testing with **Jest** and **React Testing Library**.

#### **Key Features:**
- **Profile Form System** - Interactive form components with validation
- **Component Library** - Reusable input fields, image upload, and social media fields
- **Comprehensive Test Coverage** - Unit tests for all components with snapshots
- **Modern Next.js Setup** - App Router, TypeScript, TailwindCSS

#### **Folder Structure:**
```
nextjs_unit_test/
├── __tests__/                 # Test files with snapshots
├── app/                       # Next.js app router pages
├── components/                # Reusable React components
│   ├── ProfileForm.tsx        # Main form component
│   ├── ProfilePreview.tsx     # Profile preview component
│   └── input-fields/          # Input component library
├── coverage/                  # Jest coverage reports (HTML & LCOV)
├── types/                     # TypeScript type definitions
├── jest.config.ts             # Jest configuration
├── jest.setup.ts              # Jest setup and matchers
└── package.json               # Dependencies (Jest, RTL, Next.js 15.5.0)
```

#### **Testing Strategy:**
- ✅ **Unit Tests** - Individual component testing
- 📸 **Snapshot Testing** - UI regression prevention
- 🎯 **User Interaction Testing** - Event handling and form validation
- 📊 **Coverage Reporting** - Detailed HTML coverage reports

---

### 2. `with-vitest-app/` - Vitest Testing Framework

A Next.js application showcasing modern testing with **Vitest** and **MSW (Mock Service Worker)**.

#### **Key Features:**
- **API Integration Testing** - Pokemon API with MSW mocking
- **Counter Component** - State management testing examples
- **Blog System** - Dynamic routing with slug-based pages
- **Server Actions** - Testing Next.js server-side functionality

#### **Folder Structure:**
```
with-vitest-app/
├── __tests__/                 # Test files
│   ├── integration/           # Integration tests
│   └── mocks/                 # MSW mock handlers and data
├── actions/                   # Next.js server actions
├── app/                       # Next.js app router
│   ├── counter.tsx/.test.tsx  # Component with co-located tests
│   ├── blog/[slug]/           # Dynamic routing example
│   └── utils/                 # Utility functions with tests
├── pages/                     # Pages router example
├── types/                     # TypeScript definitions
├── vitest.config.ts           # Vitest configuration
├── vitest.setup.ts            # Test environment setup
└── package.json               # Dependencies (Vitest, MSW, Next.js latest)
```

#### **Testing Strategy:**
- ⚡ **Fast Unit Tests** - Vitest's speed advantage
- 🌐 **API Mocking** - MSW for realistic API testing
- 🔗 **Integration Testing** - End-to-end component workflows
- 📍 **Co-located Tests** - Tests next to components for better organization

---

## 🚀 Quick Start

### Jest Project (`nextjs_unit_test/`)
```bash
cd nextjs_unit_test
npm install
npm run dev          # Start development server
npm test             # Run Jest tests
npm run test:watch   # Run tests in watch mode
```

### Vitest Project (`with-vitest-app/`)
```bash
cd with-vitest-app
npm install
npm run dev          # Start development server
npm test             # Run Vitest tests
```

---

## 📊 Key Differences

| Feature | Jest Project | Vitest Project |
|---------|-------------|----------------|
| **Test Runner** | Jest | Vitest |
| **Speed** | Standard | ~10x faster |
| **Configuration** | More setup required | Minimal config |
| **Mocking** | Jest mocks | MSW + Vitest |
| **Coverage** | Built-in HTML reports | Built-in with c8 |
| **File Organization** | Separate `__tests__` folder | Co-located tests |
| **Use Case** | Traditional, mature projects | Modern, fast development |

---

## 🎯 Learning Objectives

This repository demonstrates:

1. **Testing Framework Comparison** - Jest vs Vitest practical differences
2. **Component Testing Patterns** - Form validation, user interactions, state management
3. **API Testing Strategies** - Mocking external services with MSW
4. **Coverage Reporting** - Understanding and improving test coverage
5. **Modern React Testing** - Using React Testing Library best practices
6. **Next.js Specific Testing** - App Router, Server Actions, and dynamic routing

---

## 🛠️ Technologies Used

### Common Stack
- **Next.js** - React framework (App Router & Pages Router)
- **TypeScript** - Type safety
- **React Testing Library** - Component testing utilities
- **TailwindCSS** - Styling framework

### Jest Project Specific
- **Jest** - Test framework and runner
- **@testing-library/jest-dom** - Custom Jest matchers

### Vitest Project Specific
- **Vitest** - Fast test framework
- **MSW (Mock Service Worker)** - API mocking
- **JSDoc** - Runtime DOM implementation

---

## 📝 Notes

- Both projects use **Next.js App Router** as the primary routing method
- Test coverage reports are generated in the `coverage/` directory
- All components include comprehensive unit tests with real-world scenarios
- The projects serve as reference implementations for different testing approaches

---

*Last Updated: November 2025*