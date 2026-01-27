import { Row, Col, Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import BlogCard from './BlogCard'
import type { BlogPost } from '@/model/blog'

interface BlogListProps {
  posts: BlogPost[]
}

function BlogList({ posts }: BlogListProps) {
  const { t } = useTranslation()

  if (posts.length === 0) {
    return (
      <div className="blog-page__empty">
        <Typography.Text type="secondary">
          {t('blog.empty', 'No blog posts yet. Check back soon!')}
        </Typography.Text>
      </div>
    )
  }

  return (
    <Row gutter={[24, 24]}>
      {posts.map((post) => (
        <Col key={post.id} xs={24} sm={12} lg={8}>
          <BlogCard post={post} />
        </Col>
      ))}
    </Row>
  )
}

export default BlogList
