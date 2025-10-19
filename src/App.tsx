import React, { Suspense } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

// Lazy load all components
const Header = React.lazy(() => import('./components/sections/Header'));
const Hero = React.lazy(() => import('./components/sections/Hero'));
const Skills = React.lazy(() => import('./components/sections/Skills'));
const Experience = React.lazy(() => import('./components/sections/Experience'));
const Projects = React.lazy(() => import('./components/sections/Projects'));
const Contact = React.lazy(() => import('./components/sections/Contact'));
const ScrollToTopButton = React.lazy(() => import('./components/common/ScrollToTop'));

import './App.scss';

const useStyles = makeStyles(() => ({
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  loadingSpinner: {
    color: '#001c3d',
  },
}));

const LoadingFallback: React.FC = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.loadingContainer}>
      <CircularProgress 
        size={60} 
        className={classes.loadingSpinner}
        thickness={4}
      />
    </div>
  );
};

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Suspense fallback={<LoadingFallback />}>
        <Header />
        <Box component="main">
          <div id="back-to-top-anchor" />
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
        </Box>
        <Suspense fallback={<LoadingFallback />}>
          <ScrollToTopButton />
        </Suspense>
      </Suspense>
    </React.Fragment>
  );
}