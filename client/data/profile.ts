interface SkillCategory {
  title: string;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  achievements: string[];
  stack: string[];
}

export interface Project {
  title: string;
  description: string;
  highlights: string[];
  stack: string[];
  year: string;
}

export interface Certification {
  title: string;
  status: "Completed" | "In Progress";
}

export interface Metric {
  value: string;
  label: string;
  description: string;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  headline: string;
  summary: string;
  focusAreas: string[];
  links: {
    linkedin: string;
    github: string;
  };
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  certifications: Certification[];
  metrics: Metric[];
  availability: string;
}

export const profile: Profile = {
  name: "Tyleek Jones",
  role: "Senior Azure Cloud Engineer & DevOps Strategist",
  location: "Houston, Texas, USA",
  email: "Tyleek.Jones.Dev@gmail.com",
  phone: "832-792-5003",
  headline:
    "Building resilient cloud infrastructure and automating CI/CD pipelines across Azure and AWS.",
  summary:
    "DevOps Engineer with 5+ years building high-availability cloud infrastructure and automating CI/CD pipelines across Azure and AWS. Delivered 99.9% system uptime managing Kubernetes-based observability infrastructure at Intel while supporting distributed telemetry APIs. Recent contract at Microsoft developing C#.NET microservices for Azure IoT Operations. Proven expertise in Infrastructure as Code (Terraform/Bicep), container orchestration, automated testing, and cloud-native architectures.",
  focusAreas: [
    "Cloud Infrastructure & DevOps",
    "Kubernetes & Container Orchestration",
    "Infrastructure as Code (IaC)",
    "CI/CD Pipeline Automation",
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/tyleekjones",
    github: "https://github.com/LeekJones",
  },
  availability:
    "Open to DevOps, Cloud Engineering, and Site Reliability roles—including leadership or consulting engagements.",
  metrics: [
    {
      value: "5+",
      label: "Years of experience",
      description:
        "Building high-availability cloud infrastructure and automating CI/CD pipelines.",
    },
    {
      value: "99.9%",
      label: "System uptime maintained",
      description:
        "Managed Kubernetes-based observability infrastructure at Intel across distributed systems.",
    },
    {
      value: "500+",
      label: "Distributed devices",
      description:
        "Telemetry data management and operational automation across cloud and on-premises.",
    },
    {
      value: "40%",
      label: "Query performance improvement",
      description:
        "SQL optimization and stored procedure refactoring for high-volume workloads.",
    },
  ],
  skills: [
    {
      title: "Cloud & Infrastructure",
      items: [
        "Azure",
        "AWS",
        "Terraform",
        "Bicep",
        "Kubernetes",
        "Docker",
        "ECS Fargate",
        "AWS Lambda",
      ],
    },
    {
      title: "DevOps & CI/CD",
      items: [
        "GitHub Actions",
        "Azure Pipelines",
        "Jenkins",
        "Automated Testing",
        "Infrastructure as Code",
      ],
    },
    {
      title: "Languages & Frameworks",
      items: [
        "Python",
        "C#",
        ".NET",
        "ASP.NET Core",
        "Bash",
        "PowerShell",
        "JavaScript",
      ],
    },
    {
      title: "Databases & Messaging",
      items: [
        "SQL Server",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "MQTT",
        "DynamoDB",
      ],
    },
    {
      title: "Monitoring & Observability",
      items: [
        "CloudWatch",
        "Application Insights",
        "Log Analytics",
        "Prometheus",
      ],
    },
    {
      title: "Development Practices",
      items: [
        "Microservices",
        "REST APIs",
        "Agile/Scrum",
        "Code Reviews",
        "Unit Testing",
      ],
    },
  ],
  experience: [
    {
      company: "Microsoft Corporation",
      role: "Azure Cloud Engineer",
      start: "Apr 2025",
      end: "Jun 2025",
      location: "Remote",
      achievements: [
        "Developed and enhanced C#.NET microservices and API components for Azure IoT Operations, using Log Analytics for monitoring to ensure 99.9% uptime in distributed applications serving thousands of IoT devices.",
        "Designed SQL-backed application services and optimized stored procedures, reducing query latency by 40% and improving real-time reporting capabilities for operations dashboards.",
        "Participated in Agile sprint cycles with 2-week iterations, provided accurate delivery estimates, and collaborated with cross-functional teams to finalize requirements, achieving 95% on-time sprint completion rate.",
        "Created automated testing and operational scripts in PowerShell and Python, reducing manual validation time by 60% and preventing production defects through comprehensive test coverage.",
      ],
      stack: ["C#.NET", "Azure IoT Operations", "Log Analytics", "SQL Server"],
    },
    {
      company: "Intel Corporation",
      role: "DevOps Engineer / Software Developer",
      start: "Jan 2022",
      end: "Nov 2024",
      location: "Austin, TX",
      achievements: [
        "Architected and maintained Kubernetes-based observability infrastructure managing telemetry data from 500+ distributed devices, achieving 99.9% system availability across DEV, TEST, STAGING, and PROD environments.",
        "Designed .NET (C#) telemetry APIs processing 10M+ data points daily for device configuration, data aggregation, and operational automation across cloud and on-premises deployments.",
        "Developed and optimized SQL data pipelines handling high-volume transaction workloads (100K+ records/hour), improving query performance by 50% through index optimization and stored procedure refactoring.",
        "Implemented comprehensive CI/CD pipelines using Jenkins and Azure Pipelines, automating build, test, and deployment processes and reducing deployment time from 2 hours to 15 minutes.",
      ],
      stack: ["Kubernetes", "C#.NET", "Jenkins", "Azure Pipelines", "SQL"],
    },
    {
      company: "Dualis TechWorks",
      role: "Technical Solutions Consultant",
      start: "Nov 2019",
      end: "Present",
      location: "Houston, TX",
      achievements: [
        "Built enterprise-grade backend services in C# and JavaScript, including form-based web applications and REST APIs deployed to production environments serving 1,000+ daily active users.",
        "Developed SQL-driven data storage and reporting components, improving data accuracy by 25% and query performance by 60% for high-volume transactional systems.",
        "Implemented comprehensive test suites achieving over 80% code coverage and created detailed technical documentation, enhancing maintainability and reliability of production releases.",
        "Provided 24/7 on-call operational support during deployments and production incidents, maintaining SLA compliance and minimizing downtime to less than 0.1%.",
      ],
      stack: ["C#", "JavaScript", "SQL", "REST APIs", "Docker"],
    },
  ],
  projects: [
    {
      title: "Dualis AWS/Azure Cloud Launchpad",
      description:
        "Production-ready Infrastructure as Code starter kits for AWS and Azure with automated deployments, security-first networking, and comprehensive monitoring.",
      highlights: [
        "VPC/VNET configuration with security-first networking",
        "Container orchestration (ECS Fargate/App Service)",
        "Serverless compute (Lambda/Functions)",
        "Database modules (DynamoDB/RDS) with comprehensive CI/CD pipelines",
        "Architecture diagrams and step-by-step documentation for rapid deployment",
      ],
      stack: ["Terraform", "Bicep", "AWS", "Azure", "Docker"],
      year: "2025",
    },
    {
      title: "Dualis LogBee – Serverless Log Viewer",
      description:
        "Serverless log aggregation platform providing centralized CloudWatch log management without ELK overhead.",
      highlights: [
        "AWS Lambda-based serverless architecture",
        "API Gateway and DynamoDB for scalable storage",
        "React frontend for intuitive log viewing",
        "Launched as micro-SaaS at $7/month targeting small teams and indie developers",
      ],
      stack: ["AWS Lambda", "API Gateway", "DynamoDB", "React"],
      year: "2025",
    },
  ],
  certifications: [
    {
      title: "Introduction to DevOps - CodeAcademy",
      status: "Completed",
    },
    {
      title: "AZ-104: Microsoft Azure Administrator",
      status: "In Progress",
    },
    {
      title: "AZ-400: Microsoft DevOps Engineer Expert",
      status: "In Progress",
    },
  ],
};
