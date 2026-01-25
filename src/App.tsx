import { Layout, Space, Typography, Button } from 'antd'
import HeroSection from '@/components/HeroSection'
import ExperienceSection from '@/components/ExperienceSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import EducationSection from '@/components/EducationSection'
import ContactSection from '@/components/ContactSection'
import { profileData } from '@/constants/profile'
import '@/styles/app.scss'

const { Header, Content, Footer } = Layout

function App() {
  const cvUrl = `${import.meta.env.BASE_URL}cv.pdf`
  
  return (
    <Layout className="layout-shell">
      <Header className="layout-shell__header">
        <div className="layout-shell__brand-wrapper">
          <Typography.Title level={4} className="layout-shell__brand">
            Profile
          </Typography.Title>
        </div>
        <Button
          type="primary"
          className="layout-shell__cv-button"
          href={cvUrl}
          target="_blank"
        >
          Download CV
        </Button>
      </Header>

      <Content className="layout-shell__content">
        <Space
          direction="vertical"
          size="large"
          className="layout-shell__sections"
        >
          <HeroSection profile={profileData} />
          <ExperienceSection items={profileData.experience} />
          <SkillsSection items={profileData.skills} />
          <ProjectsSection items={profileData.projects} />
          <EducationSection items={profileData.education} />
          <ContactSection contact={profileData.contact} />
        </Space>
      </Content>

      <Footer className="layout-shell__footer">
        <Typography.Text>
          © {new Date().getFullYear()} Nguyen Hoai Thanh Ngoc
        </Typography.Text>
      </Footer>
    </Layout>
  )
}

export default App
