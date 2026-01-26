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
      description:
        'Hệ thống quản lý tính lương với khả năng tự động hóa tính toán lương và hoa hồng. Tham gia phát triển module import/export dữ liệu và tích hợp API banking để xử lý giao dịch. Tập trung vào performance optimization và data validation cho hệ thống.',
    },
    {
      name: 'HRM Core',
      timeframe: '04/2022 - Nay',
      role: 'Senior Developer',
      description:
        'Hệ thống quản lý nhân sự quản lý organizational structure, employee records, contracts và shift scheduling. Phát triển UI/UX với ReactJS và Ant Design, tập trung vào scalability và maintainability.',
    },
    {
      name: 'Candidate',
      timeframe: '06/2022 - 08/2022',
      role: 'Developer',
      description:
        'Hệ thống quản lý ứng viên với workflow engine cho phép cấu hình linh hoạt các bước phỏng vấn. Tham gia phát triển state management cho candidate journey, tích hợp analytics dashboard và collaboration features.',
    },
    {
      name: 'ZNS Chat',
      timeframe: '03/2022 - 05/2022',
      role: 'Developer',
      description:
        'Dịch vụ chat real-time tích hợp Zalo Official Account API. Phát triển WebSocket connection layer với Socket.IO và implement offline-first architecture với IndexedDB (DexieDB) để đồng bộ dữ liệu.',
    },
    {
      name: 'Cost',
      timeframe: '01/2022 - 04/2022',
      role: 'Developer',
      description:
        'Hệ thống quản lý mua sắm với approval workflow theo organizational hierarchy. Phát triển configurable request types và role-based assignment system để quản lý quy trình mua sắm.',
    },
    {
      name: 'Notification',
      timeframe: '01/2021 - 03/2021',
      role: 'Developer',
      description:
        'Hệ thống quản lý thông báo tập trung cho multi-platform (web/mobile app). Phát triển với React và Bootstrap, hỗ trợ quản lý alerts và banners với scheduling và targeting.',
    },
    {
      name: 'Fixle',
      timeframe: '11/2018 - 04/2019',
      role: 'Developer',
      description:
        'Nền tảng quản lý sửa chữa nhà multi-tenant phục vụ clients, companies và service providers. Phát triển role-based access control (RBAC) và workflow engine để quản lý job assignment và tracking.',
    },
    {
      name: 'Primary ITO',
      timeframe: '03/2019 - 12/2019',
      role: 'Developer',
      description:
        'Hệ thống quản lý đào tạo (LMS) cho Primary Sector với features quản lý workplaces, learners và training programs. Phát triển progress tracking dashboard và PDF report generation với customizable templates.',
    },
  ],
}
