import { Space, Button, Typography, Layout, theme } from 'antd'
import { useTranslation } from 'react-i18next'
import { GlobalOutlined, DownloadOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'

const { Header: AntHeader } = Layout

function Header() {
  const { t, i18n } = useTranslation()
  const [currentLang, setCurrentLang] = useState(i18n.language)
  const cvUrl = `${import.meta.env.BASE_URL}cv.pdf`
  const {
    token: { colorBgContainer, colorBorderSecondary },
  } = theme.useToken()

  useEffect(() => {
    setCurrentLang(i18n.language)
  }, [i18n.language])

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'vi' : 'en'
    i18n.changeLanguage(newLang)
    setCurrentLang(newLang)
  }

  return (
    <AntHeader
      style={{
        background: colorBgContainer,
        borderBottom: `1px solid ${colorBorderSecondary}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        width: '100%',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography.Title level={4} style={{ margin: 0, fontSize: 20 }}>
          {t('common.profile')}
        </Typography.Title>
      </div>
      <Space>
        <Button icon={<GlobalOutlined />} onClick={toggleLanguage}>
          {currentLang === 'en' ? 'VI' : 'EN'}
        </Button>
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          href={cvUrl}
          target="_blank"
        >
          {t('common.downloadCV')}
        </Button>
      </Space>
    </AntHeader>
  )
}

export default Header
