import { Card, Col, Row, Space, Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import type { ProjectItem } from '@/model/profile'

interface ProjectsSectionProps {
  items: ProjectItem[]
}

function ProjectsSection({ items }: ProjectsSectionProps) {
  const { t } = useTranslation()
  
  return (
    <section className="section">
      <Space direction="vertical" size={16} className="section__header">
        <Typography.Title level={3} className="section__title">
          {t('sections.projects.title')}
        </Typography.Title>
        <Typography.Text type="secondary">
          {t('sections.projects.subtitle')}
        </Typography.Text>
      </Space>

      <Row gutter={[16, 16]}>
        {items.map((project) => {
          const timeframe = project.timeframe.replace('Nay', t('common.present'))
          const roleKey = project.role === 'Senior Developer' ? 'common.seniorDeveloper' : 'common.developer'
          
          return (
            <Col key={project.name} xs={24} sm={12}>
              <Card className="section-card project-card" bordered={false}>
                <Space direction="vertical" size={8}>
                  <Typography.Title level={4} className="section-card__title">
                    {project.name}
                  </Typography.Title>
                  <Typography.Text type="secondary">
                    {timeframe} · {t(roleKey)}
                  </Typography.Text>
                  <Typography.Paragraph className="section-card__summary">
                    {t(`projects.${project.translationKey}.description`)}
                  </Typography.Paragraph>
                </Space>
              </Card>
            </Col>
          )
        })}
      </Row>
    </section>
  )
}

export default ProjectsSection
