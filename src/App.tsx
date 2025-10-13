import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Zoom from "@material-ui/core/Zoom";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import Timeline from "@material-ui/lab/Timeline";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import $ from "jquery";
import React from "react";
import ImageGallery from "react-image-gallery";
import Typewriter from "typewriter-effect";
import "./App.scss";
// import ZoomEffect from 'react-reveal/Zoom';
import Fade from "react-reveal/Fade";
// import LightSpeed from "react-reveal/LightSpeed";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";
import Flash from "react-reveal/Flash";

let topSkills = [
  { img: "angular", caption: "Angular" },
  { img: "typescript", caption: "TypeScript" },
  { img: "javascript", caption: "JavaScript" },
  { img: "php", caption: "PHP" },
  { img: "laravel", caption: "Laravel" },
  { img: "nodejs", caption: "NodeJs" },
  { img: 'rxjs', 'caption': 'RxJs' },
  { img: "angular-material", caption: "Angular Material" },
  { img: "html5", caption: "HTML5" },
  { img: "scss", caption: "Scss" },
  { img: "css3", caption: "CSS3" },
];

let skills = [
  { img: "fabricjs", caption: "Fabric.js" },
  { img: "react", caption: "React" },
  { img: "gatsby", caption: "Gatsby.js" },
  { img: "nestjs", caption: "NestJS" },
  { img: "nextjs", caption: "Next.Js" },
  { img: "material-ui", caption: "Material UI" },
  { img: "jquery", caption: "jQuery" },
  { img: "google-app-script", caption: "Google App Script" },
  { img: "wordpress", caption: "Wordpress" },
  { img: 'ionic', 'caption': 'Ionic' },
  { img: 'ngrx', 'caption': 'NgRx' },
  { img: 'open-cart', 'caption': 'Opencart' },
];

let aiSkills = [
  { img: "python", caption: "Python" },
  { img: "rust", caption: "Rust" },
  { img: "openai", caption: "OpenAI" },
  { img: "langchain", caption: "LangChain" },
  { img: "gemini", caption: "Google Gemini" },
];

let cloudSkills = [
  { img: "google-cloud-storage", caption: "Google Cloud Storage" },
  { img: "google-cloud-run", caption: "Google Cloud Run" },
  { img: "aws-s3", caption: "AWS S3" },
  { img: "aws-lambda", caption: "AWS Lambda" },
  { img: "aws-ec2", caption: "AWS EC2" },
  { img: "aws-cloudformation", caption: "AWS CloudFormation" },
  { img: "aws-control-tower", caption: "AWS Control Tower" },
  { img: "nano-banana", caption: "Nano Banana" },
];

let cssFrameworks = [
  { img: "shadcn", caption: "shadcn/ui" },
  { img: "tailwind", caption: "Tailwind UI" },
  { img: "bootstrap", caption: "Bootstrap" },
  { img: "angular-material", caption: "Angular Material Design" },
  { img: "mdb", caption: "MDB" },
];

let versionControlSystem = [
  { img: "jira", caption: "Jira" },
  { img: "git", caption: "Git" },
  { img: "github", caption: "GitHub" },
  { img: "gitlab", caption: "GitLab" },
  { img: "bitbucket", caption: "Bitbucket" },
  { img: "yarn", caption: "Yarn" },
  { img: "vercel", caption: "Vercel" },
  { img: "vite", caption: "Vite" },
  { img: "webpack", caption: "Webpack" },
];

let contacts = [
  {
    img: "linkedin",
    caption: "LinkedIn",
    link: "https://www.linkedin.com/in/shahroz-allauddin-a268b57a",
  },
  { img: "gmail", caption: "Email", link: "smshahroz.allauddin@gmail.com" },
  { img: "github", caption: "GitHub", link: "https://github.com/Shahroz" },
];

