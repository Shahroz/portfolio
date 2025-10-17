import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const burgerMenu = () => {
    const menu = document.querySelector("#menu");
    menu?.classList.contains("hidden")
      ? menu.classList.remove("hidden")
      : menu?.classList.add("hidden");
  };

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar className="app-bar">
      <Toolbar>
        <div className="heading logo">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Shahroz Allauddin
            </Typography>
          </motion.div>
        </div>
        
        <div className="nav-links">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav>
              <a href="#home" onClick={smoothScroll}>Home</a>
              <a href="#about" onClick={smoothScroll}>About</a>
              <a href="#skills" onClick={smoothScroll}>Skills</a>
              <a href="#experience" onClick={smoothScroll}>Experience</a>
              <a href="#projects" onClick={smoothScroll}>Projects</a>
              <a href="#contact" onClick={smoothScroll}>Contact</a>
            </nav>
          </motion.div>
        </div>

        <div className="burger-menu" onClick={burgerMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div id="menu" className="hidden">
          <a href="#home" onClick={smoothScroll}>Home</a>
          <a href="#about" onClick={smoothScroll}>About</a>
          <a href="#skills" onClick={smoothScroll}>Skills</a>
          <a href="#experience" onClick={smoothScroll}>Experience</a>
          <a href="#projects" onClick={smoothScroll}>Projects</a>
          <a href="#contact" onClick={smoothScroll}>Contact</a>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
