import { Card, List, Space, Tag, Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import type { ExperienceItem } from '@/model/profile'

interface ExperienceSectionProps {
  items: ExperienceItem[]
}

function ExperienceSection({ items }: ExperienceSectionProps) {
  const { t } = useTranslation()
  
  return (
    <section className="section">
      <Space direction="vertical" size={16} className="section__header">
        <Typography.Title level={3} className="section__title">
          {t('sections.experience.title')}
        </Typography.Title>
        <Typography.Text type="secondary">
          {t('sections.experience.subtitle')}
        </Typography.Text>
      </Space>

      <List
        dataSource={items}
        renderItem={(item) => (
          <List.Item>
            <Card className="section-card" bordered={false}>
              <Space
                direction="vertical"
                size={8}
                className="section-card__header"
              >
                <Space size={8} wrap align="center">
                  <Typography.Title level={4} className="section-card__title">
                    {item.company}
                  </Typography.Title>
                  <Tag color="blue">{item.role}</Tag>
                </Space>
                <Typography.Text type="secondary">
                  {item.start} - {item.end === 'Hiện tại' ? t('common.current') : item.end}
                </Typography.Text>
                <Typography.Paragraph className="section-card__summary">
                  {item.summary}
                </Typography.Paragraph>
              </Space>

              <List
                size="small"
                dataSource={item.highlights}
                renderItem={(line) => (
                  <List.Item className="section-card__bullet">
                    <Typography.Text>{line}</Typography.Text>
                  </List.Item>
                )}
              />
            </Card>
          </List.Item>
        )}
      />
    </section>
  )
}

export default ExperienceSection
