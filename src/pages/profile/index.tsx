import { Space } from 'antd'
import HeroSection from './components/HeroSection'
import EducationSection from './components/EducationSection'
import ExperienceSection from './components/ExperienceSection'
import SkillsSection from './components/SkillsSection'
import CertificationsSection from './components/CertificationsSection'
import { profileData } from '@/constants/profile'

function ProfilePage() {
  return (
    <Space
      direction="vertical"
      size="large"
      style={{ width: '100%' }}
    >
      <HeroSection profile={profileData} />
      <EducationSection items={profileData.education} />
      <ExperienceSection items={profileData.experience} />
      <SkillsSection items={profileData.skills} />
      {profileData.certifications && profileData.certifications.length > 0 && (
        <CertificationsSection items={profileData.certifications} />
      )}
    </Space>
  )
}

export default ProfilePage
