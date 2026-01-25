import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'
import '@/styles/global.scss'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        cssVar: {
          key: 'app',
        },
      }}
    >
    <App />
    </ConfigProvider>
  </StrictMode>,
)
