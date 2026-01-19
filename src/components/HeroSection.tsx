import { Button, Flex, Space, Tag, Typography } from 'antd'
import {
  DownloadOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons'
import type { ProfileData } from '@/model/profile'

interface HeroSectionProps {
  profile: ProfileData
}

function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="section section--hero">
      <Space direction="vertical" size={12}>
        <Tag color="blue">{profile.title}</Tag>
        <Typography.Title level={2} className="section__title">
          {profile.name}
        </Typography.Title>
        <Typography.Paragraph className="section__intro">
          {profile.intro}
        </Typography.Paragraph>
      </Space>

      <Flex gap={12} wrap>
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          href={profile.cvLink}
          target="_blank"
          rel="noreferrer"
        >
          Download CV
        </Button>
        <Button icon={<MailOutlined />} href={`mailto:${profile.contact.email}`}>
          {profile.contact.email}
        </Button>
        <Button icon={<PhoneOutlined />} href={`tel:${profile.contact.phone}`}>
          {profile.contact.phone}
        </Button>
      </Flex>

      <Flex gap={8} align="center">
        <EnvironmentOutlined />
        <Typography.Text>{profile.contact.location}</Typography.Text>
      </Flex>
    </section>
  )
}

export default HeroSection
