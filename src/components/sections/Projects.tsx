import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Paper } from '@mui/material';
import ImageGallery from 'react-image-gallery';
import { motion } from 'framer-motion';
import { PROJECTS } from '../../constants';

const Projects: React.FC = () => {
  const imageGallery = PROJECTS.map((project, index) => ({
    name: project.name,
    description: project.description,
    images: project.images.map(img => ({ original: img, thumbnail: img })),
    associated: project.associated,
  }));

  return (
    <section id="projects" className="projects-section">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" component="h2" className="section-title">
            Featured Projects
          </Typography>
        </motion.div>

        <Box className="projects-grid">
          {imageGallery.map((gallery, index) => (
            <Box
              key={gallery.name + index}
              className="project-item"
              sx={{ mb: 3 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Paper elevation={3} className="project-card">
                  <Box className="project-header">
                    <Typography variant="h5" component="h3" className="project-name">
                      {gallery.name}
                    </Typography>
                    {gallery.associated && (
                      <Typography variant="body2" className="project-associated">
                        Associated with {gallery.associated}
                      </Typography>
                    )}
                  </Box>

                  {gallery.images.length > 0 && (
                    <Box className="project-gallery">
                      <ImageGallery
                        items={gallery.images}
                        showThumbnails={true}
                        showFullscreenButton={true}
                        showPlayButton={false}
                        lazyLoad={true}
                      />
                    </Box>
                  )}

                  {gallery.description && (
                    <Typography variant="body1" className="project-description">
                      {gallery.description}
                    </Typography>
                  )}
                </Paper>
              </motion.div>
            </Box>
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default Projects;
