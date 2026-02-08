export interface PersonalInfo {
  name: string;
  title: string;
  dateOfBirth: string;
  phone: string;
  email: string;
  gender?: string;
}

export interface Education {
  school: string;
  major: string;
  period: {
    start: string;
    end: string;
  };
  gpa?: string;
}

export interface Skill {
  name: string;
  category: 'language' | 'framework' | 'library' | 'tool';
}

export interface WorkExperience {
  company: string;
  position: string;
  period: {
    start: string;
    end: string;
  };
  description: string[];
  technologies?: string[];
}

export interface Project {
  name: string;
  role: string;
  period: {
    start: string;
    end: string;
  };
  description: string[];
  technologies: string[];
  keywords: string[];
}

export interface Certificate {
  name: string;
  source: string;
  file: string;
}

export interface CVData {
  personalInfo: PersonalInfo;
  education: Education;
  skills: Skill[];
  workExperience: WorkExperience[];
  projects: Project[];
  certificates: Certificate[];
}
