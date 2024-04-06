export interface Job {
  id: string;
  jobID: string;
  username: string;
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
  Username: string;
  companyName: string;
  title: string;
  description: string;
  location: string;
}

interface Notification {
  string: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  phonenumber: string;
  dob: string;
  address: string;
  profilepicture: string;
  country: string;
  state: string;
  pushnotification: boolean;
  Notifications: Notification;
}
