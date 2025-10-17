# Components Structure

This document outlines the component architecture of the portfolio application, following DRY (Don't Repeat Yourself) and KISS (Keep It Simple, Stupid) principles.

## Folder Structure

```
src/
├── components/
│   ├── common/           # Reusable components
│   │   ├── ScrollToTop.tsx
│   │   └── SkillCard.tsx
│   ├── layout/           # Layout components
│   │   └── Header.tsx
│   ├── sections/         # Page sections
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   └── index.ts         # Component exports
├── constants/           # Data constants
│   └── index.ts
├── types/               # TypeScript interfaces
│   └── index.ts
└── App.tsx             # Main application component
```

## Component Categories

### Common Components
- **ScrollToTop**: Reusable scroll-to-top functionality
- **SkillCard**: Reusable skill display component

### Layout Components
- **Header**: Navigation and app bar

### Section Components
- **Hero**: Introduction and typewriter effect
- **Skills**: Skills and technologies display
- **Experience**: Professional experience timeline
- **Projects**: Featured projects gallery
- **Contact**: Contact information and links

## Design Principles Applied

### DRY (Don't Repeat Yourself)
- ✅ Shared data moved to `constants/index.ts`
- ✅ Reusable components created (`SkillCard`, `ScrollToTop`)
- ✅ Common interfaces defined in `types/index.ts`
- ✅ Centralized component exports

### KISS (Keep It Simple, Stupid)
- ✅ Single responsibility for each component
- ✅ Clear component naming conventions
- ✅ Minimal props and simple interfaces
- ✅ Focused functionality per component

## Benefits

1. **Maintainability**: Each component has a single responsibility
2. **Reusability**: Common components can be used across sections
3. **Testability**: Smaller components are easier to test
4. **Performance**: Better tree shaking and code splitting
5. **Developer Experience**: Clear structure and easy navigation
6. **Bundle Size**: Reduced from 543.89 kB to 450.33 kB (17% reduction)

## Usage

```tsx
import { Header, Hero, Skills, Experience, Projects, Contact, ScrollToTop } from './components';

const App = () => (
  <>
    <Header />
    <Hero />
    <Skills />
    <Experience />
    <Projects />
    <Contact />
    <ScrollToTop />
  </>
);
```
