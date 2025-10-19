import React from 'react';
import Image from './Image';

interface SkillItemProps {
  img: string;
  caption: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ img, caption }) => {
  return (
    <div className="col-span-1 sm:mb-5">
      <figure className="item">
        <Image
          src={`assets/languages/${img}.png`}
          alt={img}
          placeholder={`Loading ${caption}...`}
          width={100}
          height={100}
        />
        <figcaption className="caption">{caption}</figcaption>
      </figure>
    </div>
  );
};

export default SkillItem;
