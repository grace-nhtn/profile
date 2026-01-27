import { Card, Flex, List, Typography, theme } from 'antd'
import { useTranslation } from 'react-i18next'
import type { EducationItem } from '@/model/profile'
import { SECTION_STYLES } from '@/styles/constants'

interface EducationSectionProps {
  items: EducationItem[]
}

function EducationSection({ items }: EducationSectionProps) {
  const { t } = useTranslation()
  const { token: { colorText, colorTextSecondary, colorBorderSecondary, colorPrimary } } = theme.useToken()

  return (
    <section style={{ width: '100%' }}>
      <Flex vertical gap={5} style={{marginBottom: 15}}>
        <Typography.Title level={3} style={{ ...SECTION_STYLES.title, color: colorText }}>
          {t('sections.education.title')}
        </Typography.Title>
        <Typography.Text style={{ ...SECTION_STYLES.subtitle, color: colorTextSecondary }}>
          {t('sections.education.subtitle')}
        </Typography.Text>
      </Flex>

      <List
        dataSource={items}
        renderItem={(edu) => (
          <List.Item style={{ borderBlockEnd: `1px solid ${colorBorderSecondary}` }}>
            <Card style={{ width: '100%', borderTop: `4px solid ${colorPrimary}` }}>
              <Typography.Title level={4} style={{ fontSize: 18, marginBottom: 4 }}>
                {edu.school}
              </Typography.Title>
              <Typography.Text type="secondary" style={{ display: 'block', marginBottom: 8 }}>
                {edu.timeframe} · {edu.degree}
              </Typography.Text>
              {edu.gpa && (
                <Typography.Paragraph style={{ margin: 0 }}>
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
