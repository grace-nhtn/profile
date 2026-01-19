import type { ProfileData } from '@/model/profile'

export const profileData: ProfileData = {
  name: 'Nguyen Hoai Thanh Ngoc',
  title: 'Web Developer (ReactJS / Ant Design)',
  intro:
    '4 năm kinh nghiệm với ReactJS, yêu thích thử thách và cải tiến sản phẩm. Mong muốn mở rộng sang backend và hướng tới full-stack.',
  cvLink: '/cv.pdf',
  contact: {
    phone: '0363295271',
    email: 'ngocnht.uit@gmail.com',
    location: 'District 7, Ho Chi Minh City, Vietnam',
  },
  experience: [
    {
      company: 'GHN Express',
      role: 'Web Developer',
      start: '06/2020',
      end: 'Hiện tại',
      summary:
        'Tham gia xây dựng và nâng cấp các sản phẩm nội bộ, phối hợp đa phòng ban và hỗ trợ onboard thành viên mới.',
      highlights: [
        'Đề xuất và triển khai các tính năng cần thiết cho sản phẩm',
        'Hỗ trợ xây dựng nền tảng code cho các dự án tương lai',
        'Mentor thành viên mới về quy trình và kiến trúc dự án',
      ],
    },
    {
      company: 'Beesight Soft',
      role: 'Web Developer',
      start: '06/2018',
      end: '02/2020',
      summary:
        'Làm outsourcing đa dạng dự án ReactJS/PhoneGap, đánh giá yêu cầu, đưa giải pháp và triển khai.',
      highlights: [
        'Phân tích khả thi và đề xuất giải pháp cho yêu cầu khách hàng',
        'Xây dựng các ứng dụng web và mobile hybrid bằng ReactJS',
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
      items: ['Javascript', 'Typescript', 'CSS', 'HTML'],
    },
    {
      label: 'Framework',
      items: ['ReactJS'],
    },
    {
      label: 'Thư viện & Công cụ',
      items: ['Ant Design', 'Bootstrap', 'Redux'],
    },
  ],
  projects: [
    {
      name: 'Payroll',
      timeframe: '09/2022 - Nay',
      role: 'Developer',
      description:
        'Hệ thống quản lý CnB, tự động tính lương/hoa hồng, import/export dữ liệu và tích hợp giao dịch ngân hàng.',
    },
    {
      name: 'HRM Core',
      timeframe: '04/2022 - Nay',
      role: 'Developer',
      description:
        'Hệ thống quản lý nhân sự: phòng ban, nhân viên, hợp đồng, ca làm việc; xây dựng UI với ReactJS + Ant Design.',
    },
    {
      name: 'Candidate',
      timeframe: '06/2022 - 08/2022',
      role: 'Developer',
      description:
        'Quản lý ứng viên end-to-end: cấu hình bước phỏng vấn, hành động theo step, phân tích và cộng tác.',
    },
    {
      name: 'ZNS Chat',
      timeframe: '03/2022 - 05/2022',
      role: 'Developer',
      description:
        'Chat service tích hợp Zalo, realtime qua Socket.IO và lưu trữ với DexieDB.',
    },
    {
      name: 'Cost',
      timeframe: '01/2022 - 04/2022',
      role: 'Developer',
      description:
        'Quản lý quy trình mua sắm theo phòng ban, cấu hình loại yêu cầu và người phụ trách.',
    },
    {
      name: 'CRM',
      timeframe: '04/2021 - Nay',
      role: 'Developer',
      description:
        'Quản lý khách hàng, hợp đồng, ví và chuyển khoản; công cụ import dữ liệu lớn và cấu hình game engagement.',
    },
    {
      name: 'Notification',
      timeframe: '01/2021 - 03/2021',
      role: 'Developer',
      description:
        'Hệ thống quản lý thông báo (alert/banner) cho web/app, xây dựng với React Bootstrap.',
    },
    {
      name: 'Fixle',
      timeframe: '11/2018 - 04/2019',
      role: 'Developer',
      description:
        'Ứng dụng quản lý sửa chữa nhà cho client/company/provider, hỗ trợ phân quyền và luồng giao việc.',
    },
    {
      name: 'Primary ITO',
      timeframe: '03/2019 - 12/2019',
      role: 'Developer',
      description:
        'Ứng dụng training cho Primary Sector, quản lý workplace/learner, theo dõi tiến độ và tạo báo cáo PDF.',
    },
  ],
}
