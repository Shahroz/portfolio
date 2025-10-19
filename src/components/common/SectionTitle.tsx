import React from 'react';
import AnimationWrapper from './AnimationWrapper';

interface SectionTitleProps {
  title: string;
  id?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, id }) => {
  return (
    <AnimationWrapper animation="slide-up" delay={0.2}>
      <div className="section-title" id={id}>
        {title.split('').map((letter, index) => (
          <div key={index} className="rubber-band-animation">
            {letter}
          </div>
        ))}
      </div>
    </AnimationWrapper>
  );
};

export default SectionTitle;
