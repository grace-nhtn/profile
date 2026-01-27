import { Menu } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  UserOutlined,
  BookOutlined,
  FolderOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'

type MenuItem = Required<MenuProps>['items'][number]

function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useTranslation()

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
    <div className="sidebar">
      <div className="sidebar__logo">
        <UserOutlined className="sidebar__logo-icon" />
      </div>
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
        onClick={handleMenuClick}
        className="sidebar__menu"
      />
    </div>
  )
}

export default Sidebar
