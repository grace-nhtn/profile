import { Card, Flex, Tag, Typography, theme } from 'antd'
import { CalendarOutlined, UserOutlined } from '@ant-design/icons'
import type { BlogPost } from '@/model/blog'

interface BlogCardProps {
  post: BlogPost
}

function BlogCard({ post }: BlogCardProps) {
  const {
    token: { colorTextSecondary, colorText },
  } = theme.useToken()

  return (
    <Card
      hoverable
      style={{
        height: '100%',
        borderRadius: 12,
        overflow: 'hidden',
      }}
      bodyStyle={{ padding: 24 }}
      cover={
        post.imageUrl ? (
          <img
            alt={post.title}
            src={post.imageUrl}
            style={{
              width: '100%',
              height: 200,
              objectFit: 'cover',
            }}
          />
        ) : null
      }
    >
      <Flex vertical style={{ height: '100%' }}>
        <Tag color="blue" style={{ marginBottom: 12, width: 'fit-content' }}>
          {post.category}
        </Tag>
        <Typography.Title
          level={4}
          style={{
            margin: '0 0 12px 0',
            fontSize: 20,
            fontWeight: 600,
            color: colorText,
          }}
        >
          {post.title}
        </Typography.Title>
        <Typography.Paragraph
          ellipsis={{ rows: 3 }}
          style={{
            marginBottom: 16,
            color: colorTextSecondary,
            fontSize: 14,
            lineHeight: 1.6,
            flex: 1,
          }}
        >
          {post.excerpt}
        </Typography.Paragraph>
        <Flex
          justify="space-between"
          align="center"
          style={{
            marginBottom: 12,
            width: '100%',
          }}
        >
          <Flex gap={4} align="center">
            <UserOutlined />
            <Typography.Text type="secondary" style={{ fontSize: '14px' }}>
              {post.author}
            </Typography.Text>
          </Flex>
          <Flex gap={4} align="center">
            <CalendarOutlined />
            <Typography.Text type="secondary" style={{ fontSize: '14px' }}>
              {new Date(post.publishDate).toLocaleDateString()}
            </Typography.Text>
          </Flex>
        </Flex>
        <Flex gap={8} wrap style={{ marginTop: 'auto' }}>
          {post.tags.map((tag) => (
            <Tag key={tag} style={{ fontSize: '14px', margin: 0 }}>
              {tag}
            </Tag>
          ))}
        </Flex>
      </Flex>
    </Card>
  )
}

export default BlogCard
