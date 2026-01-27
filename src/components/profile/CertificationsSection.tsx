import { Card, List, Space, Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import type { CertificationItem } from '@/model/profile'

interface CertificationsSectionProps {
  items: CertificationItem[]
}

function CertificationsSection({ items }: CertificationsSectionProps) {
  const { t } = useTranslation()
  
  if (!items || items.length === 0) {
    return null
  }
  
  return (
    <section className="section">
      <Space direction="vertical" size={16} className="section__header">
        <Typography.Title level={3} className="section__title">
          {t('sections.certifications.title')}
        </Typography.Title>
        <Typography.Text type="secondary">
          {t('sections.certifications.subtitle')}
        </Typography.Text>
      </Space>

      <List
        dataSource={items}
        renderItem={(item) => (
          <List.Item>
            <Card className="section-card" bordered={false}>
              <Space direction="vertical" size={4}>
                <Typography.Title level={4} className="section-card__title">
                  {item.name}
                </Typography.Title>
                <Typography.Text type="secondary">
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
              </Space>
            </Card>
          </List.Item>
        )}
      />
    </section>
  )
}

export default CertificationsSection
