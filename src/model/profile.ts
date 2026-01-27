export interface ContactInfo {
  email: string
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
  translationKey: string
  description?: string // Optional, for backward compatibility
}

export interface CertificationItem {
  name: string
  issuer: string
  issueDate: string
  expiryDate?: string
  credentialId?: string
  credentialUrl?: string
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
  certifications?: CertificationItem[]
  cvLink: string
}
