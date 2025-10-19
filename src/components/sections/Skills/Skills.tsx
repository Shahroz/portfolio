import React from 'react';
import Container from "@material-ui/core/Container";
import SectionTitle from '../../common/SectionTitle';
import SkillSection from '../../common/SkillSection';
import { 
  topSkills, 
  skills, 
  aiSkills, 
  cloudSkills, 
  cssFrameworks, 
  versionControlSystem 
} from '../../../data/constants';
import './Skills.scss';

const Skills: React.FC = () => {
  return (
    <div className="skills-section" id="skills">
      <Container maxWidth="lg">
        <SectionTitle title="Skills" />
        
        <SkillSection 
          title="Top" 
          skills={topSkills} 
          animation="slide-left" 
        />
        
        <SkillSection 
          title="Intermediate" 
          skills={skills} 
          animation="bounce" 
        />
        
        <SkillSection 
          title="AI & Machine Learning" 
          skills={aiSkills} 
          animation="scale" 
        />
        
        <SkillSection 
          title="Cloud & Infrastructure" 
          skills={cloudSkills} 
          animation="slide-right" 
        />
        
        <SkillSection 
          title="CSS Frameworks" 
          skills={cssFrameworks} 
          animation="bounce" 
        />
        
        <SkillSection 
          title="Version Control & Tools" 
          skills={versionControlSystem} 
          animation="fade" 
        />
      </Container>
    </div>
  );
};

export default Skills;
