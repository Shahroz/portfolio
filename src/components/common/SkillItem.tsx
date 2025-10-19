import React from 'react';
import Image from './Image';

interface SkillItemProps {
  img: string;
  caption: string;
  folder?: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ img, caption, folder = "languages" }) => {
  return (
    <div className="col-span-1 sm:mb-5">
      <figure className="item">
        <Image
          src={`${folder}/${img}.png`}
          alt={img}
          placeholder={`Loading ${caption}...`}
        />
        <figcaption className="caption">{caption}</figcaption>
      </figure>
    </div>
  );
};

export default SkillItem;
