import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '@/components/layout/Layout'
import ProfilePage from '@/pages/ProfilePage'
import BlogPage from '@/pages/BlogPage'
import PortfolioPage from '@/pages/PortfolioPage'
import '@/styles/app.scss'

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
