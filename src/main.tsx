import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'
import '@/styles/global.scss'
import '@/i18n'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#2d6287',
          colorLink: '#2d6287',
          fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        },
        cssVar: {
          key: 'app',
        },
      }}
    >
    <App />
    </ConfigProvider>
  </StrictMode>,
)
