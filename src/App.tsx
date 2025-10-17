import React from 'react';
import { CssBaseline } from '@mui/material';
import { Analytics } from "@vercel/analytics/react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import './App.scss';
import { Header, Hero, Skills, Experience, Projects, Contact, ScrollToTop } from './components';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <ScrollToTop>
        <KeyboardArrowUpIcon />
      </ScrollToTop>
      <Analytics />
    </React.Fragment>
  );
};

export default App;