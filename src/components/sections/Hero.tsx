import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <Container maxWidth="lg">
        <Box className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" component="h1" className="hero-title">
              Hi, I'm Shahroz Allauddin
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography variant="h4" component="h2" className="hero-subtitle">
              <Typewriter
                options={{
                  strings: [
                    'Full Stack Developer',
                    'AI Enthusiast',
                    'Cloud Solutions Architect',
                    'Mobile App Developer',
                    'Tech Lead'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography variant="body1" className="hero-description">
              I am a passionate full stack developer with 9+ years of experience in web, 
              mobile and AI application development. I love creating innovative solutions 
              that make a difference.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-cta"
          >
            <a href="#contact" className="cta-button">
              Get In Touch
            </a>
            <a href="#projects" className="cta-button secondary">
              View My Work
            </a>
          </motion.div>
        </Box>
      </Container>
    </section>
  );
};

export default Hero;
