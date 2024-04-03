export interface Job {
  id: string;
  jobID: string;
  userID: string;
  title: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
  benefits: string[];
  location: string;
  employmentType: string;
  industry: string;
  company: {
    name: string;
    description: string;
    size: string;
    type: string;
    industry: string;
    website: string;
  };
  contact: {
    name: string;
    email: string;
    phone: string;
  };
  salary: {
    min: number;
    max: number;
    currency: string;
    period: string;
  };
  remote: boolean;
  publishedAt: string;
  expiresAt: string;
}

export interface JobApplication {
  id?: string;
  jobID: string;
  userID: string;
  companyName: string;
  jobTitle: string;
  description: string;
  location: string;
}
