export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Mock Meal Planning Webapp/Database',
    desc: 'Co-developed a full-stack web app with mock data to enable meal planning with dietary and cost constraints, improving decision-making for budget-conscious users.',
    subdesc: 'Designed and implemented secure SQLAlchemy/MySQL queries to handle user meal preferences and constraints, ensuring reliable data storage and fast retrieval for dynamic filtering.',
    href: '', // add link if you have one
    tags: [
      { id: 1, name: 'React', path: '' },
      { id: 2, name: 'Python', path: '' },
      { id: 3, name: 'JavaScript', path: '' },
      { id: 4, name: 'MySQL', path: '' },
      { id: 5, name: 'Git', path: '' },
    ],
  },
  {
    title: 'Browser Based Chip-8 Emulator',
    desc: 'Implemented 35 opcodes that display to HTML5 Canvas to play retro games like Pong and Snake.',
    subdesc: 'Designed a responsive UI with adjustable emulation speed and RGB color sliders, improving user experience through customization.',
    href: '',
    tags: [
      { id: 1, name: 'HTML', path: '' },
      { id: 2, name: 'CSS', path: '' },
      { id: 3, name: 'JavaScript', path: '' },
      { id: 4, name: 'npm', path: '' },
      { id: 5, name: 'Webpack', path: '' },
    ],
  },
  {
    title: 'Procedural Terrain Simulator',
    desc: 'Developed a real-time procedural terrain generation simulator using WebGL and GLSL shaders, enabling dynamic and visually rich 3D landscapes.',
    subdesc: 'Implemented a flight-style camera system for smooth navigation and exploration of the generated terrain, enhancing user interaction and immersion.',
    href: '',
    tags: [
      { id: 1, name: 'WebGL', path: '' },
      { id: 2, name: 'JavaScript', path: '' },
      { id: 3, name: 'GLSL', path: '' },
    ],
  },
  {
    title: 'RISC-V Out-of-Order Processor',
    desc: 'Designed a high-performance out-of-order RISC-V processor with branch prediction and caching, increasing throughput by reducing stalls.',
    subdesc: 'Validated processor modules with comprehensive testbenches, ensuring reliable instruction execution.',
    href: '',
    tags: [
      { id: 1, name: 'SystemVerilog', path: '' },
      { id: 2, name: 'Hardware Verification', path: '' },
      { id: 3, name: 'FPGA', path: '' },
    ],
  },
  {
    title: 'Linux Operating System',
    desc: 'Developed a Linux-based OS from scratch in x86 assembly and C, providing paging and scheduling functionalities.',
    subdesc: 'Created a user interface supporting core OS features, facilitating process and memory management.',
    href: '',
    tags: [
      { id: 1, name: 'C', path: '' },
      { id: 2, name: 'x86', path: '' },
      { id: 3, name: 'Linux/Unix', path: '' },
      { id: 4, name: 'gdb', path: '' },
      { id: 5, name: 'git', path: '' },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 1.25 : isMobile ? 1.5 : isTablet ? 2: 2.5,
    deskPosition: isSmall ? [0,0,0] : isMobile ? [0, 0, 0] : isTablet? [0,-2,0] : [0, -2, 0],
    cubePosition: isSmall ? [4, -2, 0] : isMobile ? [5, -2.5, 0] : isTablet ? [8, -5.5, 0] : [11, -7.5, 0],
    cubeScale: isSmall ? 0.4 : isMobile ? 0.5 : isTablet ? 0.7: 1,
    reactLogoPosition: isSmall ? [4, 6, 0] : isMobile ? [5, 7, 0] : isTablet ? [10.5, 6, 0] : [15, 7.5, 0],
    logoScale: isSmall ? 0.3 : isMobile ? 0.4 : isTablet ? 0.5: 0.65,
    ringPosition: isSmall ? [-4, 6, 0] : isMobile ? [-5.5, 7, 0] : isTablet ? [-10.5, 5, 0] : [-15, 7, 0],
    ringScale: isSmall ? 0.3 : isMobile ? 0.4 : isTablet ? 0.5: 0.6,
    targetPosition: isSmall ? [-4, -3, 0] : isMobile ? [-5, -4, 0] : isTablet ? [-8, -7, 0] : [-11, -9, 0],
    targetScale: isSmall ? 0.6 : isMobile ? 0.75 : isTablet ? 1: 1.5,
   
    
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'University of Illinois Urbana-Champaign',
    pos: "Bachelor of Science in Computer Engineering",
    duration: '2023 - 2025',
    title:
      "Relevant Coursework:\n" +
      "- Database Systems\n" +
      "- Computer Organization and Design\n" +
      "- Applied Parallel Programming",
    icon: '/assets/uiuc.png',
    animation: 'graduation',
  },
  {
    id: 2,
    name: '',
    pos: '',
    duration: '2021 - 2023',
    title:
      "Relevant Coursework:\n" +
      "- Data Structures\n" +
      "- Interactive Computer Graphics\n" +
      "- Artificial Intelligence\n" +
      "- Computer System Engineering",
    icon: '/assets/uiuc.png',
    animation: 'graduation',
  },
  {
    id: 3,
    name: 'Stater Bros. Markets',
    pos: 'Courtesy Clerk',
    duration: 'Aug 2020 - Oct 2020',
    title: "As a courtesy clerk I provided excellent customer service by assisting with bagging, stocking shelves, and retrieving shopping carts to ensure a smooth shopping experience.",
    icon: '/assets/staterbros.png', // you can replace this with the correct icon path
    animation: 'basket', // you can choose an animation that fits retail or service work
  },
];