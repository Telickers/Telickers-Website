import { HiOutlineCode } from "react-icons/hi";
import { BsPaletteFill } from "react-icons/bs";

export const members = [
  {
    name: "Hussein Hassan",
    role: "Founder | Creative Web Developer",
    bio: "Creative Web Developer | 3D Websites & Animations enthusiast | He enjoys coding with an artistic purpose.",
    image: "/team/hussein.jfif",
    facebookUrl: "https://www.facebook.com/profile.php?id=100062471768466",
    instagramUrl: "https://www.instagram.com/developer_husn_hsn/",
    linkedinUrl: "https://www.linkedin.com/in/hussein-hassan-2b2a921a2/",
  },
  {
    name: "Mohamad Nouredeen",
    role: "Co-Founder | UI/UX Designer",
    bio: "UI/UX Expert | Illustrations enthusiast | While he is sleeping, his dreams are a piece of art.",
    image: "/team/jawad.png",
    facebookUrl: "https://www.facebook.com/mohammad.jawadnouredine.7",
    instagramUrl: "https://www.instagram.com/jawad.n2022/",
    linkedinUrl: "https://www.linkedin.com/in/mohammad-nouredine-059a0a242/",
  },
  {
    name: "Abed Al-Hussein Saade",
    role: "Co-Founder | Full-Stack Developer",
    bio: "Full-Stack Web Developer | JavaScript Expert | React & Nodejs enthusiast | He eats JavaScript for breakfast.",
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
    caption: "People ignore design that ignores them",
    Icon: <BsPaletteFill size={65} />,
    desc: "Beautiful, memorable, and user-friendly interfaces that are as unique as your brand.",
    details: [
      "Designing modern look web user interfaces.",
      "Testing & analyzing user experience design.",
      "Creating wireframes & Low-Fidelity prototypes.",
      "Designing animations and 3D graphics.",
      "Responsive web design.",
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
      "E-commerce online stores.",
      "Blogs and showcase websites for content creators.",
      "Dashboards and business management systems.",
      "Payment Gateways Setup (Credit card & PayPal).",
      "Rebuilding & Improving bad websites.",
      "Hosting simple & complex web apps.",
    ],
  },
];

export const work = [
  {
    name: "Al Amir Menu",
    featured: true,
    imageSrc: "/projects/Menu.png",
    link: "https://al-amir-menu.telickers.net",
  },
  {
    name: "Deebee",
    featured: true,
    imageSrc: "/projects/deebee/deebee-project.png",
    link: "https://deebee.shop",
  },
];
