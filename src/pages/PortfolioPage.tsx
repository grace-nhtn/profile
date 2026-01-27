import { Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import { profileData } from '@/constants/profile'
import ProjectsSection from '@/components/portfolio/ProjectsSection'

function PortfolioPage() {
  const { t } = useTranslation()

  return (
    <div className="portfolio-page">
      <div className="portfolio-page__header">
        <Typography.Title level={2}>
          {t('navigation.portfolio')}
        </Typography.Title>
        <Typography.Text type="secondary">
          {t('portfolio.subtitle', 'A collection of my projects and work.')}
        </Typography.Text>
      </div>
      <ProjectsSection items={profileData.projects} />
    </div>
  )
}

export default PortfolioPage
