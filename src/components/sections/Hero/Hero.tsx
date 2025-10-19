import React from 'react';
import Typewriter from "typewriter-effect";
import { typewriterStrings } from '../../../data/constants';
import './Hero.scss';

const Hero: React.FC = () => {
  return (
    <div className="hero-section" id="about">
      <div className="hero-content">
        <div className="grid grid-cols-1">
          <div className="md:hidden name sm:text-justify">
            Shahroz Allauddin
          </div>
          {/*<div>
            <Image
              className="rounded-lg object-cover object-center m-auto sm:w-full lg:w-full md:h-96 lg:object-top"
              src="img/profile3.jpg"
              alt="profile"
              loading="eager"
            />
          </div>*/}
          <div className="text-center mt-7 rounded-xl">
            <Typewriter
              options={{
                strings: typewriterStrings,
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 50,
              }}
            />
          </div>
          <div className="text-center mt-4">
            <p className="hero-description">
              I am a passionate Full Stack Developer with 8+ years of experience in web and mobile application development. 
              I specialize in creating robust, scalable, and user-friendly applications using modern technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
