export interface SkillCategory {
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
  headline: "Building resilient, observable edge-to-cloud platforms across Azure and multi-cloud ecosystems.",
  summary:
    "Cloud engineer and SRE partner with a record of modernizing IoT telemetry platforms, accelerating deployment velocity, and delivering high-trust observability for hybrid infrastructures.",
  focusAreas: [
    "Edge-to-cloud telemetry architecture",
    "Cloud-native observability & monitoring",
    "Infrastructure as Code and platform automation",
    "Multi-cloud resiliency & governance",
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/tyleekjones",
    github: "https://github.com/TyleekJones",
  },
  availability:
    "Open to DevOps, Cloud Engineering, and Site Reliability roles—including leadership or consulting engagements.",
  metrics: [
    {
      value: "40%",
      label: "Deployment acceleration",
      description:
        "Efficiency gains delivered by modernizing Azure IoT Operations infrastructure-as-code program.",
    },
    {
      value: "500+",
      label: "Environments orchestrated",
      description:
        "Virtualized validation ecosystems supported for Intel Xeon server testing campaigns.",
    },
    {
      value: "99.9%",
      label: "Reliability maintained",
      description:
        "Availability sustained across telemetry and observability platforms through automation and SLO discipline.",
    },
    {
      value: "30%",
      label: "Operations automated",
      description:
        "Manual toil removed via DevOps scripting, pipelines, and incident response runbooks across Azure and multi-cloud estates.",
    },
  ],
  skills: [
    {
      title: "Programming & Automation",
      items: [
        "C#",
        "Python",
        "C++",
        "Java",
        "JavaScript",
        "Bash",
        "PowerShell",
      ],
    },
    {
      title: "Cloud Platforms",
      items: [
        "Azure Functions",
        "Azure App Services",
        "Azure IoT Hub",
        "Azure Event Grid",
        "Azure Monitor",
        "AWS EC2",
        "AWS Lambda",
        "AWS CloudWatch",
        "Hybrid Cloud Deployments",
        "Service/Resource Control Policies",
      ],
    },
    {
      title: "Observability & Streaming",
      items: [
        "Prometheus",
        "Grafana",
        "Azure Monitor",
        "OpenTelemetry",
        "Real-time streaming",
        "Distributed tracing",
        "Metrics aggregation",
        "Incident response automation",
      ],
    },
    {
      title: "Infrastructure & Orchestration",
      items: [
        "Terraform",
        "Bicep",
        "Helm",
        "Ansible",
        "Kubernetes",
        "Docker",
        "Azure Arc",
        "Configuration management",
        "GPU/CPU cluster monitoring",
      ],
    },
    {
      title: "DevOps & CI/CD",
      items: [
        "Azure Pipelines",
        "GitHub Actions",
        "Jenkins",
        "GitOps workflows",
        "Deployment automation",
        "Infrastructure automation",
        "Branching strategies",
      ],
    },
    {
      title: "Data & Messaging",
      items: [
        "SQL Server",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "TimescaleDB",
        "Elasticsearch",
        "RabbitMQ",
        "MQTT",
        "AMQP",
        "IoT connectivity",
      ],
    },
  ],
  experience: [
    {
      company: "Microsoft Corporation",
      role: "Senior Azure Cloud Engineer",
      start: "Apr 2025",
      end: "Jun 2025",
      location: "Remote",
      achievements: [
        "Modernized production Terraform codebases to Azure Bicep for Azure IoT Operations, improving deployment efficiency by 40% and enabling native ARM integration.",
        "Delivered secure, scalable telemetry pipelines from IoT Edge to centralized analytics across IoT Hub, Event Grid, Functions, and supporting services.",
        "Built Azure-first observability platform integrating Azure Monitor, Application Insights, Log Analytics, and Grafana to sustain 99.9% platform availability.",
        "Automated provisioning using Bicep, Helm, and Azure Arc-enabled Kubernetes to halve deployment time for hybrid edge-cloud environments.",
        "Implemented automated operational workflows via Azure DevOps pipelines, PowerShell, and Azure CLI reducing manual tasks by 30%.",
      ],
      stack: ["Azure", "Bicep", "Helm", "Grafana", "Azure Monitor", "Azure DevOps"],
    },
    {
      company: "Intel Corporation",
      role: "DevOps Engineer",
      start: "Jan 2022",
      end: "Nov 2024",
      location: "Austin, TX",
      achievements: [
        "Supported validation platform for Xeon servers across 500+ virtualized environments, maintaining 99.9% uptime for parallel hardware validation.",
        "Automated CI/CD pipelines with Jenkins, GitHub Actions, and Terraform cutting test infrastructure deployment time by 60%.",
        "Implemented Terraform and Ansible driven infrastructure-as-code for multi-data-center provisioning and configuration management.",
        "Created observability platform with Prometheus, Grafana, and custom telemetry APIs reducing infrastructure-related test failures by 40%.",
        "Engineered Python and PowerShell automation workflows to orchestrate lab provisioning, configuration, and health checks across distributed systems.",
      ],
      stack: ["Terraform", "Ansible", "Prometheus", "Grafana", "Jenkins", "GitHub Actions"],
    },
    {
      company: "Dualis TechWorks",
      role: "Software Engineer / SRE Consultant",
      start: "Nov 2019",
      end: "Present",
      location: "Houston, TX",
      achievements: [
        "Delivered observability consulting engagements implementing Prometheus, Grafana, and OpenTelemetry to decrease MTTR by 45% on average.",
        "Designed GitOps-enabled CI/CD pipelines with GitHub Actions, Jenkins, and ArgoCD for multi-cloud, zero-downtime deployments.",
        "Architected containerized microservices with Kubernetes and Istio providing resilient distributed systems with automated failover.",
        "Built end-to-end edge-to-cloud telemetry pipelines combining RabbitMQ, MQTT, and time-series databases for real-time monitoring.",
        "Created repeatable infrastructure-as-code templates using Terraform, Helm, and Ansible to support disaster recovery and hybrid cloud parity.",
      ],
      stack: ["Kubernetes", "Istio", "ArgoCD", "Terraform", "OpenTelemetry", "RabbitMQ"],
    },
  ],
  projects: [
    {
      title: "Azure IoT Operations Telemetry Platform",
      description:
        "Designed secure telemetry ingestion architecture spanning IoT Edge to Azure analytics services with automated provisioning and monitoring.",
      highlights: [
        "Edge-to-cloud resiliency with automated failover",
        "Unified observability with Azure Monitor and Grafana",
        "Deployment automation through Bicep and Azure DevOps",
      ],
      stack: ["Azure IoT Hub", "Event Grid", "Azure Functions", "Azure Monitor", "Grafana"],
      year: "2025",
    },
    {
      title: "Intel Validation Observability Fabric",
      description:
        "Delivered telemetry APIs and dashboards enabling real-time insight into on-prem validation clusters supporting Xeon server testing.",
      highlights: [
        "Custom Prometheus exporters for cluster health",
        "Grafana dashboards for utilization and job tracking",
        "Automation to remediate infrastructure incidents",
      ],
      stack: ["Prometheus", "Grafana", "Kubernetes", "Terraform", "PowerShell"],
      year: "2024",
    },
    {
      title: "Dualis Edge-to-Cloud Reference Architecture",
      description:
        "Reference implementation demonstrating IoT telemetry flows with messaging, stream processing, and time-series analytics.",
      highlights: [
        "RabbitMQ + MQTT ingestion mesh",
        "TimescaleDB-backed time-series storage",
        "OpenTelemetry traces across distributed services",
      ],
      stack: ["RabbitMQ", "MQTT", "TimescaleDB", "OpenTelemetry", "Kubernetes"],
      year: "2023",
    },
  ],
  certifications: [
    { title: "AZ-400 - Azure DevOps Engineer Expert", status: "In Progress" },
    { title: "Certified Kubernetes Administrator (CKA)", status: "In Progress" },
    { title: "Docker Certified Associate (DCA)", status: "In Progress" },
    { title: "AWS Certified Cloud Practitioner", status: "In Progress" },
  ],
};
