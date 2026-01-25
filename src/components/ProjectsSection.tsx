import { Card, Col, Row, Space, Typography } from 'antd'
import type { ProjectItem } from '@/model/profile'

interface ProjectsSectionProps {
  items: ProjectItem[]
}

function ProjectsSection({ items }: ProjectsSectionProps) {
  return (
    <section className="section">
      <Space direction="vertical" size={16} className="section__header">
        <Typography.Title level={3} className="section__title">
          Dự án tiêu biểu
        </Typography.Title>
        <Typography.Text type="secondary">
          Các dự án React/Ant Design đã tham gia.
        </Typography.Text>
      </Space>

      <Row gutter={[16, 16]}>
        {items.map((project) => (
          <Col key={project.name} xs={24} sm={12}>
            <Card className="section-card project-card" bordered={false}>
              <Space direction="vertical" size={8}>
                <Typography.Title level={4} className="section-card__title">
                  {project.name}
                </Typography.Title>
                <Typography.Text type="secondary">
                  {project.timeframe} · {project.role}
                </Typography.Text>
                <Typography.Paragraph className="section-card__summary">
                  {project.description}
                </Typography.Paragraph>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default ProjectsSection
