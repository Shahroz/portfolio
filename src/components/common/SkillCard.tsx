import React, { useState } from 'react';
import { Skill } from '../../types';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="skill-image">
        {!imageError ? (
          <img
            src={`/src/assets/languages/${skill.img}.png`}
            alt={skill.caption}
            loading="lazy"
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{ 
              opacity: imageLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out'
            }}
          />
        ) : (
          <div className="skill-placeholder">
            {skill.caption.charAt(0)}
          </div>
        )}
      </div>
      <div className="skill-caption">
        {skill.caption}
      </div>
    </div>
  );
};

export default SkillCard;
