import { Card, List, Space, Typography } from 'antd'
import type { EducationItem } from '@/model/profile'

interface EducationSectionProps {
  items: EducationItem[]
}

function EducationSection({ items }: EducationSectionProps) {
  return (
    <section className="section">
      <Space direction="vertical" size={16} className="section__header">
        <Typography.Title level={3} className="section__title">
          Học vấn
        </Typography.Title>
        <Typography.Text type="secondary">
          Nền tảng chuyên môn tại UIT.
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
