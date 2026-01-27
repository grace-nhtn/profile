import { Menu, Layout, theme } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  UserOutlined,
  BookOutlined,
  FolderOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'

const { Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useTranslation()
  const {
    token: { colorPrimary, colorBgContainer, colorBorderSecondary },
  } = theme.useToken()

  const menuItems: MenuItem[] = [
    {
      key: '/',
      icon: <UserOutlined />,
      label: t('navigation.profile'),
    },
    {
      key: '/blog',
      icon: <BookOutlined />,
      label: t('navigation.blog'),
    },
    {
      key: '/portfolio',
      icon: <FolderOutlined />,
      label: t('navigation.portfolio'),
    },
  ]

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key)
  }

  return (
    <Sider
      width={240}
      style={{
        background: colorBgContainer,
        borderRight: `1px solid ${colorBorderSecondary}`,
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: `1px solid ${colorBorderSecondary}`,
        }}
      >
        <UserOutlined style={{ fontSize: 24, color: colorPrimary }} />
      </div>
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
        onClick={handleMenuClick}
        style={{ borderRight: 0, paddingTop: 16 }}
      />
    </Sider>
  )
}

export default Sidebar
