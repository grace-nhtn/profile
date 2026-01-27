import { Card, Tag, Space, Typography } from 'antd'
import { CalendarOutlined, UserOutlined } from '@ant-design/icons'
import type { BlogPost } from '@/model/blog'

interface BlogCardProps {
  post: BlogPost
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <Card
      className="blog-card"
      hoverable
      cover={
        post.imageUrl ? (
          <img
            alt={post.title}
            src={post.imageUrl}
            className="blog-card__image"
          />
        ) : null
      }
    >
      <div className="blog-card__content">
        <Tag color="blue" className="blog-card__category">
          {post.category}
        </Tag>
        <Typography.Title level={4} className="blog-card__title">
          {post.title}
        </Typography.Title>
        <Typography.Paragraph
          ellipsis={{ rows: 3 }}
          className="blog-card__excerpt"
        >
          {post.excerpt}
        </Typography.Paragraph>
        <Space className="blog-card__meta">
          <Space size={4}>
            <UserOutlined />
            <Typography.Text type="secondary" style={{ fontSize: '14px' }}>
              {post.author}
            </Typography.Text>
          </Space>
          <Space size={4}>
            <CalendarOutlined />
            <Typography.Text type="secondary" style={{ fontSize: '14px' }}>
              {new Date(post.publishDate).toLocaleDateString()}
            </Typography.Text>
          </Space>
        </Space>
        <div className="blog-card__tags">
          {post.tags.map((tag) => (
            <Tag key={tag} style={{ fontSize: '14px' }}>
              {tag}
            </Tag>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default BlogCard
