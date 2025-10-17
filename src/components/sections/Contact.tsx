import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { CONTACTS } from '../../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <Container maxWidth="lg">
        <Box className="contact-content">
          <Box className="contact-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="/src/assets/texture/texture1.jpg"
                alt="texture"
                style={{ height: "-webkit-fill-available" }}
              />
            </motion.div>
          </Box>
          
          <Box className="contact-right">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Paper elevation={3} sx={{ p: 3 }}>
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Typography variant="h3" component="h2" className="section-title">
                    Get In Touch
                  </Typography>
                </motion.div>
                
                <Typography variant="body1" className="contact-description">
                  I'm always interested in new opportunities and exciting projects. 
                  Let's connect and discuss how we can work together!
                </Typography>

                <Box className="contact-links">
                  {CONTACTS.map((contact, index) => (
                    <motion.div
                      key={contact.alt}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <a
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link"
                      >
                        <figure>
                          <img
                            src={`/src/assets/contact/${contact.img}.png`}
                            alt={contact.alt}
                          />
                          <figcaption>{contact.alt}</figcaption>
                        </figure>
                      </a>
                    </motion.div>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default Contact;
