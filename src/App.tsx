import React, { Suspense, lazy } from 'react';
import { CssBaseline, CircularProgress, Box, ThemeProvider, createTheme } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { Analytics } from "@vercel/analytics/react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import './App.scss';
import ScrollToTop from './components/common/ScrollToTop';

// Lazy load components for code splitting
const Header = lazy(() => import('./components/layout/Header'));
const Hero = lazy(() => import('./components/sections/Hero'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Contact = lazy(() => import('./components/sections/Contact'));

// Create Emotion cache
const cache = createCache({
  key: 'css',
  prepend: true,
});

// Create MUI theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#001c3d',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Quicksand", sans-serif',
  },
});

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
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;