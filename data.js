import { HiOutlineCode } from "react-icons/hi";
import { BsPaletteFill } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { SiMinds } from "react-icons/si";

export const members = [
  {
    name: "Hussein Hassan",
    role: "Founder | Creative Developer",
    bio: "Creative Developer | Software Consultant | 3D Illustrations & Animations enthusiast | He enjoys combining art with code.",
    image: "/team/hussein.jpg",
    facebookUrl: "https://www.facebook.com/profile.php?id=100062471768466",
    instagramUrl: "https://www.instagram.com/husseinhassan.me/",
    linkedinUrl: "https://www.linkedin.com/in/hussein-hassan-2b2a921a2/",
  },
  {
    name: "Mohamad Nouredeen",
    role: "Co-Founder | UI/UX Designer",
    bio: "UI/UX Expert | Illustrations enthusiast | Professional Python Developer | Teaching people is his niche.",
    image: "/team/jwd.png",
    facebookUrl: "https://www.facebook.com/mohammad.jawadnouredine.7",
    instagramUrl: "https://www.instagram.com/jawad.n2022/",
    linkedinUrl: "https://www.linkedin.com/in/mohammad-nouredine-059a0a242/",
  },
  {
    name: "Abed Al-Hussein Saade",
    role: "Co-Founder | Full-Stack Developer",
    bio: "Full-Stack Developer | JavaScript Expert | React & Nodejs enthusiast | His passion lies in educating people.",
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
    text: "It was great, comfortable, and fruitful to work with \"Telickers\". The various skills I observed makes this team highly recommended for every single business to go online.",
  },
   {
    name: "Sadek Ali Abbass",
    comp: "A2solution",
    img: "/clients/hussein.jpg",
    text: "It was great, comfortable, and fruitful to work with \"Telickers\". The various skills I observed makes this team highly recommended for every single business to go online.",
  }, {
    name: "Hussein Darwish",
    comp: "Deebee Shop",
    img: "/clients/hussein.jpg",
    text: "It was great, comfortable, and fruitful to work with \"Telickers\". The various skills I observed makes this team highly recommended for every single business to go online.",
  }, {
    name: "Mohamad El Elota",
    comp: "Elotarz Media",
    img: "/clients/hussein.jpg",
    text: "It was great, comfortable, and fruitful to work with \"Telickers\". The various skills I observed makes this team highly recommended for every single business to go online.",
  },
];

