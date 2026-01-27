import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '@/components/layout/Layout'
import ProfilePage from '@/pages/profile'
import BlogPage from '@/pages/blog'
import PortfolioPage from '@/pages/portfolio'

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
