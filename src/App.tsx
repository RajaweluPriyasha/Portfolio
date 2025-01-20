import React, { useEffect, useState } from 'react';
import {
  Github,
  Mail,
  Linkedin,
  Twitter,
  ChevronDown,
  BookOpen,
  Code2,
  Briefcase,
  User,
  MessageSquare,
  Phone
} from 'lucide-react';
import ContactForm from './contact.tsx';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events for navbar and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 300) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'UI/UX Design', level: 85 }
  ];

  const projects = [
    {
      title: 'Mini E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React and Node.js',
      image: '/images/ecommerce.png',
      github: 'https://github.com/RajaweluPriyasha?tab=repositories',
      demo: 'https://www.linkedin.com/posts/priyasha-rajavelu-012122273_react-mongodb-ecommerce-activity-7284502690976382976-p3kp?utm_source=share&utm_medium=member_desktop'
    },
    {
      title: 'FOT Lab Reservation',
      description: 'Creating a beautiful and intuitive lab reservation system involves designing an application with a user-friendly interface and efficient functionality.',
      image: '/images/mobileapplication.png',
      github: 'https://github.com/RajaweluPriyasha?tab=repositories',
      demo: 'https://www.linkedin.com/posts/priyasha-rajavelu-012122273_flutter-frontenddevelopment-groupproject-activity-7285620788785819648-uWic?utm_source=share&utm_medium=member_desktop'
    },
    {
      title: 'Automatic Door Lock System',
      description: 'Led testing and quality assurance to ensure reliability and security, while designing automated locking mechanisms that prioritize user safety and operational efficiency.',
      image: 'url[/images/groupproject1 (1).jpeg]',
      github: 'https://github.com/RajaweluPriyasha?tab=repositories',
      demo: '#'
    }
  ];

  return (
    <div className="font-mono">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 bg-white-500">  {/* Added background color for visibility */}
          <div className="flex items-center justify-between">
            <img src="/images/name logo image.png" alt="Portfolio" className="w-34 h-16" />
            <div className="flex space-x-8"> {/* Changed hidden md:flex to just flex */}
              {['home', 'about', 'education', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`relative capitalize ${activeSection === section ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'} transition-all duration-300 group`}
                >
                  {section}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-transparent h-1 w-0 transition-all duration-500 ease-out group-hover:w-full`}>
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent bg-repeat-x"></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>




      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="absolute inset-0 bg-[url('/images/wal.jpg')] bg-cover bg-center opacity-15"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-blue-800 to-pink-600 bg-clip-text text-transparent">
                Hello, I'm Rajawelu Priyasha
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slide-up-delay">
              Software Developer & UI/UX Designer
            </p>
            <a
              href="/images/Rajawelu Priyasha CV.pdf"
              download="Rajawelu_Priyasha_CV"
              className="bg-gradient-to-r from-blue-900 to-blue-600 text-blue-900 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-500 ease-in-out hover:from-blue-700 hover:to-blue-400 animate-pulse"
            >
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                Download My CV
              </span>
            </a>


          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-fast">
            <ChevronDown className="w-8 h-8 text-blue-800" />
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="/images/Asha.jpeg"
                alt="Profile"
                className="rounded-lg shadow-xl w-[500px] h-[500px] transition-transform duration-500 hover:scale-110 hover:rotate-3 hover:shadow-2xl hover:opacity-90"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg text-gray-600 leading-relaxed">
                Hello I'm Priyasha, a React Developer passionate about continuous learning and growth. I specialize in frontend development using React and Tailwind CSS to create engaging user experiences. I thrive in collaborative environments, prioritizing communication and teamwork. With strong problem-solving skills and time management, I handle challenges with ease. I lead by example, fostering a supportive environment where everyone's contributions are valued. My interests range from frontend to backend development, full-stack development, and machine learning. Currently seeking an internship opportunity to further enhance my skills and contribute to innovative projects. Let's connect and make a positive impact through technology!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Education
            {/* Graduation Icon */}
            <div className="mt-2 flex justify-center">
              <i className="fas fa-graduation-cap text-blue-600 text-lg"></i>
            </div>
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                <div className="relative opacity- transform translate-y-4 transition-all duration-500 ease-in-out hover:opacity-100 hover:translate-y-0">
                  <div className="flex items-center justify-between">
                    <div className="w-5/12 text-right pr-8">
                      <h3 className="text-xl font-semibold">
                        BICT Honors Specialization in Software Technology
                      </h3>
                      <p className="text-blue-600">[2022] - [2026]</p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
                    <div className="w-5/12 pl-8">
                      <p className="text-gray-600">University of Sri Jayewardenepura</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in-up">
            Skills
          </h2>
          <div className="max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="mb-8 animate-slide-in"
                style={{
                  animationDelay: `${index * 0.2}s`, // Delayed animation for each skill
                }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-semibold">{skill.name}</span>
                  <span className="text-red-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-blue-700 h-2.5 rounded-full progress-bar-animation transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
                    style={{
                      width: `${skill.level}%`, // Adjust width based on skill level
                      animation: `progress-bar-${index} 1.2s ease-out forwards`,
                      transition: 'background-color 0.3s ease', // Smooth transition
                    }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLDivElement; // Type casting
                      target.style.backgroundColor = '#FF6347'; // Change color on hover
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLDivElement; // Type casting
                      target.style.backgroundColor = '#004d7a'; // Reset to original color
                    }}
                  ></div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in-up">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 animate-slide-up"
                style={{
                  animationDelay: `${index * 0.2}s`, // Stagger animations for each project card
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-blue-600 hover:text-blue-900"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center text-blue-600 hover:text-blue-900"
                    >
                      <Code2 className="w-5 h-5 mr-2" />
                      More Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* Contact Section */}

      <section id="contact" className="py-20 bg-white">
        <ContactForm />
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center">
            <div className="flex space-x-6 mb-6">
              <a href="https://github.com/RajaweluPriyasha?tab=repositories" className="hover:text-blue-400 transition-colors duration-300">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/priyasha-rajavelu-012122273/" className="hover:text-blue-400 transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>

              <a href="priyasharajavelu25@gmail.com" className="hover:text-blue-400 transition-colors duration-300">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-400">
              © {new Date().getFullYear()} Priyasha R. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
