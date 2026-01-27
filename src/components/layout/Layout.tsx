import { Layout as AntLayout, theme } from 'antd'
import Sidebar from './Sidebar'
import Header from './Header'
import type { ReactNode } from 'react'

const { Content, Footer } = AntLayout

interface MainLayoutProps {
  children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  const {
    token: { colorBgContainer, colorTextSecondary, colorBorderSecondary },
  } = theme.useToken()

  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <AntLayout style={{ marginLeft: 240 }}>
        <Header />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
          }}
        >
          {children}
        </Content>
        <Footer
          style={{
            textAlign: 'center',
            background: colorBgContainer,
            color: colorTextSecondary,
            borderTop: `1px solid ${colorBorderSecondary}`,
          }}
        >
          © {new Date().getFullYear()} Nguyen Hoai Thanh Ngoc
        </Footer>
      </AntLayout>
    </AntLayout>
  )
}

export default MainLayout
