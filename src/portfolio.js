const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'hn.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Harsh Nishad',
  role: 'Welcome to my personal website',
  description:
    'Welcome! I’m Harsh Nishad, a passionate Computer Science student at GLA University, specializing in software development and data structures. With hands-on experience in both front-end and back-end technologies, I thrive on creating efficient and user-friendly applications. My recent projects include a Desktop Agent Application and a Campus Portal, showcasing my skills in MERN STACK, JAVA, and more. Let’s connect and explore innovative solutions together.',
  resume: 'https://drive.google.com/file/d/1IrJVi9TKqmK7YK4HD4lIN8Wl9eIBOHK2/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/harshnishad',
    github: 'https://github.com/harshnishad',
    codolio:'https://codolio.com/profile/mRYNrXT4'
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'WorkLive',
    description:
      'This project involves developing a Python-based desktop agent application that tracks employee activity and securely uploads relevant data (e.g., screenshots) to Amazon S3 or a similar cloud storage service. The application is designed to monitor genuine user activity and handle configuration changes',
    stack: ['Python', 'Fast API', 'Aws S3', 'React.js', 'MongoDB'],
    sourceCode: 'https://github.com/harshnishad/Desktop-Agent-Application',
    livePreview: 'https://drive.google.com/file/d/1ntOJAYK0_ffjGvIAPBc25CTMfzXwVM7d/view?usp=sharing',
  },
  {
    name: 'Campus Link',
    description:
      'Created a MERN stack application for managing timetables, attendance, and roles (admin, teacher, student) with ReduxToolkit for state management.Admins manage timetables and roles, teachers mark attendance, and students view schedules and attendance records.',
    stack: ['React.js', 'Node.js', 'Rest Api', 'Express.js', 'MongoDB', 'Redux Toolkit'],
    sourceCode: 'https://github.com/Campus-Link',
    livePreview: 'https://campus-link-hieg.vercel.app/',
  },
  {
    name: 'IMDB Clone',
    description:
      'This web application React.js to provide a seamless movie search experience using the themoviedb API, displaying key details like title and year in an easy-to-read format. Users can also view in-depth movie information and mark favorites for quick access, showcasing skills in API integration and web development.',
    stack: ['Tailwind', 'React','API'],
    sourceCode: 'https://github.com/harshnishad/IMDB-CLONE-REACT-JS',
    livePreview: 'https://imdb-clone-react-js-j1tr.vercel.app/movies/top_rated',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
 'HTML',
'CSS',
'JavaScript',
'React.js',
'Node.js',
'Express.js',
'NPM',
'REST API',
'FastAPI',
'MongoDB',
'MySQL',
'Java (DSA)',
'Basic Python'

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'hn3121147@mail.com',
}

export { header, about, projects, skills, contact }
