import { Space, Button, Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import { GlobalOutlined, DownloadOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'

function Header() {
  const { t, i18n } = useTranslation()
  const [currentLang, setCurrentLang] = useState(i18n.language)
  const cvUrl = `${import.meta.env.BASE_URL}cv.pdf`

  useEffect(() => {
    setCurrentLang(i18n.language)
  }, [i18n.language])

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'vi' : 'en'
    i18n.changeLanguage(newLang)
    setCurrentLang(newLang)
  }

  return (
    <header className="main-header">
      <div className="main-header__left">
        <Typography.Title level={4} className="main-header__brand">
          {t('common.profile')}
        </Typography.Title>
      </div>
      <Space className="main-header__actions">
        <Button
          icon={<GlobalOutlined />}
          onClick={toggleLanguage}
          className="main-header__lang-button"
        >
          {currentLang === 'en' ? 'VI' : 'EN'}
        </Button>
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          className="main-header__cv-button"
          href={cvUrl}
          target="_blank"
        >
          {t('common.downloadCV')}
        </Button>
      </Space>
    </header>
  )
}

export default Header
