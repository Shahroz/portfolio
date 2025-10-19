import React from 'react';
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import AnimationWrapper from '../../common/AnimationWrapper';
import Image from '../../common/Image';
import SectionTitle from '../../common/SectionTitle';
import { contacts } from '../../../data/constants';
import { getContactHref, getContactTarget } from '../../../utils/helpers';
import './Contact.scss';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    margin: theme.spacing(2),
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
  },
}));

const Contact: React.FC = () => {
  const classes = useStyles();

  return (
    <div className="contact-section" id="contact">
      <Container maxWidth="lg">
        <SectionTitle title="Contact" />

        <AnimationWrapper animation="slide-left" delay={0.3}>
          <div className="grid md:gap-4 sm:text-center sm:grid-cols-1 md:grid-cols-12">
            <div className="sm:col-span-12 md:col-span-4 contact-left-pane relative">
              <div className="text-xl font-bold text-white absolute top-1/3 sm:px-6 sm:py-2 md:px-20 py-4 text-start">
                I'm currently taking on freelance work. If you are interested
                in hiring me for your project please use one of these options
                to get in touch
              </div>
              <Image
                className="responsive"
                src="texture/texture3.jpg"
                alt="texture"
                style={{ height: "-webkit-fill-available" }}
                placeholder="Loading background..."
              />
            </div>
            <div className="sm:col-span-12 md:col-span-8 contact-right-pane">
              <Paper elevation={3} className={classes.paper}>
                <div className="top-margin">
                  <div className="grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-6 sm:text-center">
                    {contacts.map((contact: any, index: any) => (
                      <a
                        href={getContactHref(contact)}
                        target={getContactTarget(contact)}
                        rel="noreferrer"
                        className="contact-link text-center cursor-pointer py-6 transform hover:-translate-y-2 transition border-shadow"
                        key={contact.img + index}
                        style={{
                          boxShadow:
                            "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
                        }}
                      >
                        <figure className="item">
                          <Image
                            className="contact-img"
                            src={`contact/${contact.img}.png`}
                            alt={contact.img}
                            placeholder={`Loading ${contact.caption}...`}
                          />
                          <figcaption className="caption text-center">
                            {contact.caption}
                          </figcaption>
                        </figure>
                      </a>
                    ))}
                  </div>
                </div>
              </Paper>
            </div>
          </div>
        </AnimationWrapper>
      </Container>
    </div>
  );
};

export default Contact;
