import { Button, Flex, Space, Typography } from 'antd'
import {
  DownloadOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import type { ProfileData } from '@/model/profile'

interface HeroSectionProps {
  profile: ProfileData
}

function HeroSection({ profile }: HeroSectionProps) {
  const { t } = useTranslation()
  const cvUrl = `${import.meta.env.BASE_URL}cv.pdf`
  
  return (
    <section className="section section--hero">
      <div className="hero-content">
        <div className="hero-content__avatar-wrapper">
          <img
            src={`${import.meta.env.BASE_URL}avatar.jpg`}
            alt={profile.name}
            className="hero-content__avatar-img"
            onError={(e) => {
              console.error('Avatar failed to load, trying fallback')
              const target = e.target as HTMLImageElement
              target.src = '/avatar.jpg'
            }}
          />
        </div>
        <div className="hero-content__right">
          <Space direction="vertical" size={16} className="hero-content__main">
            <Typography.Title level={1} className="hero-content__title">
              {profile.name}
            </Typography.Title>
            <Typography.Text className="hero-content__subtitle">
              {t('hero.title')}
            </Typography.Text>
            <Typography.Paragraph className="hero-content__description">
              {t('hero.intro')}
            </Typography.Paragraph>
          </Space>

          <Flex gap={12} wrap className="hero-content__actions">
            <Button
              type="primary"
              size="large"
              icon={<DownloadOutlined />}
              href={cvUrl}
              target="_blank"
              rel="noreferrer"
              className="hero-content__cv-button"
            >
              {t('common.downloadCV')}
            </Button>
            <Button
              size="large"
              icon={<MailOutlined />}
              href={`mailto:${profile.contact.email}`}
              className="hero-content__contact-button"
            >
              {profile.contact.email}
            </Button>
          </Flex>

          <Flex gap={8} align="center" className="hero-content__location">
            <EnvironmentOutlined />
            <Typography.Text>{profile.contact.location}</Typography.Text>
          </Flex>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
