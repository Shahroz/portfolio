import React from 'react';
import Container from "@material-ui/core/Container";
import ImageGallery from "react-image-gallery";
import AnimationWrapper from '../../common/AnimationWrapper';
import SectionTitle from '../../common/SectionTitle';
import { imageGallery } from '../../../data/constants';
import './Projects.scss';

const Projects: React.FC = () => {
  return (
    <div className="projects-section" id="projects">
      <Container maxWidth="lg">
        <SectionTitle title="Projects" />

        <AnimationWrapper animation="slide-left" delay={0.3}>
          <div className="projects-grid">
            {imageGallery.map((project, index) => (
              <div key={index} className="project-item">
                <div className="project-header">
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-associated">Associated with: {project.associated}</p>
                  {project.description && (
                    <p className="project-description">{project.description}</p>
                  )}
                </div>
                <div className="project-gallery">
                  <ImageGallery
                    items={project.project}
                    showThumbnails={true}
                    showFullscreenButton={true}
                    showPlayButton={false}
                    showNav={true}
                    autoPlay={false}
                    slideInterval={3000}
                    slideDuration={500}
                    thumbnailPosition="bottom"
                  />
                </div>
              </div>
            ))}
          </div>
        </AnimationWrapper>
      </Container>
    </div>
  );
};

export default Projects;
