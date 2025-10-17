import React, { Suspense, lazy } from 'react';
import { CssBaseline, CircularProgress, Box } from '@mui/material';
import { Analytics } from "@vercel/analytics/react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import './App.css';
import ScrollToTop from './components/common/ScrollToTop';

// Lazy load components for code splitting
const Header = lazy(() => import('./components/layout/Header'));
const Hero = lazy(() => import('./components/sections/Hero'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Contact = lazy(() => import('./components/sections/Contact'));

// Loading component
const LoadingFallback: React.FC = () => (
  <Box 
    display="flex" 
    justifyContent="center" 
    alignItems="center" 
    minHeight="100vh"
  >
    <CircularProgress />
  </Box>
);

const App: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      
      <Suspense fallback={<LoadingFallback />}>
        <Header />
      </Suspense>
      
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <Hero />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Skills />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Experience />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Projects />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>
      </main>

      <ScrollToTop>
        <KeyboardArrowUpIcon />
      </ScrollToTop>
      <Analytics />
    </React.Fragment>
  );
};

export default App;