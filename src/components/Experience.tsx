
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  description: string[];
  isLeft?: boolean;
  delay: string;
}

const TimelineItem = ({ year, title, company, description, isLeft = true, delay }: TimelineItemProps) => {
  return (
    <div className={`flex flex-col md:flex-row items-center mb-16 animate-on-scroll animate-fade-up`} style={{ animationDelay: delay }}>
      <div className={`md:w-1/2 ${isLeft ? 'md:order-1' : 'md:order-2'}`}>
        <Card className="h-full shadow-lg border-t-4 border-portfolio-highlight">
          <CardContent className="p-6">
            <span className="inline-block px-3 py-1 bg-portfolio-navy text-white text-sm rounded-full mb-4">
              {year}
            </span>
            <h4 className="text-xl font-montserrat font-bold text-portfolio-navy mb-1">{title}</h4>
            <h5 className="text-portfolio-blue mb-4">{company}</h5>
            <ul className="list-disc pl-5 space-y-2">
              {description.map((item, idx) => (
                <li key={idx} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <div className={`hidden md:flex items-center justify-center md:w-16 h-16 my-3 md:my-0 ${isLeft ? 'md:order-2' : 'md:order-1'}`}>
        <div className="w-4 h-4 rounded-full bg-portfolio-highlight"></div>
      </div>
      
      <div className={`md:w-1/2 ${isLeft ? 'md:order-3' : 'md:order-3'} hidden md:block`}></div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-portfolio-gold uppercase tracking-wider font-semibold mb-2">Career Path</h2>
          <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-portfolio-navy">Professional Experience</h3>
          <div className="w-24 h-1 bg-portfolio-highlight mx-auto mt-4"></div>
        </div>
        
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-300"></div>
          
          <TimelineItem 
            year="May 2023 - Present"
            title="Human Resource General Affair"
            company="PT Bigjava"
            description={[
              "Handled recruitment, employee data management, and payroll processing",
              "Managed general affairs including office supply procurement, facility maintenance, and transportation coordination",
              "Ensured compliance with labor regulations and company policies, and maintain industrial relations to create a harmonious work environment",
              "Responsible for organizing employee training programs to enhance skills and support career growth",
              "Conducts performance evaluations to measure individual achievements and align with company goals, including setting KPIs, giving feedback, and maintaining performance records",
              "Manage company legal document, business permits, work contract extensions, building contracts, and insurance Arrange transportation and accommodation during employee business trips and booking tickets and hotels ",
              "Organize company event (family gathering, outing) and support CSR activities ",
              "Act point of contract for client and visitors, ensuring a professional and welcoming environtment",
              "Assists with client inquiries, coordinates meeting schedule, and ensures all guest needs are handled efficiently and courteously"
            ]}
            delay="0.1s"
          />
          
          <TimelineItem 
            year="Feb 2021 - Mei 2023"
            title="Finance and Accounting"
            company="Sumber Abadi Furniture."
            description={[
              "Record and manage daily financial transactions (sales, purchases, expenses)",
              "Handle accounts payable and receivable, including invoicing and payment follow-ups",
              "Monitor inventory costs and support product costing and margin analysis",
              "ensure accurate tax reporting and compliance with financial regulations ",
              "Coordinate with sales, and warehouse teams for financial data accuracy ",
              "Assist in financial planing",
              "Support audits by maintaining complete and organized financial records"
            ]}
            isLeft={false}
            delay="0.3s"
          />
          
          <TimelineItem 
            year="Apr 2020 - Feb 2021"
            title="Call Center Representative "
            company="PT Bank Central Asia TBK "
            description={[
              "Handle inbound and outbound customer calls in a professional and courteous manner ",
              "Provide accurate information regarding products, services, and company policies ",
              "Assist customers in resolving issues, complaints, or inquiries efficiently",
              "Document call details and maintain up to date customer records in the system",
              "Follow up on unresolved customer cases to ensure satisfaction",
              "Meet performance targets such as response time, call handling time, and customer satisfaction",
              "Collaborate with other department to resolve complex issues or escalate when necessary ",
              "Stay updates and procedures to provide accurate support ",
              "Cross selling banking product"
            ]}
            delay="0.5s"
          />
          
          <TimelineItem 
            year="2016 - 2017"
            title="Finance"
            company="Vivo Apartement"
            description={[
              "Manage daily financial transactions including income from rent, utilities, maintenance fees, and other service", 
              "Prepare monthly billing for tenants, ensuring timely distribution of invoices and collection of payments",
              "Monitor accounts receivable and payable, follow up on outstanding tenant payments, and ensure timely vendor payments ",
              "Assist in budget preparation and financial planning for operational and maintenance activities of the apartment ",
              "Record and maintain accurate financial data, including cash flow, bank transactions , and petty cash reports",
              "Coordinate with the property management team to monitor costs, approve expenditures, and maintain financial transparency ",
              "Support internal and external audits by providing necessary documentation and explanations"
            ]}
            isLeft={false}
            delay="0.7s"
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
