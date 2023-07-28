import newsexplorer1 from '../assets/images/projects/news-explorer/static1.png'
import newsexplorer2 from '../assets/images/projects/news-explorer/static2.png'
import newsexplorer3 from '../assets/images/projects/news-explorer/static3.png'
import newsexplorerPreview from '../assets/images/projects/news-explorer/preview.png'
import newsexplorerMain from '../assets/images/projects/news-explorer/main.png'

import aroundUsMain from '../assets/images/projects/around-us/main.png'
import aroundUs1 from '../assets/images/projects/around-us/static1.png'
import aroundUs2 from '../assets/images/projects/around-us/static2.png'
import aroundUsPreview from '../assets/images/projects/around-us/preview.png'

import landingMain from '../assets/images/projects/landing-page/main.png'
import landing1 from '../assets/images/projects/landing-page/static1.png'
import landing2 from '../assets/images/projects/landing-page/static2.png'
import landingPreview from '../assets/images/projects/landing-page/preview.png'

import learningMain from '../assets/images/projects/howto-learn/main.png'
import learningPreview from '../assets/images/projects/howto-learn/preview.png'
import learning1 from '../assets/images/projects/howto-learn/static1.png'
import learning2 from '../assets/images/projects/howto-learn/static2.png'
import learning3 from '../assets/images/projects/howto-learn/static3.png'


const projectsData = [
  {
    title: 'News Explorer',
    imageSrc: newsexplorerMain,
    preview: newsexplorerPreview,
    projectSummary: 'This project was my final project at my full-stack bootcamp. I Built a responsive web app using React, Node.js, Express, and MongoDB. Integrated News API for real-time news articles. Empowering users to explore the latest headlines with ease.',
    technologies: 'Interaction Design / Fullstack Development / HTML / CSS / JS / React / Node.js / NewsAPI',
    projectBackground: 'News Explorer marked the culmination of my full-stack bootcamp, where I set out to create a web application focused on delivering real-time news to users. Using React, Node.js, Express, and MongoDB, I worked diligently to build a functional and efficient backend. Integrating the News API to provide real-time news updates was a pivotal moment in the project. The process of frontend and backend development, database management, and API integration proved to be invaluable learning experiences. Throughout this transformative journey, I encountered challenges that helped refine my problem-solving abilities and fueled my passion for web development. Each project taught me something new, empowering me to adapt my coding style and grow as a developer.',
    staticPreviews: [newsexplorer1, newsexplorer2, newsexplorer3],
    projectSite: 'https://www.avishaypesk-news.ignorelist.com/',
  },
  {
    title: 'Around the US',
    imageSrc: aroundUsMain,
    preview: aroundUsPreview,
    projectSummary: 'This project was my first full-stack project. I Built a A dynamic image sharing web app utilizing React, Node.js, Express, and MongoDB for a responsive and interactive platform. Users can upload, view, and like images, creating an engaging experience.',
    technologies: 'Interaction Design / Fullstack Development / HTML / CSS / JS / React / Node.js',
    projectBackground: 'Around the US is my first full-stack web project, a user-friendly image sharing platform. Developed using React, Node.js, Express, and MongoDB, it allows users to upload, view, and like images from various locations across the United States. Through this project, I gained valuable experience in full-stack web development, facing challenges that refined my coding skills. Around the US represents my passion for creating engaging and interactive web applications.',
    staticPreviews: [aroundUs1, aroundUs2],
    projectSite: 'https://avishaypeskaround.students.nomoredomainssbs.ru/',
  },
  {
    title: 'How to Learn',
    imageSrc: learningMain,
    preview: learningPreview,
    projectSummary: 'This project is one of my first projects as a student developer. I created a captivating website focused on the theme of learning using HTML and CSS.',
    technologies: 'Interaction Design / Front End Development / HTML / CSS / JS',
    projectBackground: 'In this project, "How to Learn", I embarked on one of my initial web development endeavors. It served as a remarkable starting point in my journey, introducing me to the world of web development. I crafted a captivating website dedicated to the theme of learning, employing HTML and CSS to create a beautiful and engaging user interface. This project laid the foundation for my growth as a developer, inspiring me to pursue further challenges and opportunities in the exciting realm of web development.',
    staticPreviews: [learning1, learning2, learning3],
    projectSite: 'https://avishaypesk.github.io/web_project_1/',
  },
  {
    title: 'Landing Page',
    imageSrc: landingMain,
    preview: landingPreview,
    projectSummary: 'In this project I created a responsive web application using HTML, Tailwind CSS, and a touch of JavaScript. The goal was to develop a landing page for a tech news site.',
    technologies: 'Interaction Design / Front End Development / HTML / CSS / JS',
    projectBackground: 'The Landing Page project was a challenge from Frontend Mentor, where I aimed to learn and implement Tailwind CSS effectively. As a result, I created a fully responsive web app showcasing tech news articles using HTML, CSS, and a bit of JavaScript. After completing the Landing Page, I gained the confidence to incorporate Tailwind to style this very site, demonstrating its versatility and efficiency in creating visually appealing and responsive web projects.',
    staticPreviews: [landing1, landing2],
    projectSite: 'https://avishaypesk.github.io/news-homepage-main/',
  },
];

export default projectsData;
