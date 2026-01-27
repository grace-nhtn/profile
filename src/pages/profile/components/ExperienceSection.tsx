import { Card, Flex, List, Tag, Typography, theme } from 'antd'
import { useTranslation } from 'react-i18next'
import type { ExperienceItem } from '@/model/profile'
import { SECTION_STYLES } from '@/styles/constants'

interface ExperienceSectionProps {
  items: ExperienceItem[]
}

function ExperienceSection({ items }: ExperienceSectionProps) {
  const { t } = useTranslation()
  const { token: { colorText, colorTextSecondary, colorBorderSecondary, colorPrimary } } = theme.useToken()

  return (
    <section style={{ width: '100%' }}>
      <Flex vertical gap={5} style={{marginBottom: 15}}>
        <Typography.Title level={3} style={{ ...SECTION_STYLES.title, color: colorText }}>
          {t('sections.experience.title')}
        </Typography.Title>
        <Typography.Text style={{ ...SECTION_STYLES.subtitle, color: colorTextSecondary }}>
          {t('sections.experience.subtitle')}
        </Typography.Text>
      </Flex>

      <List
        dataSource={items}
        renderItem={(item) => (
          <List.Item style={{ borderBlockEnd: `1px solid ${colorBorderSecondary}`, padding: '24px 0' }}>
            <Card style={{ width: '100%', borderTop: `4px solid ${colorPrimary}` }}>
              <Flex vertical gap={8}>
                <Flex gap={8} wrap align="center">
                  <Typography.Title level={4} style={{ fontSize: 18, margin: 0 }}>
                    {item.company}
                  </Typography.Title>
                  <Tag color="blue">{item.role}</Tag>
                </Flex>
                <Typography.Text type="secondary">
                  {item.start} - {item.end === 'Hiện tại' ? t('common.current') : item.end}
                </Typography.Text>
                <Typography.Paragraph style={{ marginBottom: 16 }}>
                  {item.summary}
                </Typography.Paragraph>
              </Flex>

              <List
                size="small"
                dataSource={item.highlights}
                split={false}
                renderItem={(line) => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <Typography.Text>• {line}</Typography.Text>
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
