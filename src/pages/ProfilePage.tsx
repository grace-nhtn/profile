import { Space } from 'antd'
import HeroSection from '@/components/profile/HeroSection'
import EducationSection from '@/components/profile/EducationSection'
import ExperienceSection from '@/components/profile/ExperienceSection'
import SkillsSection from '@/components/profile/SkillsSection'
import CertificationsSection from '@/components/profile/CertificationsSection'
import ContactSection from '@/components/profile/ContactSection'
import { profileData } from '@/constants/profile'

function ProfilePage() {
  return (
    <div className="profile-page">
      <Space
        direction="vertical"
        size="large"
        className="profile-page__sections"
      >
        <HeroSection profile={profileData} />
        <EducationSection items={profileData.education} />
        <ExperienceSection items={profileData.experience} />
        <SkillsSection items={profileData.skills} />
        {profileData.certifications && profileData.certifications.length > 0 && (
          <CertificationsSection items={profileData.certifications} />
        )}
        <ContactSection contact={profileData.contact} />
      </Space>
    </div>
  )
}

export default ProfilePage
