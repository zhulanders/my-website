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
    id:4,
    name: 'Experience',
    href: '#experience',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'Mock Meal Planning Webapp',
    image: 'assets/meal.png',
    desc: 'With other students, I co-developed an application with mock data to help a user plan meals!',

    github: 'https://github.com/zhulanders/meal-plan-app', // add link if you have one
    tags: [
      { id: 1, name: 'React', path: 'assets/react.svg' },
      { id: 2, name: 'Python', path: 'assets/python.svg' },
      { id: 3, name: 'JavaScript', path: 'assets/js.svg' },
      { id: 4, name: 'MySQL', path: 'assets/sql.png' },
      { id: 5, name: 'Tailwind', path: 'assets/tailwindcss.png' }
    ],
  },
  {
    title: 'Browser Based Chip-8 Emulator',
    image: 'assets/chip8.png',
    desc: 'This is a fully functional emulator that runs roms directly in the browser! ',
    github: 'https://github.com/zhulanders/chip-8',
    tags: [
      { id: 1, name: 'HTML', path: 'assets/html.svg' },
      { id: 2, name: 'CSS', path: 'assets/css.svg' },
      { id: 3, name: 'JavaScript', path: 'assets/js.svg' },
      { id: 5, name: 'Webpack', path: 'assets/webpack.svg' },
    ],
  },
  {
    title: 'Procedural Terrain Simulator',
    image: 'assets/terrain.png',
    desc: "Here's a simulator using WebGL that generates a realistic terrain based on a variable fault and weathering input!",
    github: 'https://github.com/zhulanders/terrain-sim',
    tags: [
      { id: 1, name: 'WebGL', path: 'assets/webgl.svg' },
      { id: 2, name: 'JavaScript', path: 'assets/js.svg' },
  
    ],
  },
    {
    title: 'Checkout my journey on the Odin Project!',
    image: 'assets/odin.png',
    desc: "Here's a collection of projects/lessons I did learning the foundations of full-stack development for TOP!",
    github: 'https://github.com/orgs/zhulander-top/repositories',
    tags: [{ id: 1, name: 'HTML', path: 'assets/html.svg' },
      { id: 2, name: 'CSS', path: 'assets/css.svg' },
      { id: 3, name: 'JavaScript', path: 'assets/js.svg' },
      { id: 5, name: 'Webpack', path: 'assets/webpack.svg' },
    ],
  },
  {
    title: 'RISC-V Out-of-Order Processor',
    image: 'assets/ooo.png',
    desc: 'I worked with other students to develop a RISC-V processor that performs instructions out-of-order to reduce stalls, placing in the top half of groups!',
    github: '',
    tags: [
      { id: 1, name: 'SystemVerilog', path: 'assets/systemverilog.svg' },
    ],
  },
  {
    title: 'Linux Operating System',
    image: 'assets/os.png',
    desc: 'I developed a Linux-based OS from scratch in x86 assembly and C, with paging and scheduling functionalities!',
    github: '',
    tags: [
      { id: 1, name: 'C', path: 'assets/c.svg' },
      { id: 2, name: 'x86', path: 'assets/x86.png' },
      { id: 3, name: 'Linux/Unix', path: 'assets/linux.webp' },
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