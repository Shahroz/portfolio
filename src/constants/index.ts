import { Skill, Contact, Experience, Project } from '../types';

export const TOP_SKILLS: Skill[] = [
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

export const SKILLS: Skill[] = [
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

export const AI_SKILLS: Skill[] = [
  { img: "python", caption: "Python" },
  { img: "rust", caption: "Rust" },
  { img: "openai", caption: "OpenAI" },
  { img: "langchain", caption: "LangChain" },
  { img: "gemini", caption: "Google Gemini" },
];

export const CLOUD_SKILLS: Skill[] = [
  { img: "google-cloud-storage", caption: "Google Cloud Storage" },
  { img: "google-cloud-run", caption: "Google Cloud Run" },
  { img: "aws-s3", caption: "AWS S3" },
  { img: "aws-lambda", caption: "AWS Lambda" },
  { img: "aws-ec2", caption: "AWS EC2" },
  { img: "aws-cloudformation", caption: "AWS CloudFormation" },
  { img: "aws-control-tower", caption: "AWS Control Tower" },
  { img: "nano-banana", caption: "Nano Banana" },
];

export const CSS_FRAMEWORKS: Skill[] = [
  { img: "shadcn", caption: "shadcn/ui" },
  { img: "tailwind", caption: "Tailwind UI" },
  { img: "bootstrap", caption: "Bootstrap" },
  { img: "angular-material", caption: "Angular Material Design" },
  { img: "mdb", caption: "MDB" },
];

export const VERSION_CONTROL_SYSTEM: Skill[] = [
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

export const CONTACTS: Contact[] = [
  { img: "linkedin", link: "https://www.linkedin.com/in/shahroz-allauddin-a268b57a/", alt: "LinkedIn" },
  { img: "github", link: "https://github.com/Shahroz", alt: "GitHub" },
  { img: "stackoverflow", link: "https://stackoverflow.com/users/10420167/shahroz-allauddin", alt: "Stack Overflow" },
  { img: "gmail", link: "mailto:shahroz.allauddin@gmail.com", alt: "Gmail" },
  { img: "skype", link: "skype:shahroz.allauddin?chat", alt: "Skype" },
  { img: "twitter", link: "https://twitter.com/shahroz_allaudd", alt: "Twitter" },
  { img: "instagram", link: "https://www.instagram.com/shahroz_allauddin/", alt: "Instagram" },
];

export const EXPERIENCES: Experience[] = [
  {
    position: "Senior Full Stack Developer",
    company: "Gridizen",
    duration: "2022 - Present",
    description: "Leading development of web and mobile applications using modern technologies. Specializing in AI integration and cloud solutions.",
    technologies: ["React", "Angular", "Node.js", "Python", "AWS", "Google Cloud"]
  },
  {
    position: "Front End Supervisor",
    company: "IdeatoLife",
    duration: "2019 - 2022",
    description: "Supervised front-end development team and led multiple projects using Angular, React, and modern web technologies.",
    technologies: ["Angular", "React", "TypeScript", "Node.js", "MongoDB"]
  },
  {
    position: "Full Stack Developer",
    company: "Freelance",
    duration: "2016 - 2019",
    description: "Developed various web applications and provided technical consulting services to multiple clients.",
    technologies: ["PHP", "Laravel", "JavaScript", "MySQL", "WordPress"]
  }
];

export const PROJECTS: Project[] = [
  {
    name: "AI-Powered Portfolio",
    description: "Modern portfolio with AI integration",
    images: ["/src/assets/img/profile3.jpg"],
    associated: "Personal Project"
  },
  {
    name: "E-commerce Platform",
    description: "Full-stack e-commerce solution",
    images: ["/src/assets/img/profile3.jpg"],
    associated: "Client Project"
  }
];
