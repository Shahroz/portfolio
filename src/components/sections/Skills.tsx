import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import SkillCard from '../common/SkillCard';
import { 
  TOP_SKILLS, 
  SKILLS, 
  AI_SKILLS, 
  CLOUD_SKILLS, 
  CSS_FRAMEWORKS, 
  VERSION_CONTROL_SYSTEM 
} from '../../constants';

const Skills: React.FC = () => {
  const skillSections = [
    { title: "Core Technologies", skills: TOP_SKILLS },
    { title: "Additional Skills", skills: SKILLS },
    { title: "AI & Machine Learning", skills: AI_SKILLS },
    { title: "Cloud & DevOps", skills: CLOUD_SKILLS },
    { title: "CSS Frameworks", skills: CSS_FRAMEWORKS },
    { title: "Version Control & Tools", skills: VERSION_CONTROL_SYSTEM },
  ];

  return (
    <section id="skills" className="skills-section">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" component="h2" className="section-title">
            Skills & Technologies
          </Typography>
        </motion.div>

        {skillSections.map((section, sectionIndex) => (
          <Box key={section.title} className="skill-category" sx={{ mb: 4 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Typography variant="h4" component="h3" className="category-title">
                {section.title}
              </Typography>
            </motion.div>
            
            <Box className="skills-grid">
              {section.skills.map((skill, index) => (
                <motion.div
                  key={skill.caption}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <SkillCard skill={skill} index={index} />
                </motion.div>
              ))}
            </Box>
          </Box>
        ))}
      </Container>
    </section>
  );
};

export default Skills;
