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
import { FaGithub, FaLinkedin, FaMailBulk, FaFacebook } from 'react-icons/fa';
import Navbar from './navbar';
import SkillsSection from './skill';

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'UI/UX Design', level: 85 }
];



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
      image: '/images/groupproject1 (1).jpeg',
      github: 'https://github.com/RajaweluPriyasha?tab=repositories',
      demo: '#'
    }
  ];


  return (
    <div className="font-mono">
      {/* Navigation */}
      <div>
        <Navbar />

        <div />



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
              <div className="flex justify-center items-center">
              <a
                href="/images/Rajawelu Priyasha CV.pdf"
                download="Rajawelu_Priyasha_CV"
                className="text-white text-xs font-semibold px-6 py-2 w-24 rounded-lg bg-gradient-to-r from-blue-900 via-white-600 to-blue-700 border-2 border-transparent hover:bg-gradient-to-r hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 hover:border-blue-900 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-sm hover:shadow-md"
              >
                <span>
                  Download My CV
                </span>
              </a>
              </div>



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
                          BICT (Hons) Specialization in Software Technology
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
        <div>
          <SkillsSection skills={skills} />
        </div>

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
                    className="w-full h-52 object-cover"
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
        <footer className="py-12">
          {/* First Section with a different background color */}
          <div className="bg-gray-400 text-white py-12">
            <div className="container mx-auto px-6">
              {/* Flex container for "Connect with Me" and "Shortlinks" */}
              <div className="flex justify-between items-center mb-8">
                {/* "Connect with Me" Section */}
                <div className="flex flex-col-2 items-start space-y-2">
                  <h2 className="text-2xl font-semibold">Connect with Me</h2>
                  <div className="flex space-x-6 mt-2">
                    <a href="https://github.com/RajaweluPriyasha?tab=repositories" className="hover:text-blue-400 transition-colors duration-300">
                      <FaGithub className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/priyasha-rajavelu-012122273/" className="hover:text-blue-400 transition-colors duration-300">
                      <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a href="mailto:priyasharajavelu25@gmail.com" className="hover:text-blue-400 transition-colors duration-300">
                      <FaMailBulk className="w-6 h-6" />
                    </a>
                    <a href="https://www.facebook.com/priyasha.rajavelu" className="hover:text-blue-400 transition-colors duration-300">
                      <FaFacebook className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                {/* "Shortlinks" Section */}
                <div className="flex flex-col items-center space-y-2">
                  <h3 className="text-lg font-semibold">Shortlinks</h3>
                  <ul className="space-y-2">
                    <li><a href="#home" className="hover:text-blue-400 transition-colors duration-300">Home</a></li>
                    <li><a href="#about" className="hover:text-blue-400 transition-colors duration-300">About</a></li>
                    <li><a href="#projects" className="hover:text-blue-400 transition-colors duration-300">Projects</a></li>
                    <li><a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a></li>
                  </ul>
                </div>
                {/* Logo Section */}
                <div className="flex justify-center items-center mt-8">
                  <img src="/images/name logo image.png" alt="Logo" className="w-32 h-32 object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* Second Section with a different background color */}
          <div className="bg-gray-800 py-12">
            <div className="container mx-auto px-6">


              {/* Footer Copyright */}
              <div className="text-center mt-8">
                <p className="text-gray-400">
                  © {new Date().getFullYear()} Priyasha R. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>


      </div>
    </div>
  );
}

export default App;
