export interface ContactInfo {
  email: string
  phone: string
  location: string
}

export interface ExperienceItem {
  company: string
  role: string
  start: string
  end: string
  summary: string
  highlights: string[]
}

export interface EducationItem {
  school: string
  degree: string
  timeframe: string
  gpa?: string
}

export interface SkillGroup {
  label: string
  items: string[]
}

export interface ProjectItem {
  name: string
  timeframe: string
  role: string
  description: string
}

export interface ProfileData {
  name: string
  title: string
  intro: string
  avatar?: string
  contact: ContactInfo
  experience: ExperienceItem[]
  education: EducationItem[]
  skills: SkillGroup[]
  projects: ProjectItem[]
  cvLink: string
}
