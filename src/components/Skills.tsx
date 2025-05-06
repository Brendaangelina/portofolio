
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BadgeCheck, Briefcase, LineChart, Settings, Users } from 'lucide-react';

interface SkillBarProps {
  name: string;
  percentage: number;
}

const SkillBar = ({ name, percentage }: SkillBarProps) => {
  const skillBarRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const skillFill = target.querySelector('.skill-bar-fill') as HTMLElement;
          if (skillFill) {
            skillFill.style.width = `${percentage}%`;
          }
        }
      });
    }, { threshold: 0.1 });
    
    if (skillBarRef.current) {
      observer.observe(skillBarRef.current);
    }
    
    return () => {
      if (skillBarRef.current) {
        observer.unobserve(skillBarRef.current);
      }
    };
  }, [percentage]);
  
  return (
    <div ref={skillBarRef} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-portfolio-charcoal">{name}</span>
        <span className="text-sm text-gray-500">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-bar-fill" style={{ width: "0%" }}></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-portfolio-gold uppercase tracking-wider font-semibold mb-2">Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-portfolio-navy">Core Competencies</h3>
          <div className="w-24 h-1 bg-portfolio-highlight mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="animate-on-scroll animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-portfolio-highlight mr-2" />
              <h4 className="text-xl font-montserrat font-bold text-portfolio-charcoal">HR & General Affairs</h4>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <SkillBar name="Recruitment & Talent Acquisition" percentage={95} />
                <SkillBar name="Employee Relations" percentage={90} />
                <SkillBar name="Performance Management" percentage={85} />
                <SkillBar name="Office Administration" percentage={92} />
                <SkillBar name="HR Policy Development" percentage={91} />
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-on-scroll animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center mb-4">
              <LineChart className="h-6 w-6 text-portfolio-highlight mr-2" />
              <h4 className="text-xl font-montserrat font-bold text-portfolio-charcoal">Finance</h4>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <SkillBar name="Financial Analysis" percentage={92} />
                <SkillBar name="Budget Management" percentage={94} />
                <SkillBar name="Cost Control" percentage={90} />
                <SkillBar name="Payroll Processing" percentage={96} />
                <SkillBar name="Financial Reporting" percentage={90} />
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              icon: <Settings className="h-8 w-8 text-portfolio-highlight mb-4" />, 
              title: "Tools",
              items: ["Microsoft Excel (Advanced)","Microsoft Office Suite", "Google Forms/Sheets", "DocuSign", "Trello "]
            },
            { 
              icon: <Settings className="h-8 w-8 text-portfolio-highlight mb-4" />, 
              title: "Software",
              items: [ "MYOB","Accurate", "Time Attendence System", "SAP SuccessFactors", "Talenta by Mekari", ]
            },
            { 
              icon: <Briefcase className="h-8 w-8 text-portfolio-highlight mb-4" />, 
              title: "Business Skills",
              items: ["Strategic HR Planning", "Employee Relations", "Compensation and Benefits Analysis", "Budget Management for HR", "Financial Analysis and Reporting", "Cash Flow Management", "Risk Management", "Tax Planning and Compliance"]
            },
            { 
              icon: <Users className="h-8 w-8 text-portfolio-highlight mb-4" />, 
              title: "Soft Skills",
              items: ["Communication","Public Speaking", "Negotiation", "Team Collaboration", "Adaptability and Flexibility", "Attention to Detail", "Problem Solving", "Critical Thinking", "Emotional Intelligence", "Creativity and Innovation"]
            },
          ].map((category, index) => (
            <Card key={index} className="animate-on-scroll animate-fade-up" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <CardContent className="p-6 text-center">
                {category.icon}
                <h4 className="text-lg font-montserrat font-bold text-portfolio-navy mb-4">{category.title}</h4>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