export const services = [
  {
    title: "UI / UX Design",
    imageSrc: "/general/design-service.jpg",
    caption: "People ignore design that ignores people",
    Icon: <BsPaletteFill size={65} />,
    desc: [
      "User experience design.",
      "Flyer, Menu, Logo Design.",
      "Web & Mobile App design.",
    ],
    details: [
      "User experience design.",
      "Flyer, Menu, Logo Design.",
      "Web & Mobile App design.",
      "Banner & Brochure Design.",
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
    desc: [
      "Personal websites & Blogs.",
      "E-commerce Online Stores.",
      "Dashboards and Management systems.",
    ],
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
  {
    title: "Tutoring",
    imageSrc: "/general/tutoring-service.jpg",
    caption: "We Know How To Make Learning Easy",
    Icon: <FaChalkboardTeacher size={65} />,
    desc: [
      "Giving private sessions.",
      "Teaching newbies get into programming.",
      "Helping with university courses and projects.",
    ],
    details: [
      "Teaching newbies get into programming.",
      "Teaching programming fundamentals.",
      "Private sessions in various technologies.",
      "Helping with university courses and projects.",
      "Giving advises in choosing the right learning path.",
      "Giving workshops & lectures.",
      "Teaching advanced programming principles.",
    ],
  },
  {
    title: "Software Consulting",
    imageSrc: "/general/consulting-service.jpg",
    caption: "The Essence Of Strategy Is Choosing What Not To Do.",
    Icon: <SiMinds size={65} />,
    desc: [
      "Improving your exiting software.",
      "Giving advises regarding software use.",
      "Guiding you to find the best software solutions.",
    ],
    details: [
      "Improving your exiting software.",
      "Giving advises regarding software use.",
      "Guiding you to find the best software solutions.",
      "Private consulting sessions.",
      "Customize software systems.",
      "Assessing the technological needs of a company.",
      "Set up online software tools.",
    ],
  },
];

export const work = [
  {
    name: "Management System",
    featured: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum, perspiciatis fugiat maxime quae facilis nisi ut recusandae provident ea!",
    imageSrc: "/projects/metro/metro-project.png",
    details: [
      {
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum, perspiciatis fugiat maxime quae facilis nisi ut recusandae provident ea!",
        imageSrc: "/projects/metro/metro-dashboard.png",
      },
      {
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum, perspiciatis fugiat maxime quae facilis nisi ut recusandae provident ea!",
        imageSrc: "/projects/metro/metro-orders.png",
      },
      {
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum, perspiciatis fugiat maxime quae facilis nisi ut recusandae provident ea!",
        imageSrc: "/projects/metro/metro-addOrder.png",
      },
      {
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum, perspiciatis fugiat maxime quae facilis nisi ut recusandae provident ea!",
        imageSrc: "/projects/metro/metro-products.png",
      },
      {
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum, perspiciatis fugiat maxime quae facilis nisi ut recusandae provident ea!",
        imageSrc: "/projects/metro/metro-deliveryLines.png",
      },
    ],
  },
  {
    name: "A2Solution",
    featured: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum, perspiciatis fugiat maxime quae facilis nisi ut recusandae provident ea!",
    imageSrc: "/projects/a2solution/a2solution-project.png",
    link: "https://a2solution.ca",
    details: [
      {
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum, perspiciatis fugiat maxime quae facilis nisi ut recusandae provident ea!",
        imageSrc: "/projects/a2solution/a2solution-about.png",
      },
      {
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum, perspiciatis fugiat maxime quae facilis nisi ut recusandae provident ea!",
        imageSrc: "/projects/a2solution/a2solution-services.png",
      },
      {
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum, perspiciatis fugiat maxime quae facilis nisi ut recusandae provident ea!",
        imageSrc: "/projects/a2solution/a2solution-contact.png",
      },
    ],
  },
  {
    name: "Elotarz Media",
    featured: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum, perspiciatis fugiat maxime quae facilis nisi ut recusandae provident ea!",
    imageSrc: "/projects/elota/elota-project.png",
    link: "https://elotarzmedia.net",
    details: [
      {
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum, perspiciatis fugiat maxime quae facilis nisi ut recusandae provident ea!",
        imageSrc: "/projects/elota/elota-packages.png",
      },
      {
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum, perspiciatis fugiat maxime quae facilis nisi ut recusandae provident ea!",
        imageSrc: "/projects/elota/elota-clients.png",
      },
      {
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum, perspiciatis fugiat maxime quae facilis nisi ut recusandae provident ea!",
        imageSrc: "/projects/elota/elota-contact.png",
      },
    ],
  },
  {
    name: "Deebee",
    featured: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum, perspiciatis fugiat maxime quae facilis nisi ut recusandae provident ea!",
    imageSrc: "/projects/deebee/deebee-project.png",
    link: "https://deebee.shop",
    details: [
      {
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum, perspiciatis fugiat maxime quae facilis nisi ut recusandae provident ea!",
        imageSrc: "/projects/deebee/deebee-project.png",
      },
      {
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum, perspiciatis fugiat maxime quae facilis nisi ut recusandae provident ea!",
        imageSrc: "/projects/deebee/deebee-products.png",
      },
      {
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum, perspiciatis fugiat maxime quae facilis nisi ut recusandae provident ea!",
        imageSrc: "/projects/deebee/deebee-shop.png",
      },
    ],
  },
  {
    name: "Window Design",
    featured: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum, perspiciatis fugiat maxime quae facilis nisi ut recusandae provident ea!",
    imageSrc: "/projects/window/window-project.png",
    link: "https://window-design.vercel.app",
    details: [
      {
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum, perspiciatis fugiat maxime quae facilis nisi ut recusandae provident ea!",
        imageSrc: "/projects/window/window-services.png",
      },
      {
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum, perspiciatis fugiat maxime quae facilis nisi ut recusandae provident ea!",
        imageSrc: "/projects/window/window-work.png",
      },
      {
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum, perspiciatis fugiat maxime quae facilis nisi ut recusandae provident ea!",
        imageSrc: "/projects/window/window-contact.png",
      },
    ],
  },
  {
    name: "Invoice Builder",
    featured: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum, perspiciatis fugiat maxime quae facilis nisi ut recusandae provident ea!",
    imageSrc: "/projects/invoice/invoice-project.png",
    details: [
      {
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum, perspiciatis fugiat maxime quae facilis nisi ut recusandae provident ea!",
        imageSrc: "/projects/invoice/invoice-project.png",
      },
      {
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum, perspiciatis fugiat maxime quae facilis nisi ut recusandae provident ea!",
        imageSrc: "/projects/invoice/invoice-bottom.png",
      },
      {
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum, perspiciatis fugiat maxime quae facilis nisi ut recusandae provident ea!",
        imageSrc: "/projects/invoice/invoice-pdf.png",
      },
    ],
  },
];
