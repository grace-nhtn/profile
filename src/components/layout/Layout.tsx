import { Layout as AntLayout } from 'antd'
import Sidebar from './Sidebar'
import Header from './Header'
import type { ReactNode } from 'react'

const { Content, Footer } = AntLayout

interface MainLayoutProps {
  children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <AntLayout className="main-layout">
      <Sidebar />
      <AntLayout className="main-layout__content">
        <Header />
        <Content className="main-layout__main">
          {children}
        </Content>
        <Footer className="main-layout__footer">
          © {new Date().getFullYear()} Nguyen Hoai Thanh Ngoc
        </Footer>
      </AntLayout>
    </AntLayout>
  )
}

export default MainLayout
