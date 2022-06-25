import { HiOutlineCode } from "react-icons/hi";
import { BsPaletteFill } from "react-icons/bs";

export const members = [
  {
    name: "Hussein Hassan",
    role: "Founder | Creative Web Developer",
    bio: "Creative Web Developer | 3D Graphics & Animations enthusiast | He enjoys coding with an artistic purpose.",
    image: "/team/hussein.jpg",
    facebookUrl: "https://www.facebook.com/profile.php?id=100062471768466",
    instagramUrl: "https://www.instagram.com/husseinhassan.me/",
    linkedinUrl: "https://www.linkedin.com/in/hussein-hassan-2b2a921a2/",
  },
  {
    name: "Mohamad Nouredeen",
    role: "Co-Founder | UI/UX Designer",
    bio: "UI/UX Expert | Illustrations enthusiast | While he is sleeping, his dreams are a piece of art.",
    image: "/team/jwd.png",
    facebookUrl: "https://www.facebook.com/mohammad.jawadnouredine.7",
    instagramUrl: "https://www.instagram.com/jawad.n2022/",
    linkedinUrl: "https://www.linkedin.com/in/mohammad-nouredine-059a0a242/",
  },
  {
    name: "Abed Al-Hussein Saade",
    role: "Co-Founder | Full-Stack Developer",
    bio: "Full-Stack Web Developer | JavaScript Expert | React & Nodejs enthusiast | He eats JavaScript on breakfast.",
    image: "/team/abed.jpg",
    facebookUrl: "https://www.facebook.com/profile.php?id=100009450997072",
    instagramUrl: "https://www.instagram.com/abedalhussain_saade/",
    linkedinUrl: "https://www.linkedin.com/in/abed-saade/",
  },
];

export const feedbacks = [
  {
    name: "Hussein Shoaib",
    comp: "Window Design",
    img: "/clients/hussein.jpg",
    text: 'It was great, comfortable, and fruitful to work with "Telickers". The various skills I observed makes this team highly recommended for every single business to go online.',
  },
  {
    name: "Sadek Ali Abbass",
    comp: "A2solution",
    img: "/clients/a2solution.svg",
    text: 'It was great, comfortable, and fruitful to work with "Telickers". The various skills I observed makes this team highly recommended for every single business to go online.',
  },
  {
    name: "Hussein Darwish",
    comp: "Deebee Shop",
    img: "/clients/hussein.jpg",
    text: 'It was great, comfortable, and fruitful to work with "Telickers". The various skills I observed makes this team highly recommended for every single business to go online.',
  },
  {
    name: "Mohamad El Elota",
    comp: "Elotarz Media",
    img: "/clients/elota.jpg",
    text: "Working with Telickers was more than perfect, they were professional, quick and reliable. They gave me helpful tips and developed my website in the best way that serves my business.",
  },
];

export const services = [
  {
    title: "UI / UX Design",
    imageSrc: "/general/design-service.jpg",
    caption: "People ignore design that ignores people",
    Icon: <BsPaletteFill size={65} />,
    desc: "Beautiful, memorable, and user-friendly interfaces that are as unique as your brand.",
    details: [
      "User interface design.",
      "User experience design.",
      "Web & Mobile App design.",
      "Creating wireframes & prototypes.",
      "Analyzing & fixing poor interfaces.",
      "Creating animations and graphics.",
    ],
  },
  {
    title: "Web Development",
    imageSrc: "/general/web-service.png",
    caption: "We Cover All Your Web Needs",
    Icon: <HiOutlineCode size={65} />,
    desc: "Fully custom web applications for an intuitive and immersive user experience.",
    details: [
      "Landing pages & portfolios.",
      "Blogs for content creators.",
      "E-commerce online stores.",
      "3D animated websites.",
      "Content management systems.",
      "Customers management systems.",
      "Registering domain names.",
      "Improving bad websites.",
    ],
  },
];

export const work = [
  {
    name: "Management System",
    featured: false,
    description:
      "Orders management system for a wholesale industry. The app aimed to improve the workflow of the workers by letin them take orders on their ipads and manage each order's status.",
    imageSrc: "/projects/metro/metro-project.png",
  },
  {
    name: "A2Solution",
    featured: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum, perspiciatis fugiat maxime quae facilis nisi ut recusandae provident ea!",
    imageSrc: "/projects/a2solution/a2solution-project.png",
    link: "https://a2solution.ca",
  },
  {
    name: "Elotarz Media",
    featured: true,
    description:
      "The project was built in bad way that led to very slow loading, poor animations which caused low traffic. So we built the site with blazing fast technologies which improved the site dramatically!",
    imageSrc: "/projects/elota/elota-project.png",
    link: "https://elotarzmedia.net",
  },
  {
    name: "Deebee",
    featured: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum, perspiciatis fugiat maxime quae facilis nisi ut recusandae provident ea!",
    imageSrc: "/projects/deebee/deebee-project.png",
    link: "https://deebee.shop",
  },
  {
    name: "Window Design",
    featured: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum, perspiciatis fugiat maxime quae facilis nisi ut recusandae provident ea!",
    imageSrc: "/projects/window/window-project.png",
    link: "https://window-design.vercel.app",
  },
  {
    name: "Invoice Builder",
    featured: false,
    description:
      "A tool for a car wash garage for generating invoices in PDF format.",
    imageSrc: "/projects/invoice/invoice-project.png",
  },
];
