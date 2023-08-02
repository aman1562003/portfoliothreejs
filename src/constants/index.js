import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    trip,
    ecommerce,
    threejs,
    search,
    webflow,
    webflowlogo,
    github,
    Django,
    sqlite,
    java,
    python,
    mysql,
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: " JAVA / Data Structure ",
      icon: mobile,
    },
    
    {
      title: "Python / Django Developer",
      icon: backend,
    },
    {
      title: "Photographer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Django",
      icon: Django,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "SQLite",
      icon: sqlite,
    },
    {
      name: "mysql",
      icon: mysql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: github,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "webflow",
      icon: webflowlogo,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Ecommerce",
      iconBg: "#383E56",
      description:
        "Web-based platform that facilitates electronic commerce, enabling users to advertise and sell products to customers, while customers can conveniently purchase products from sellers. This platform offers a seamless and efficient marketplace for buying and selling goods online.",
      tags: [
        {
          name: "Django",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "white-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
        {
          name: "SQLite",
          color: "blue-text-gradient",
        },
      ],
      image: ecommerce,
      linklogo:github,
      source_code_link: "https://github.com/aman1562003",
    },
    {
      name: "Trip mangement",
      iconBg: "#E6DEDD",
      description:
        "A comprehensive travel booking and tracking platform that allows users to book restaurants, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "white-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
        {
          name: "MySQL",
          color: "blue-text-gradient",
        },
      ],
      image: trip,
      linklogo:github,
      source_code_link: "https://github.com/aman1562003",
    },
    {
      name: "Search fuction with Django",
      iconBg: "#383E56",
      description:
        "The application's purpose is to enable users to search for dishes based on their names and receive recommendations for the best matches. Whether you are looking for a specific dish or simply seeking culinary inspiration, the Dish Recommender has got you covered.",
      tags: [
        {
          name: "Django",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "SQLite",
          color: "pink-text-gradient",
        },
      ],
      image: search,
      linklogo:github,
      source_code_link: "https://github.com/aman1562003",
    },
    {
      name: "Web Design: Unleashing Creativity on Webflow's Canvas.",
      iconBg: "#383E56",
      description:
        "This web design is crafted for a designing company using Webflow.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Webflow",
          color: "pink-text-gradient",
        },
      ],
      image: webflow,
      linklogo:webflowlogo,
      source_code_link: "https://new-one-1e5dda.webflow.io/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };