// SkillsSection.tsx
import React, { useEffect, useState } from 'react';

// Define the Skill type
type Skill = {
  name: string;
  level: number;
};

interface SkillsSectionProps {
  skills: Skill[]; // Array of Skill objects
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(true); // Trigger the animation when the component mounts
  }, []);

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in-up">Skills</h2>
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
                  className={`bg-blue-700 h-2.5 rounded-full progress-bar-animation transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg ${hasLoaded ? 'skill-bar' : ''}`}
                  style={{
                    width: `${hasLoaded ? skill.level : 0}%`, // Animation triggers when the page loads
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
  );
};

export default SkillsSection;
