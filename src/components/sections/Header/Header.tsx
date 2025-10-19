import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { headers } from '../../../data/constants';
import { smoothScrollToSection, toggleMenu } from '../../../utils/helpers';
import './Header.scss';

const Header: React.FC = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLDivElement>) => {
    const href = e.currentTarget.querySelector('a')?.getAttribute('href');
    if (href) {
      const sectionId = href.replace('#', '');
      smoothScrollToSection(sectionId);
    }
  };

  return (
    <AppBar className="app-bar">
      <Toolbar>
        <div className="heading logo">
          <div className="rubber-band-animation">P</div>
          <div className="rubber-band-animation">o</div>
          <div className="rubber-band-animation">r</div>
          <div className="rubber-band-animation">t</div>
          <div className="rubber-band-animation">f</div>
          <div className="rubber-band-animation">o</div>
          <div className="rubber-band-animation">l</div>
          <div className="rubber-band-animation">i</div>
          <div className="rubber-band-animation">o</div>
        </div>
        <div className="menu" id="menu">
          {headers.map((header, index) => (
            <div
              key={index}
              className="menu-item"
              onClick={handleSmoothScroll}
            >
              <a href={`#${header.href}`}>{header.name}</a>
            </div>
          ))}
        </div>
        <div className="burger-menu" onClick={toggleMenu}>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
