import React from 'react';
import AnimationWrapper from './AnimationWrapper';
import SkillItem from './SkillItem';

interface SkillSectionProps {
  title: string;
  skills: Array<{ img: string; caption: string }>;
  animation?: "slide-left" | "slide-right" | "slide-up" | "slide-down" | "bounce" | "scale" | "fade";
}

const SkillSection: React.FC<SkillSectionProps> = ({ 
  title, 
  skills, 
  animation = "slide-left"
}) => {
  return (
    <AnimationWrapper animation={animation} delay={0.3}>
      <div className="sub-heading">{title}</div>
      <div className="grid sm:grid-cols-3 md:grid-cols-9 lg:grid-cols-9 sm:text-center">
        {skills.map((skill, index) => (
          <SkillItem
            key={`${skill.img}-${index}`}
            img={skill.img}
            caption={skill.caption}
          />
        ))}
      </div>
    </AnimationWrapper>
  );
};

export default SkillSection;
