import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Paper } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" component="h2" className="section-title">
            Professional Experience
          </Typography>
        </motion.div>

        <Timeline position="alternate">
          {EXPERIENCES.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <RadioButtonCheckedIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="transform hover:-translate-y-1.5 transition">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant="h5" component="h3" className="position-title">
                      {exp.position}
                    </Typography>
                    <Typography variant="h6" component="h4" className="company-name">
                      {exp.company}
                    </Typography>
                    <Typography variant="body2" className="duration">
                      {exp.duration}
                    </Typography>
                    <Typography variant="body1" className="description">
                      {exp.description}
                    </Typography>
                    <Box className="technologies">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          #{tech}
                        </span>
                      ))}
                    </Box>
                  </Paper>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </section>
  );
};

export default Experience;
