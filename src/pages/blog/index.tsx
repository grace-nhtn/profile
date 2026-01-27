import { Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import BlogList from './components/BlogList'
import { blogData } from '@/constants/blog'

function BlogPage() {
  const { t } = useTranslation()

  return (
    <div className="blog-page">
      <div className="blog-page__header">
        <Typography.Title level={2}>{t('navigation.blog')}</Typography.Title>
        <Typography.Text type="secondary">
          {t('blog.subtitle', 'Thoughts, tutorials, and insights on web development.')}
        </Typography.Text>
      </div>
      <BlogList posts={blogData.posts} />
    </div>
  )
}

export default BlogPage
