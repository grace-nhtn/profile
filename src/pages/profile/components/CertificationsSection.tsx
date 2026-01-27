import { Card, Flex, List, Typography, theme } from 'antd'
import { useTranslation } from 'react-i18next'
import type { CertificationItem } from '@/model/profile'
import { SECTION_STYLES } from '@/styles/constants'

interface CertificationsSectionProps {
  items: CertificationItem[]
}

function CertificationsSection({ items }: CertificationsSectionProps) {
  const { t } = useTranslation()
  const { token: { colorText, colorTextSecondary, colorBorderSecondary, colorPrimary } } = theme.useToken()
  
  if (!items || items.length === 0) {
    return null
  }
  
  return (
    <section style={{ width: '100%' }}>
      <Flex vertical gap={5} style={{marginBottom: 15}}>
        <Typography.Title level={3} style={{ ...SECTION_STYLES.title, color: colorText }}>
          {t('sections.certifications.title')}
        </Typography.Title>
        <Typography.Text style={{ ...SECTION_STYLES.subtitle, color: colorTextSecondary }}>
          {t('sections.certifications.subtitle')}
        </Typography.Text>
      </Flex>

      <List
        dataSource={items}
        renderItem={(item) => (
          <List.Item style={{ borderBlockEnd: `1px solid ${colorBorderSecondary}` }}>
            <Card style={{ width: '100%', borderTop: `4px solid ${colorPrimary}` }}>
              <Flex vertical gap={4}>
                <Typography.Title level={4} style={{ fontSize: 18, marginBottom: 4 }}>
                  {item.name}
                </Typography.Title>
                <Typography.Text type="secondary" style={{ display: 'block' }}>
                  {item.issuer} · {item.issueDate}
                  {item.expiryDate && ` - ${item.expiryDate}`}
                </Typography.Text>
                {item.credentialId && (
                  <Typography.Text type="secondary" style={{ fontSize: '14px' }}>
                    Credential ID: {item.credentialId}
                  </Typography.Text>
                )}
                {item.credentialUrl && (
                  <Typography.Link href={item.credentialUrl} target="_blank" rel="noreferrer">
                    View Credential
                  </Typography.Link>
                )}
              </Flex>
            </Card>
          </List.Item>
        )}
      />
    </section>
  )
}

export default CertificationsSection
