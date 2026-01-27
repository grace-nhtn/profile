import { Button, Card, Flex, Typography, theme } from 'antd'
import {
  DownloadOutlined,
  MailOutlined,
} from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import type { ProfileData } from '@/model/profile'

interface HeroSectionProps {
  profile: ProfileData
}

const HERO_STYLES = {
  background: 'linear-gradient(135deg, #1d5277 0%, #2d6287 50%, #3d7297 100%)',
  text: {
    primary: 'rgba(255, 255, 255, 0.95)',
    secondary: 'rgba(255, 255, 255, 0.9)',
  },
  button: {
    ghost: {
      bg: 'rgba(255, 255, 255, 0.15)',
      border: 'rgba(255, 255, 255, 0.3)',
    },
  },
  avatar: {
    border: '4px solid rgba(255, 255, 255, 0.3)',
    shadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
  },
}

function HeroSection({ profile }: HeroSectionProps) {
  const { t } = useTranslation()
  const cvUrl = `${import.meta.env.BASE_URL}cv.pdf`
  const { token: { colorBgContainer, colorTextLightSolid } } = theme.useToken()

  return (
    <Card
      style={{
        background: HERO_STYLES.background,
        padding: '48px 40px',
        color: colorTextLightSolid,
        borderRadius: 12,
      }}
    >
      <Flex gap={32} align="flex-start">
        <div style={{ flexShrink: 0 }}>
          <img
            src={`${import.meta.env.BASE_URL}avatar.jpg`}
            alt={profile.name}
            style={{
              width: 200,
              height: 250,
              borderRadius: 12,
              objectFit: 'cover',
              border: HERO_STYLES.avatar.border,
              boxShadow: HERO_STYLES.avatar.shadow,
              display: 'block',
            }}
            onError={(e) => {
              console.error('Avatar failed to load, trying fallback')
              const target = e.target as HTMLImageElement
              target.src = '/avatar.jpg'
            }}
          />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Flex vertical gap={16} style={{ width: '100%', alignItems: 'flex-start' }}>
            <Typography.Title
              level={1}
              style={{
                margin: 0,
                color: colorTextLightSolid,
                fontSize: 48,
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              {profile.name}
            </Typography.Title>
            <Typography.Text
              style={{
                fontSize: 20,
                color: HERO_STYLES.text.primary,
                fontWeight: 500,
              }}
            >
              {t('hero.title')}
            </Typography.Text>
            <Typography.Paragraph
              style={{
                fontSize: 16,
                color: HERO_STYLES.text.secondary,
                lineHeight: 1.6,
                marginBottom: 0,
              }}
            >
              {t('hero.intro')}
            </Typography.Paragraph>
          </Flex>

          <Flex gap={12} wrap style={{ marginTop: 8, justifyContent: 'flex-start', width: '100%' }}>
            <Button
              type="primary"
              size="large"
              icon={<DownloadOutlined />}
              href={cvUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                backgroundColor: colorBgContainer,
                color: '#2d6287',
                borderColor: colorBgContainer,
                height: 48,
                fontWeight: 600,
                fontSize: 16,
                padding: '0 32px',
              }}
            >
              {t('common.downloadCV')}
            </Button>
            <Button
              size="large"
              icon={<MailOutlined />}
              href={`mailto:${profile.contact.email}`}
              style={{
                backgroundColor: HERO_STYLES.button.ghost.bg,
                color: colorTextLightSolid,
                borderColor: HERO_STYLES.button.ghost.border,
                height: 48,
                fontWeight: 500,
                padding: '0 24px',
              }}
            >
              {t('common.sendEmail')}
            </Button>
          </Flex>

        </div>
      </Flex>
    </Card>
  )
}

export default HeroSection
