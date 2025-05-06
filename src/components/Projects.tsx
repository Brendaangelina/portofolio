
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProjectProps {
  title: string;
  category: string;
  description: string;
  outcomes: string[];
  skills: string[];
  delay: string;
}

const ProjectCard = ({ title, category, description, outcomes, skills, delay }: ProjectProps) => {
  return (
    <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg animate-on-scroll animate-fade-up" style={{ animationDelay: delay }}>
      <div className="h-2 bg-gradient-to-r from-portfolio-navy to-portfolio-highlight"></div>
      <CardContent className="p-6">
        <div className="mb-4">
          <span className="text-sm text-portfolio-gold">{category}</span>
          <h4 className="text-xl font-montserrat font-bold text-portfolio-navy">{title}</h4>
        </div>
        
        <p className="text-gray-700 mb-4">{description}</p>
        
        <div className="mb-4">
          <h5 className="font-semibold text-portfolio-blue mb-2">Key Outcomes:</h5>
          <ul className="list-disc pl-5 space-y-1">
            {outcomes.map((outcome, idx) => (
              <li key={idx} className="text-gray-700">{outcome}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {skills.map((skill, idx) => (
            <Badge key={idx} variant="outline" className="bg-gray-100 text-portfolio-charcoal border-gray-200">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-portfolio-gold uppercase tracking-wider font-semibold mb-2">Featured Work</h2>
          <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-portfolio-navy">Project Highlights</h3>
          <div className="w-24 h-1 bg-portfolio-highlight mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            title="HR System Integration"
            category="HR Transformation"
            description="led the strategic tranformation of the HR function by implementing a digital HR system (HRIS) and streamlining key HR processes, including employee onboarding, attendance, leave management, and payroll"
            outcomes={[
              "Reduced administrative work by 60%",
              "Improved data accuracy by 90%", 
              "Stronger compliance and audit readiness"
            ]}
            skills={["SOP Standardization", "Change Management", "HRIS", "Process Optimization"]}
            delay="0.1s"
          />
          
          <ProjectCard 
            title="Budget Restructuring"
            category="Financial Management"
            description="Developed and implemented a zero-based budgeting approach for all departments to increase financial accountability and optimize resource allocation."
            outcomes={[
              "Maintained monthly budget variance of less than 5%",
              "Improved report delivery time", 
              "Zero late payment incidents"
            ]}
            skills={["Financial Analysis", "Budgeting", "Cost Control and Analysis", "Strategic Planning", "Risk Management"]}
            delay="0.3s"
          />
          
          <ProjectCard 
            title="Payroll Process Redesign"
            category="HR & Finance"
            description="Redesigned the end-to-end payroll process by integrating time tracking, benefits administration, and payroll processing into a single workflow."
            outcomes={[
              "Reduced processing time by 40%, improving overall HR efficiency",
              "100% timely and accurate salary disbursement for all employees", 
              "Improved employee satisfaction through transparent payslip access and support"
            ]}
            skills={["Attendance and Leave Tracking", "Payroll Systems", "Compliance", "Automation"]}
            delay="0.5s"
          />
          
          <ProjectCard 
            title="Employee Retention Program"
            category="HR Strategy"
            description="Designed and implemented a comprehensive employee retention program focusing on career development, recognition, and competitive compensation."
            outcomes={[
              "Increased employee satisfaction",
              "Improved exit interview insight", 
              "Boosted engagement"
            ]}
            skills={["Employee Relations", "Career Development", "Program Development", "Performance Management", "Work-Life Balance Initiatives"]}
            delay="0.7s"
          />
          
          <ProjectCard 
            title="Cost Control Initiative"
            category="Financial Optimization"
            description="Spearheaded a company-wide cost control initiative focusing on vendor management, contract negotiations, and operational efficiency."
            outcomes={[
              "Achieved significant cost savings through strategic vendor negotiations and process improvements",
              "Streamlined operations, leading to more efficient use of resources and reduced waste", 
              "Implemented KPIs for ongoing cost monitoring"
            ]}
            skills={["Cost Analysis", "Vendor Management", "Negotiation", "Financial Reporting"]}
            delay="0.9s"
          />
          
          <ProjectCard 
            title="Office Relocation Management"
            category="General Affairs"
            description="Managed the the complete office relocation project while minimizing disruption to operations and optimizing new space for efficiency."
            outcomes={[
              "Completed move on schedule",
              "Successfully relocated the office with no operational downtime and minimal disruptions", 
              "Improved workspace satisfaction"
            ]}
            skills={["Project Coordination", "Budget Management", "Vendor Selection", "Facilities Planning"]}
            delay="1.1s"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
