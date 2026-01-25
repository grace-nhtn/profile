import { Card, Flex, Space, Typography } from 'antd'
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons'
import type { ContactInfo } from '@/model/profile'

interface ContactSectionProps {
  contact: ContactInfo
}

function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section className="section section--contact">
      <Space direction="vertical" size={16} className="section__header">
        <Typography.Title level={3} className="section__title">
          Liên hệ
        </Typography.Title>
        <Typography.Text type="secondary">
          Sẵn sàng cho cơ hội remote/freelance và mở rộng sang backend.
        </Typography.Text>
      </Space>

      <Card className="section-card" bordered={false}>
        <Space direction="vertical" size={12} style={{ width: '100%' }}>
          <Flex gap={10} align="center" justify="flex-start">
            <MailOutlined />
            <Typography.Link href={`mailto:${contact.email}`}>
              {contact.email}
            </Typography.Link>
          </Flex>
          <Flex gap={10} align="center" justify="flex-start">
            <PhoneOutlined />
            <Typography.Link href={`tel:${contact.phone}`}>
              {contact.phone}
            </Typography.Link>
          </Flex>
          <Flex gap={10} align="center" justify="flex-start">
            <EnvironmentOutlined />
            <Typography.Text>{contact.location}</Typography.Text>
          </Flex>
        </Space>
      </Card>
    </section>
  )
}

export default ContactSection