let education = [
  {
    degree: "M101JS: MongoDB for Node.js Developers",
    from: "MongoDB University",
    year: "2016 — 2016",
  }, {
    degree: "Bachelors of Computer Science",
    from: "Federal Urdu University, Karachi",
    year: "2011 — 2015",
  },
  {
    degree: "Intermediate in Pre-Engineering",
    from: "S.M Govt. Science College, Karachi",
    year: "2008 — 2010",
  },
  {
    degree: "Secondary School Certificate",
    from: "Pak Folks Grammar School, Karachi",
    year: "2006 — 2008",
  },
];

const headers = [
  { href: "about", name: "About" },
  { href: "skills", name: "Skills" },
  { href: "resume", name: "Resume" },
  /*{ href: "projects", name: "Projects" },*/
  { href: "contact", name: "Contact" },
];

const experience = [
  {
    position: "Senior Software Developer Manager",
    jobType: "Full Time",
    timeline: "July 2023 — Present",
    companyName: "Gridizen",
    link: "https://www.gridizen.com",
    description:
      "Take full ownership of AI based applications with E2E testing. Manage, mentor, and motivate a team of developers, fostering a culture of innovation, collaboration, and continuous improvement. Define team goals, set clear expectations, and monitor performance to ensure alignment with organizational objectives. Provide regular feedback, conduct performance reviews, and identify opportunities for team members' growth and development. Take full ownership of the end-to-end delivery of development projects, ensuring they are completed on time, within budget, and to the highest quality standards. Work closely with product managers, designers, QA engineers, and other stakeholders to ensure seamless collaboration and alignment. Identify opportunities to improve development processes, tools, and workflows. Monitor team metrics and performance indicators, using data to inform decisions and drive improvements. Effectively manage tasks and assignments using ClickUp, streamlining project workflows and enhancing team collaboration and productivity. Facilitate and manage daily Scrum meetings efficiently, ensuring clear communication, addressing team concerns, and keeping projects on track with well-defined goals and priorities. Oversee repository management, conduct code reviews, and manage release processes to ensure high-quality code, consistent version control, and smooth deployment cycles.",
    languages: [
      "AI/ML",
      "Agentic AI",
      "E2E Testing",
      "Team Leadership",
      "Python",
      "Rust",
      "JavaScript",
      "TypeScript",
      "Angular",
      "React",
      "Node.js",
      "Google Gemini",
      "Google Cloud Storage",
      "Google Cloud Run",
      "AWS S3",
      "AWS Lambda",
      "AWS EC2",
      "AWS CloudFormation",
      "AWS Control Tower",
      "Nano Banana",
      "ClickUp",
      "Scrum",
      "Code Review",
      "Repository Management",
    ],
  },
  {
    position: "Technical Team Lead",
    jobType: "Full Time",
    timeline: "July 2020 — May 2023",
    companyName: "IdeaToLife",
    link: "https://www.ideatolife.me",
    description:
      "Leader, Scrum master and attends business meetings. Responsibility to manage Angular projects and Front End, teams. Take project ownership and lead front-end teams. Write complex logic including services, and socket integrations, and manage Amazon S3 bucket operations with large files. Collaborate with business and designer teams and transform them into features. Write RESTfull services using Nest.Js, and integrate them into Angular applications. Responsible to manage setup and configurations SEO in Angular SSR, Lazy load modules, Code review, and splitting. Team leadership and mentor reports and help them in Skills Development. Built E-Commerce web application in Angular. Built Custom CRM, ERP, Admin Panels and CMS in Angular with RESTfull Service integration. Worked on WebGL library fabric.js and Data Visualization tools like D3, Leaflet Map, Heatmap, etc.",
    languages: [
      "Angular",
      "Angular Material",
      "RxJs",
      "NgRx",
      "TypeScript",
      "JavaScript",
      "Sass",
      "React",
      "Material-UI",
      "Gatsby",
      "Apex Charts",
      "SEO",
      "NestJS",
      "RESTful Services",
      "Amazon S3",
      "Socket.io",
      "WebGL",
      "Fabric.js",
      "D3.js",
      "Leaflet Map",
      "Heatmap",
      "Team Leadership",
      "Scrum",
      "Code Review",
    ],
  },
  {
    position: "Full Stack Engineer",
    jobType: "Full Time",
    timeline: "July 2018 — July 2020",
    companyName: "IdeaToLife",
    link: "https://www.ideatolife.me",
    description:
      "Working as a Full Stack Engineer in a fast-paced organization. My experience in Ideatolife includes the development of the front-end side of the application and fixing reported bugs has been my responsibility. I worked on these languages and frameworks Angular, Angular Material, JavaScript, Typescript, PHP and NodeJs.",
    languages: [
      "Angular",
      "Angular Material",
      "TypeScript",
      "JavaScript",
      "jQuery",
      "OpenCart",
      "WordPress",
      "React",
      "Material-UI",
      "TailwindCSS",
      "Chart.js",
      "Socket.io",
    ],
  },
  {
    position: "Sr. Angular Developer",
    jobType: "Full Time - Contract",
    link: "https://www.skynewsarabia.com/",
    timeline: "February 2018 — April 2018",
    companyName: "Sky News Arabia",
    description: "",
    languages: ["AngularJs", "Google AMP", "SEO", "HTML5", "Bootstrap", "CSS3", "JavaScript"],
  },
  {
    position: "Freelancer",
    jobType: "Part Time",
    timeline: "2020 — Present",
    companyName: "",
    description: "",
    languages: [
      "Angular",
      "Angular Material",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Html5",
      "CSS3",
      "Bootstrap 3 | 4 | 5",
      "FabricJs",
      "PHP",
      "Laravel",
      "Lumen",
      "Next",
      "Nest",
      "NodeJs",
      "React",
      "Vue",
      "MongoDb",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    position: "Full Stack Developer",
    jobType: "Full Time",
    timeline: "January 2017 — February 2018",
    companyName: "Cooperative Computing",
    link: "https://cooperativecomputing.com",
    description: "",
    languages: [
      "JavaScript",
      "PHP",
      "Laravel",
      "Nodejs",
      "VueJs",
      "Html5",
      "CSS3",
      "jQuery",
      "REST full service",
      "Microservices",
    ],
  },
  {
    position: "Software Engineer",
    jobType: "Full Time",
    timeline: "July 2015 — January 2017",
    companyName: "Maven Solutions",
    link: "https://www.mavensolutions.net/",
    description: "",
    languages: [
      "JavaScript",
      "PHP",
      "Python",
      "Nodejs",
      "AngularJs",
      "Html5",
      "CSS3",
      "jQuery",
      "Ionic Framework",
      "Frappe",
      "ERPNext",
      "vTiger",
      "Django",
      "DRF",
    ],
  },
  {
    position: "Internee",
    jobType: "Full Time",
    timeline: "March 2014 — January 2015",
    companyName: "Super Technologies",
    link: "https://www.supertec.com/",
    description: "",
    languages: [
      "JavaScript",
      "PHP",
      "Python",
      "Nodejs",
      "AngularJs",
      "Html5",
      "CSS3",
      "jQuery",
      "Ionic Framework",
      "Frappe",
      "ERPNext",
      "vTiger",
      "Django",
      "DRF",
    ],
  },
];

const purpl = [
  {
    original: "https://i.ibb.co/SBJVCb7/1.jpg",
    thumbnail: "https://i.ibb.co/SBJVCb7/1.jpg",
  },
  {
    original: "https://i.ibb.co/JvMmk4x/2.jpg",
    thumbnail: "https://i.ibb.co/JvMmk4x/2.jpg",
  },
  {
    original: "https://i.ibb.co/31mzrLp/3.jpg",
    thumbnail: "https://i.ibb.co/31mzrLp/3.jpg",
  },
  {
    original: "https://i.ibb.co/Zdts9zy/4.jpg",
    thumbnail: "https://i.ibb.co/Zdts9zy/4.jpg",
  },
  {
    original: "https://i.ibb.co/Q8p3hsh/5.jpg",
    thumbnail: "https://i.ibb.co/Q8p3hsh/5.jpg",
  },
  {
    original: "https://i.ibb.co/Wvf1pvf/6.jpg",
    thumbnail: "https://i.ibb.co/Wvf1pvf/6.jpg",
  },
];

const fleetak = [
  {
    original: "https://i.ibb.co/51Lnb61/1.jpg",
    thumbnail: "https://i.ibb.co/51Lnb61/1.jpg",
  },
  {
    original: "https://i.ibb.co/L9ZbJ3X/2.jpg",
    thumbnail: "https://i.ibb.co/L9ZbJ3X/2.jpg",
  },
  {
    original: "https://i.ibb.co/dtzdX9L/3.jpg",
    thumbnail: "https://i.ibb.co/dtzdX9L/3.jpg",
  },
  {
    original: "https://i.ibb.co/vYR9VVZ/4.jpg",
    thumbnail: "https://i.ibb.co/vYR9VVZ/4.jpg",
  },
  {
    original: "https://i.ibb.co/vqfzXFt/5.jpg",
    thumbnail: "https://i.ibb.co/vqfzXFt/5.jpg",
  },
  {
    original: "https://i.ibb.co/6wQWR9Y/6.jpg",
    thumbnail: "https://i.ibb.co/6wQWR9Y/6.jpg",
  },
];

const kulud = [
  {
    original: "https://i.ibb.co/0c52jst/1.jpg",
    thumbnail: "https://i.ibb.co/0c52jst/1.jpg",
  },
  {
    original: "https://i.ibb.co/vj5VJWp/2.jpg",
    thumbnail: "https://i.ibb.co/vj5VJWp/2.jpg",
  },
  {
    original: "https://i.ibb.co/7jN3jtZ/3.png",
    thumbnail: "https://i.ibb.co/7jN3jtZ/3.png",
  },
  {
    original: "https://i.ibb.co/4T1SKB5/4.png",
    thumbnail: "https://i.ibb.co/4T1SKB5/4.png",
  },
  {
    original: "https://i.ibb.co/j60fwK2/5.png",
    thumbnail: "https://i.ibb.co/j60fwK2/5.png",
  },
  {
    original: "https://i.ibb.co/NtZmQzS/6.png",
    thumbnail: "https://i.ibb.co/NtZmQzS/6.png",
  },
  {
    original: "https://i.ibb.co/WsrmYXk/7.png",
    thumbnail: "https://i.ibb.co/WsrmYXk/7.png",
  },
];

const imageGallery = [
  {
    name: 'MN Atelier',
    associated: "IdeatoLife",
    description: "",
    project: [
      {
        original: 'https://i.ibb.co/Ny2cdXw/screencapture-mnatelier-women-stylist-listing-2022-11-02-17-33-47-min.png',
        thumbnail: 'https://i.ibb.co/Ny2cdXw/screencapture-mnatelier-women-stylist-listing-2022-11-02-17-33-47-min.png',
      }, {
        original: 'https://i.ibb.co/RhzpyWD/screencapture-mnatelier-women-designer-profile-amal-al-raisi-1477-2022-11-02-17-31-45-min.png',
        thumbnail: 'https://i.ibb.co/RhzpyWD/screencapture-mnatelier-women-designer-profile-amal-al-raisi-1477-2022-11-02-17-31-45-min.png',
      }, {
        original: 'https://i.ibb.co/V3XJPzz/screencapture-mnatelier-women-product-details-ari-cupro-dress-1144-2022-11-02-17-36-44-min.png',
        thumbnail: 'https://i.ibb.co/V3XJPzz/screencapture-mnatelier-women-product-details-ari-cupro-dress-1144-2022-11-02-17-36-44-min.png',
      }
    ]
  },
  {
    project: purpl, name: "Purpl", associated: "IdeatoLife", description: ""
  },
  {
    project: fleetak,
    name: "Fleetak",
    associated: "IdeatoLife",
    description: "",
  },
  {
    project: kulud, name: "Kulud", associated: "IdeatoLife", description: ""
  },
];

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ScrollTop(props: Props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    paper: {
      padding: "16px",
    },
    form: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

const burgerMenu = () => {
  const menu = document.querySelector("#menu");
  menu.classList.contains("hidden")
    ? menu.classList.remove("hidden")
    : menu.classList.add("hidden");
};

const smoothScroll = (e) => {
  const sectionId = $(e).find("a").attr("href");
  $("html, body").animate(
    { scrollTop: $("" + sectionId).offset().top - 57 },
    0
  );
};

$(window).on("load", function () {
  let index = 1;
  const asyncWait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  (async () => {
    while (index > 0) {
      $(".logo div:nth-child(" + index + ")").addClass("animate-text");
      await asyncWait(1000);
      $(".logo div:nth-child(" + index + ")").removeClass("animate-text");
      index++;
      if (index > 9) index = 1;
    }
  })();
});

export default function Main() {
  // const { handleSubmit, control } = useForm();
  // const onSubmit = data => {};

  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
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
          <nav className="text-right menu-bar" style={{ marginLeft: "auto" }}>
            <div className="flex justify-between items-center">
              <div className="cursor-pointer md:hidden" onClick={burgerMenu}>
                <svg
                  className="w-8 h-8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </div>
            </div>
            <ul className="hidden md:flex buttons">
              {headers.map((header: any, index: number) => (
                <li className="cursor-pointer" key={header.name + index}>
                  <div
                    className="corners button-class center-border"
                    onClick={(e: any) => smoothScroll(e.currentTarget)}
                  >
                    <a
                      className={"nav-link " + (index === 0 ? "active" : "")}
                      href={"#" + header.href}
                    >
                      {header.name}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </Toolbar>
        <div id="menu" className="bg-gray-100 shadow hidden">
          <ul className="p-2 buttons">
            {headers.map((header: any, index: number) => (
              <li
                className="pb-2 cursor-pointer m-auto"
                key={header.name + index}
                style={{ width: "fit-content" }}
              >
                <div
                  className="corners text-center button-class center-border"
                  style={{ width: "110px" }}
                >
                  <a
                    className={"nav-link " + (index === 0 ? "active" : "")}
                    href={"#" + header.href}
                  >
                    {header.name}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box my={2} className="mt-0 mb-0">
          <section id="about" className="introduction pb-10">
            <div className="grid sm:grid-cols-1 md:grid-cols-4">
              <div className="col-span-3 sm:mt-2 md:mt-14 relative">
                <div className="grid grid-cols-1">
                  <Fade left>
                    <div className="heading sm:hidden">Hi, I'm</div>
                    <div className="name sm:hidden sm:text-left">
                      Shahroz Allauddin
                    </div>
                    <div className="about sm:mb-3 mt-3">
                      A Senior Software Developer Manager with over 9+ years of experience in JavaScript, Node.js, Rust, and PHP frameworks. Currently leading AI-based applications with E2E testing at Gridizen. Passionate about team leadership, mentoring developers, and building innovative solutions using cutting-edge technologies including AI/ML, Angular, React, and modern development practices. Proven track record of delivering 30+ web applications from scratch and enhancing team productivity by 30% through streamlined processes and mentorship.
                    </div>
                  </Fade>

                  <div>
                    <Flash>
                      <button className="Typewriter sm:w-full sm:relative md:absolute cursor-pointer bottom-0 transform hover:-translate-y-1 transition">
                        {" "}
                        Available for Remote Job{" "}
                      </button>
                    </Flash>
                  </div>
                </div>
              </div>

              <div className="text-center md:mt-16 md:col-span-1 sm:order-first">
                <div className="grid grid-cols-1">
                  <div className="md:hidden name sm:text-justify">
                    Shahroz Allauddin
                  </div>
                  {/*<div>
                    <img
                      className="rounded-lg object-cover object-center m-auto sm:w-full lg:w-full md:h-96 lg:object-top"
                      src={require("./assets/img/profile3.jpg").default}
                      alt="profile"
                    />
                  </div>*/}
                  <div className="text-center mt-7 rounded-xl">
                    <Typewriter
                      options={{
                        strings: [
                          "Senior Software Developer Manager",
                          "AI/ML Engineer",
                          "Team Leader",
                          "Full Stack Developer",
                          "Tech Enthusiast",
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr />

          <section id="skills" className="skills">
            <div className="heading">
              <div className="rubber-band-animation">S</div>
              <div className="rubber-band-animation">k</div>
              <div className="rubber-band-animation">i</div>
              <div className="rubber-band-animation">l</div>
              <div className="rubber-band-animation">l</div>
              <div className="rubber-band-animation">s</div>
            </div>
            <div className="sub-heading">Top</div>
            <div className="grid sm:grid-cols-3 md:grid-cols-9 lg:grid-cols-9 sm:text-center">
              {topSkills.map((img: any, index: any) => (
                <div className="col-span-1 sm:mb-5" key={img.img + index}>
                  <figure className="item">
                    <img
                      src={require(`./assets/languages/${img.img}.png`).default}
                      alt={img.img}
                    />
                    <figcaption className="caption">{img.caption}</figcaption>
                  </figure>
                </div>
              ))}
            </div>
            <div className="sub-heading">Intermediate</div>
            <div className="grid sm:grid-cols-3 md:grid-cols-9 lg:grid-cols-9 sm:text-center">
              {skills.map((iSkills: any, index: any) => (
                <div className="col-span-1 sm:mb-5" key={iSkills.img + index}>
                  <figure className="item">
                    <img
                      src={
                        require(`./assets/languages/${iSkills.img}.png`).default
                      }
                      alt={iSkills.img}
                    />
                    <figcaption className="caption">
                      {iSkills.caption}
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
            <div className="sub-heading">AI & Machine Learning</div>
            <div className="grid sm:grid-cols-3 md:grid-cols-9 lg:grid-cols-9 sm:text-center">
              {aiSkills.map((aiSkill: any, index: any) => (
                <div className="col-span-1 sm:mb-5" key={aiSkill.img + index}>
                  <figure className="item">
                    <img
                      src={
                        require(`./assets/languages/${aiSkill.img}.png`).default
                      }
                      alt={aiSkill.img}
                    />
                    <figcaption className="caption">
                      {aiSkill.caption}
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
            <div className="sub-heading">Cloud & Infrastructure</div>
            <div className="grid sm:grid-cols-3 md:grid-cols-9 lg:grid-cols-9 sm:text-center">
              {cloudSkills.map((cloudSkill: any, index: any) => (
                <div className="col-span-1 sm:mb-5" key={cloudSkill.img + index}>
                  <figure className="item">
                    <img
                      src={
                        require(`./assets/languages/${cloudSkill.img}.png`).default
                      }
                      alt={cloudSkill.img}
                    />
                    <figcaption className="caption">
                      {cloudSkill.caption}
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
            <div className="sub-heading">CSS Frameworks</div>
            <div className="grid sm:grid-cols-3 md:grid-cols-9 lg:grid-cols-9 sm:text-center">
              {cssFrameworks.map((img: any, index: any) => (
                <div className="col-span-1 sm:mb-5" key={img.img + index}>
                  <figure className="item">
                    <img
                      src={require(`./assets/languages/${img.img}.png`).default}
                      alt={img.img}
                    />
                    <figcaption className="caption">{img.caption}</figcaption>
                  </figure>
                </div>
              ))}
            </div>

            <div className="sub-heading">Others</div>
            <div className="grid sm:grid-cols-3 md:grid-cols-9 lg:grid-cols-9 sm:text-center">
              {versionControlSystem.map((img: any, index: any) => (
                <div className="col-span-1 sm:mb-5" key={img.img + index}>
                  <figure className="item">
                    <img
                      src={require(`./assets/languages/${img.img}.png`).default}
                      alt={img.img}
                    />
                    <figcaption className="caption">{img.caption}</figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </section>

          <hr />

          <section id="resume" className="experience">
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 sm:text-center">
              <div className="col-span-1">
                <div className="heading text-left">
                  <div className="heading">
                    <div className="rubber-band-animation">E</div>
                    <div className="rubber-band-animation">x</div>
                    <div className="rubber-band-animation">p</div>
                    <div className="rubber-band-animation">e</div>
                    <div className="rubber-band-animation">r</div>
                    <div className="rubber-band-animation">i</div>
                    <div className="rubber-band-animation">e</div>
                    <div className="rubber-band-animation">n</div>
                    <div className="rubber-band-animation">c</div>
                    <div className="rubber-band-animation">e</div>
                  </div>
                </div>
                <Timeline className="timeline text-left">
                  {experience.map((exp: any, index: number) => (
                    <TimelineItem key={exp.position + index}>
                      <TimelineSeparator>
                        <TimelineDot>{<RadioButtonCheckedIcon />}</TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent className="transform hover:-translate-y-1.5 transition">
                        <Paper elevation={3} className={classes.paper}>
                          <Slide left>
                            <span className="text-2xl font-weight">
                              {exp.position}
                              {exp.companyName ? (
                                <span>
                                  at{" "}
                                  <a
                                    className="underline pl-0.5"
                                    target="_blank"
                                    rel="noreferrer"
                                    href={exp.link}
                                  >
                                    {exp.companyName}
                                  </a>{" "}
                                </span>
                              ) : null}
                            </span>
                            <Typography
                              variant="h6"
                              component="h6"
                              className="text-sm font-semibold theme-color pt-0.5"
                            >
                              {exp.jobType} | {exp.timeline}
                            </Typography>
                            {exp?.description && (
                              <Typography
                                align="justify"
                                className="font-weight pb-2 pt-2"
                              >
                                {" "}
                                {exp?.description}{" "}
                              </Typography>
                            )}

                            <div className="text-lg theme-color font-bold py-2">
                              Technologies, Skills, Libraries used
                            </div>
                            <Bounce left>
                              {exp.languages.map((lan: any, i: number) => (
                                <span
                                  key={lan + i}
                                  className="inline-block chips-bg-color chips-text-color rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                                >
                                  #{lan}
                                </span>
                              ))}
                            </Bounce>
                          </Slide>
                        </Paper>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </div>

              <div className="col-span-1">
                <div className="heading text-left">
                  <div className="heading">
                    <div className="rubber-band-animation">E</div>
                    <div className="rubber-band-animation">d</div>
                    <div className="rubber-band-animation">u</div>
                    <div className="rubber-band-animation">c</div>
                    <div className="rubber-band-animation">a</div>
                    <div className="rubber-band-animation">t</div>
                    <div className="rubber-band-animation">i</div>
                    <div className="rubber-band-animation">o</div>
                    <div className="rubber-band-animation">n</div>
                  </div>
                </div>
                <Slide bottom>
                  <Timeline className="timeline text-left">
                    {education.map((exp: any, index: any) => (
                      <TimelineItem key={exp.degree + index + (index + 4)}>
                        <TimelineSeparator>
                          <TimelineDot>
                            {<RadioButtonCheckedIcon />}
                          </TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent className="transform hover:-translate-y-1.5 transition">
                          <Paper elevation={3} className={classes.paper}>
                            <Slide right>
                              <Typography
                                variant="h5"
                                component="h5"
                                className="font-weight"
                              >
                                {exp.degree}
                              </Typography>
                              <Typography
                                variant="h6"
                                component="h6"
                                className="text-sm theme-color pt-0.5"
                              >
                                {exp.year}
                              </Typography>
                              <Typography
                                align="justify"
                                className="font-weight pt-2"
                              >
                                {" "}
                                {exp.from}{" "}
                              </Typography>
                            </Slide>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>
                    ))}
                  </Timeline>
                </Slide>
              </div>
            </div>
          </section>

          <hr />

          <section id="projects" className="projects hidden">
            <div className="heading pb-4">
              <div className="rubber-band-animation">R</div>
              <div className="rubber-band-animation">e</div>
              <div className="rubber-band-animation">c</div>
              <div className="rubber-band-animation">e</div>
              <div className="rubber-band-animation">n</div>
              <div className="rubber-band-animation">t&nbsp;</div>
              <div className="rubber-band-animation">P</div>
              <div className="rubber-band-animation">r</div>
              <div className="rubber-band-animation">o</div>
              <div className="rubber-band-animation">j</div>
              <div className="rubber-band-animation">e</div>
              <div className="rubber-band-animation">c</div>
              <div className="rubber-band-animation">t</div>
              <div className="rubber-band-animation">s</div>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-12 mb-10 hidden">
              {imageGallery.map((gallery: any, index: any) => (
                <div
                  key={gallery.name + index}
                  className="sm:col-span-1 md:col-span-4 md:p-3 sm:mb-4"
                >
                  <Paper
                    elevation={3}
                    className={classes.paper + " border-shadow h-full"}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <div className="project-name text-xl font-medium">
                        {gallery.name}
                      </div>
                      {/* <div>Associated with {gallery?.associated}</div> */}
                    </div>
                    {gallery.project.length > 0 && (
                      <ImageGallery
                        items={gallery.project}
                        lazyLoad={true}
                        showPlayButton={false}
                      />
                    )}
                    {/* <div className="project-name mt-2 mb-2 text-md lg:text-lg">
                      {gallery.description}
                    </div> */}
                  </Paper>
                </div>
              ))}
            </div>
          </section>

          <hr />

          <section id="contact" className="contact mb-10">
            <div className="heading pb-4">
              <div className="rubber-band-animation">C</div>
              <div className="rubber-band-animation">o</div>
              <div className="rubber-band-animation">n</div>
              <div className="rubber-band-animation">t</div>
              <div className="rubber-band-animation">a</div>
              <div className="rubber-band-animation">c</div>
              <div className="rubber-band-animation">t</div>
            </div>
            <div className="grid md:gap-4 sm:text-center sm:grid-cols-1 md:grid-cols-12">
              <div className="sm:col-span-12 md:col-span-4 contact-left-pane relative">
                <div className="text-xl font-bold text-white absolute top-1/3 sm:px-6 sm:py-2 md:px-20 py-4 text-start">
                  I'm currently taking on freelance work. If you are interested
                  in hiring me for your project please use one of these options
                  to get in touch
                </div>
                <img
                  className="responsive"
                  src={require("./assets/texture/texture3.jpg").default}
                  alt="texture"
                  style={{ height: "-webkit-fill-available" }}
                />
              </div>
              <div className="sm:col-span-12 md:col-span-8 contact-right-pane">
                <Paper elevation={3} className={classes.paper}>
                  <div className="top-margin">
                    <div className="grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-6 sm:text-center">
                      {contacts.map((contact: any, index: any) => (
                        <a
                          href={
                            contact.img === "gmail"
                              ? "mailto:smshahroz.allauddin@gmail.com"
                              : contact.link
                          }
                          target={contact.img !== "gmail" ? "_blank" : "_self"}
                          rel="noreferrer"
                          className="contact-link text-center cursor-pointer py-6 transform hover:-translate-y-2 transition border-shadow"
                          key={contact.img + index}
                          style={{
                            boxShadow:
                              "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
                          }}
                        >
                          <figure className="item">
                            <img
                              className="contact-img"
                              src={
                                require(`./assets/contact/${contact.img}.png`)
                                  .default
                              }
                              alt={contact.img}
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
          </section>

          <hr />

          <footer className="sm:text-md p-4 md:text-lg text-center font-bold">
            <span className="font-extrabold mr-1">&copy;</span>
            Shahroz Allauddin 2023 | All Rights Reserved!
          </footer>
        </Box>
      </Container>
      <ScrollTop>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon className="up-arrow" />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
