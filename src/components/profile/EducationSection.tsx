import { Card, List, Space, Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import type { EducationItem } from '@/model/profile'

interface EducationSectionProps {
  items: EducationItem[]
}

function EducationSection({ items }: EducationSectionProps) {
  const { t } = useTranslation()
  
  return (
    <section className="section">
      <Space direction="vertical" size={16} className="section__header">
        <Typography.Title level={3} className="section__title">
          {t('sections.education.title')}
        </Typography.Title>
        <Typography.Text type="secondary">
          {t('sections.education.subtitle')}
        </Typography.Text>
      </Space>

      <List
        dataSource={items}
        renderItem={(edu) => (
          <List.Item>
            <Card className="section-card" bordered={false}>
              <Typography.Title level={4} className="section-card__title">
                {edu.school}
              </Typography.Title>
              <Typography.Text type="secondary">
                {edu.timeframe} · {edu.degree}
              </Typography.Text>
              {edu.gpa && (
                <Typography.Paragraph className="section-card__summary">
                  {edu.gpa}
                </Typography.Paragraph>
              )}
            </Card>
          </List.Item>
        )}
      />
    </section>
  )
}

export default EducationSection
