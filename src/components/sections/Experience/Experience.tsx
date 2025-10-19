import React from 'react';
import Container from "@material-ui/core/Container";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import AnimationWrapper from '../../common/AnimationWrapper';
import SectionTitle from '../../common/SectionTitle';
import { experience, education } from '../../../data/constants';
import './Experience.scss';

const Experience: React.FC = () => {
  return (
    <div className="experience-section" id="resume">
      <Container maxWidth="lg">
        <SectionTitle title="Resume" />

        <AnimationWrapper animation="slide-left" delay={0.3}>
          <div className="sub-heading">Experience</div>
          <Timeline align="alternate">
            {experience.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                    <RadioButtonCheckedIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div className="timeline-content">
                    <div className="job-header">
                      <h3 className="position">{exp.position}</h3>
                      <div className="job-meta">
                        <span className="company">
                          {exp.link ? (
                            <a href={exp.link} target="_blank" rel="noopener noreferrer">
                              {exp.companyName}
                            </a>
                          ) : (
                            exp.companyName
                          )}
                        </span>
                        <span className="timeline">{exp.timeline}</span>
                        <span className="job-type">{exp.jobType}</span>
                      </div>
                    </div>
                    {exp.description && (
                      <p className="description">{exp.description}</p>
                    )}
                    <div className="skills-tags">
                      {exp.languages.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </AnimationWrapper>

        <AnimationWrapper animation="slide-right" delay={0.5}>
          <div className="sub-heading">Education</div>
          <Timeline align="alternate">
            {education.map((edu, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="secondary">
                    <RadioButtonCheckedIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div className="timeline-content">
                    <div className="job-header">
                      <h3 className="position">{edu.degree}</h3>
                      <div className="job-meta">
                        <span className="company">{edu.from}</span>
                        <span className="timeline">{edu.year}</span>
                      </div>
                    </div>
                  </div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </AnimationWrapper>
      </Container>
    </div>
  );
};

export default Experience;
