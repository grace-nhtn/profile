import type { BlogData } from '@/model/blog'

export const blogData: BlogData = {
  posts: [
    // Sample blog posts - can be expanded later
    {
      id: '1',
      title: 'Getting Started with React and TypeScript',
      excerpt:
        'Learn how to set up a modern React application with TypeScript for better type safety and developer experience.',
      content: 'Full blog post content here...',
      author: 'Nguyen Hoai Thanh Ngoc',
      publishDate: '2024-01-15',
      category: 'Development',
      tags: ['React', 'TypeScript', 'Frontend'],
    },
    {
      id: '2',
      title: 'Best Practices for Frontend Architecture',
      excerpt:
        'Exploring scalable frontend architecture patterns and how to structure large React applications.',
      content: 'Full blog post content here...',
      author: 'Nguyen Hoai Thanh Ngoc',
      publishDate: '2024-02-20',
      category: 'Architecture',
      tags: ['Architecture', 'React', 'Best Practices'],
    },
  ],
}
