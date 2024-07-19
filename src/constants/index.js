import {
  mobile,
  backend,
  creator,
  web,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  docker,
  carrent,
  jobit,
  tripguide,
  cloudtek,
  aksaSds,
  deltaShoppe,
  fidelityIcon,
  lockin,
  java,
  angular,
  laravel,
  nextjs,
  postgresql,
  git,
  mysimplerx,
  vars,
  flexigolf,
  chotok,
  portfolio,
  ugap,
  edfry,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },

  {
    id: "Blogs",
    title: "Blogs",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Front-end Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "NextJs",
    icon: nextjs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "git",
    icon: git,
  },
];

const testimonials = [
  //   {
  //     testimonial:
  //       "Behlole is a web-app wizard, he made sure to deliver on time. Will be looking forward to hiring him again. Impressed with is grip on the technicalities involved in the dev-stack he is working in.",
  //     name: "Areeb Ali",
  //     designation: "Client",
  //     company: "Fiver",
  //     image: "https://randomuser.me/api/portraits/men/1.jpg",
  //   },
  //   {
  //     testimonial: "Proactive and Professional way of working, Good seller",
  //     name: "DeHypto",
  //     designation: "Client",
  //     company: "Fiverp",
  //     image: "https://randomuser.me/api/portraits/men/2.jpg",
  //   },
  //   {
  //     testimonial:
  //       "Very fast and excellent delivery, enjoyed working with him, It's a pleasure working with him highly recommended.",
  //     name: "SleeHom",
  //     designation: "Client",
  //     company: "Fiver",
  //     image: "https://randomuser.me/api/portraits/men/3.jpg",
  //   },
  //   {
  //     testimonial:
  //       "Very perfect, made the right choice working with him, Thanks for the Good work, Highly recommended",
  //     name: "Lerthert",
  //     designation: "Client",
  //     company: "Fiver",
  //     image: "https://randomuser.me/api/portraits/men/4.jpg",
  //   },
  //   {
  //     testimonial: "work was well done",
  //     name: "bless7",
  //     designation: "Client",
  //     company: "Fiver",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial: "good job. proper work.",
  //     name: "tjdavis",
  //     designation: "Client",
  //     company: "Fiver",
  //     image: "https://randomuser.me/api/portraits/men/6.jpg",
  //   },
  //   {
  //     testimonial:
  //       "Amazing delivery and before time ! Kind, friendly and helpful. Would order again. Thank you :)",
  //     name: "secretdoctor",
  //     designation: "Client",
  //     company: "Fiver",
  //     image: "https://randomuser.me/api/portraits/men/7.jpg",
  //   },
  //   {
  //     testimonial: "amazing work, give a try to this seller",
  //     name: "mrhazwansalam",
  //     designation: "Client",
  //     company: "Fiver",
  //     image: "https://randomuser.me/api/portraits/men/8.jpg",
  //   },
  //   {
  //     testimonial:
  //       "make my 3rd order with him, he is so friendly..... mostly recommended",
  //     name: "mrhazwansalam",
  //     designation: "Client",
  //     company: "Fiver",
  //     image: "https://randomuser.me/api/portraits/men/8.jpg",
  //   },
  //   {
  //     testimonial:
  //       "ordered with him 2nd time.....this guy is amazing in every aspect",
  //     name: "mrhazwansalam",
  //     designation: "Client",
  //     company: "Fiver",
  //     image: "https://randomuser.me/api/portraits/men/8.jpg",
  //   },
  //   {
  //     testimonial:
  //       "Just tell him the complete requirements and the guy is good to go! I've ordered a Theme Integration of Angular and delivery was fine enough.",
  //     name: "usamaabrar22",
  //     designation: "Client",
  //     company: "Fiver",
  //     image: "https://randomuser.me/api/portraits/men/9.jpg",
  //   },
  //   {
  //     testimonial:
  //       "It was a wonderful experience.. Me as a freelancer would recommend Mr Behlole. My work done before time and Also beautiful way of conversation.. Shall give him order soon.",
  //     name: "Ali Imam",
  //     designation: "Client",
  //     company: "Fiver",
  //     image: "https://randomuser.me/api/portraits/men/10.jpg",
  //   },
];

const experiences = [
  {
    title: "Co-Founder & Developer",
    company_name: "LockedIn",
    icon: lockin,
    date: "Jan 2024 - Current",
    points: [
      "Co-founded and played a pivotal role in a startup company, leading development efforts to build a full-stack application",
      "Utilized React Native, Firebase, and Node.js to architect and develop a dynamic and responsive cross-platform mobile application.",
      "Spearheaded the creation of a launch website hosted on Vercel, ensuring a seamless user experience and effective brand representation.",
      "Implemented Continuous Integration/Continuous Deployment (CI/CD) pipelines using GitHub Actions, automating the deployment process and enhancing development workflow efficiency",
      "Orchestrated the deployment of the application to an Amazon EC2 instance, optimizing server infrastructure for scalability and performance",
      "Managed the entire development lifecycle, from building the application in React Native to iOS deployment via TestFlight, ensuring compatibility and functionality across platform",
      "Established a robust Zero Trust network using Cloudflare for an on-premise server hosting the backend and administrative website, prioritizing security and access control meas",
    ],
  },

  {
    title: "Full-Stack Software Engineer Intern",
    company_name: "Fidelity Investments",
    icon: fidelityIcon,
    date: "Jun 2023 - Aug 2023",
    points: [
      "Developed and delivered high-priority features and bug fixes for an internal stock website using Agile methodologies.",
      "Ensured rigorous testing of pull requests, maintained code quality, and collaborated closely with the team.",
      "Tested other developers' code in a testing environment before production deployment.",
    ],
  },
  {
    title: "Full-Stack Software Engineer Intern",
    company_name: "Fidelity Investments",
    icon: fidelityIcon,
    date: "Jun 2022 - Aug 2022",
    points: [
      "Joined a SCRUM team, participated in ceremonies, and developed an Angular component to display DynamoDB data.",
      "Integrated Angular components with a Spring Boot microservice to manage DynamoDB data.",
    ],
  },
];

const projects = [
  {
    name: "LocalLeaf for HackNC",
    description:
      "Developed a blockchain-based loyalty coin system to encourage local spending, which won second place at HackNC.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Flask", color: "red-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Blockchain", color: "pink-text-gradient" },
    ],
    image: mysimplerx,
    source_code_link: "https://github.com/localleaf",
  },
  {
    name: "Feather.js",
    description:
      "Created Nimble.js, a JavaScript templating library for dynamically injecting content into HTML pages.",
    tags: [
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "Java", color: "red-text-gradient" },
    ],
    image: mysimplerx,
    source_code_link: "https://github.com/featherjs",
  },
  {
    name: "EatsQuest",
    description:
      "Developed a mobile application to help users discover nearby restaurants based on their preferences.",
    tags: [
      { name: "Flutter", color: "blue-text-gradient" },
      { name: "Java", color: "red-text-gradient" },
      { name: "Spring Boot", color: "green-text-gradient" },
      { name: "Google Places API", color: "pink-text-gradient" },
    ],
    image: mysimplerx,
    source_code_link: "https://github.com/eatsquest",
  },
];

export { services, technologies, experiences, testimonials, projects };
