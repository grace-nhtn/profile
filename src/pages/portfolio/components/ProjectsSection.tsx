import { Card, Col, Flex, Row, Typography, theme } from 'antd'
import { useTranslation } from 'react-i18next'
import type { ProjectItem } from '@/model/profile'
import { SECTION_STYLES } from '@/styles/constants'

interface ProjectsSectionProps {
  items: ProjectItem[]
}

function ProjectsSection({ items }: ProjectsSectionProps) {
  const { t } = useTranslation()
  const {
    token: { colorTextSecondary, colorText, colorBgContainer, colorBorderSecondary, colorPrimary },
  } = theme.useToken()

  return (
    <section
      style={{
        ...SECTION_STYLES.container,
        backgroundColor: colorBgContainer,
        border: `1px solid ${colorBorderSecondary}`,
        minHeight: 300,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Flex vertical gap={16} style={{ marginBottom: 24, width: '100%', alignItems: 'flex-start' }}>
        <Typography.Title
          level={3}
          style={{
            ...SECTION_STYLES.title,
            color: colorText,
            position: 'relative',
            paddingLeft: 18,
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 6,
              width: 4,
              height: 28,
              borderRadius: 2,
              background: `linear-gradient(180deg, ${colorPrimary} 0%, ${colorPrimary} 100%)`,
            }}
          />
          {t('sections.projects.title')}
        </Typography.Title>
        <Typography.Text style={{ fontSize: 15, color: colorTextSecondary }}>
          {t('sections.projects.subtitle')}
        </Typography.Text>
      </Flex>

      <Row gutter={[16, 16]}>
        {items.map((project) => {
          const timeframe = project.timeframe.replace('Nay', t('common.present'))
          const roleKey =
            project.role === 'Senior Developer'
              ? 'common.seniorDeveloper'
              : 'common.developer'

          return (
            <Col key={project.name} xs={24} sm={12}>
              <Card
                hoverable
                style={{
                  height: '100%',
                  borderRadius: 10,
                  borderTop: `4px solid ${colorPrimary}`,
                }}
                bodyStyle={{ padding: 24 }}
                bordered={false}
              >
                <Flex vertical gap={8}>
                  <Typography.Title
                    level={4}
                    style={{ margin: 0, fontSize: 22, fontWeight: 600, color: colorText }}
                  >
                    {project.name}
                  </Typography.Title>
                  <Typography.Text style={{ fontSize: 15, color: colorTextSecondary }}>
                    {timeframe} · {t(roleKey)}
                  </Typography.Text>
                  <Typography.Paragraph
                    style={{
                      margin: '8px 0 0',
                      color: colorTextSecondary,
                      fontSize: 15,
                      lineHeight: 1.6,
                    }}
                  >
                    {t(`projects.${project.translationKey}.description`)}
                  </Typography.Paragraph>
                </Flex>
              </Card>
            </Col>
          )
        })}
      </Row>
    </section>
  )
}

export default ProjectsSection
