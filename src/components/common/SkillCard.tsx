import React from 'react';
import { Skill } from '../../types';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  return (
    <div className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="skill-image">
        <img
          src={`/src/assets/languages/${skill.img}.png`}
          alt={skill.caption}
          loading="lazy"
        />
      </div>
      <div className="skill-caption">
        {skill.caption}
      </div>
    </div>
  );
};

export default SkillCard;
