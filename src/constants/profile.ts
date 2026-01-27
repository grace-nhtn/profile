import type { ProfileData } from '@/model/profile'

export const profileData: ProfileData = {
  name: 'Nguyen Hoai Thanh Ngoc',
  title: 'Senior Frontend Developer',
  intro:
    'Hơn 6 năm kinh nghiệm phát triển frontend với ReactJS và TypeScript. Tham gia thiết kế và phát triển các ứng dụng web, tập trung vào performance, maintainability và user experience. Đóng góp vào việc xây dựng kiến trúc scalable và hỗ trợ team members. Đang học hỏi và mở rộng kiến thức sang backend để hướng tới full-stack development.',
  cvLink: '/cv.pdf',
  contact: {
    email: 'ngocnht.uit@gmail.com',
    location: 'District Binh Thanh, Ho Chi Minh City, Vietnam',
  },
  experience: [
    {
      company: 'GHN Express',
      role: 'Senior Frontend Developer',
      start: '07/2020',
      end: 'Hiện tại',
      summary:
        'Tham gia phát triển và nâng cấp các sản phẩm nội bộ, đóng góp vào việc thiết kế kiến trúc frontend và các quyết định kỹ thuật. Phối hợp với các team khác để đảm bảo chất lượng và tính nhất quán của sản phẩm.',
      highlights: [
        'Phát triển các tính năng phức tạp, tập trung vào performance và khả năng mở rộng của ứng dụng',
        'Tham gia xây dựng foundation architecture và coding standards để cải thiện maintainability',
        'Hỗ trợ và chia sẻ kinh nghiệm với các thành viên mới về best practices và project structure',
      ],
    },
    {
      company: 'Beesight Soft',
      role: 'Frontend Developer',
      start: '06/2018',
      end: '06/2020',
      summary:
        'Tham gia phát triển đa dạng các dự án outsourcing với stack ReactJS và PhoneGap. Đảm nhiệm việc phân tích requirements, đánh giá technical feasibility và thiết kế solution architecture phù hợp với business needs của khách hàng.',
      highlights: [
        'Phân tích và đánh giá technical requirements, đề xuất optimal solutions dựa trên constraints và best practices',
        'Phát triển các ứng dụng web responsive và mobile hybrid applications sử dụng ReactJS, đảm bảo cross-platform compatibility',
      ],
    },
  ],
  education: [
    {
      school:
        'University of Information Technology - VNUHCM (Computer Network and Communication)',
      degree: 'Bachelor',
      timeframe: '09/2015 - 06/2020',
      gpa: 'GPA 7.8/10',
    },
  ],
  certifications: [],
  skills: [
    {
      label: 'Ngôn ngữ',
      items: ['Javascript', 'Typescript', 'CSS', 'HTML', "Golang"],
    },
    {
      label: 'Framework',
      items: ['ReactJS'],
    },
    {
      label: 'Thư viện & Công cụ',
      items: ['Ant Design', 'Bootstrap', 'Redux', 'Tailwind CSS'],
    },
  ],
  projects: [
    {
      name: 'Payroll',
      timeframe: '09/2022 - Nay',
      role: 'Senior Developer',
      translationKey: 'payroll',
    },
    {
      name: 'HRM Core',
      timeframe: '04/2022 - Nay',
      role: 'Senior Developer',
      translationKey: 'hrm',
    },
    {
      name: 'Candidate',
      timeframe: '06/2022 - 08/2022',
      role: 'Developer',
      translationKey: 'candidate',
    },
    {
      name: 'ZNS Chat',
      timeframe: '03/2022 - 05/2022',
      role: 'Developer',
      translationKey: 'znsChat',
    },
    {
      name: 'Cost',
      timeframe: '01/2022 - 04/2022',
      role: 'Developer',
      translationKey: 'cost',
    },
    {
      name: 'Notification',
      timeframe: '01/2021 - 03/2021',
      role: 'Developer',
      translationKey: 'notification',
    },
    {
      name: 'Fixle',
      timeframe: '11/2018 - 04/2019',
      role: 'Developer',
      translationKey: 'fixle',
    },
    {
      name: 'Primary ITO',
      timeframe: '03/2019 - 12/2019',
      role: 'Developer',
      translationKey: 'primaryITO',
    },
  ],
}
