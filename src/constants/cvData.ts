import { CVData } from '../model/cv';
import icCertificate from '../assets/images/IC-Certificate.pdf';

export const cvDataEn: CVData = {
  personalInfo: {
    name: 'Nguyen Hoai Thanh Ngoc',
    title: 'Front-end Developer',
    dateOfBirth: '23/05/1997',
    phone: '0363295271',
    email: 'mail@ngocnht.com',
    gender: 'Female',
  },
  education: {
    school: 'University of Information Technology - Vietnam National University Ho Chi Minh City',
    major: 'Computer Network and Communication',
    period: {
      start: 'Sept 2015',
      end: 'Jun 2020',
    },
    gpa: '7.8/10',
  },
  skills: [
    { name: 'JavaScript', category: 'language' },
    { name: 'TypeScript', category: 'language' },
    { name: 'CSS', category: 'language' },
    { name: 'HTML', category: 'language' },
    { name: 'ReactJS', category: 'framework' },
    { name: 'Bootstrap', category: 'library' },
    { name: 'Ant Design', category: 'library' },
    { name: 'Redux', category: 'library' },
  ],
  workExperience: [
    {
      company: 'GHN Express',
      position: 'Web Developer',
      period: {
        start: '6/2020',
        end: 'Now',
      },
      description: [
        'Developed and maintained multiple web applications using ReactJS and TypeScript, ensuring high code quality and performance.',
        'Collaborated with cross-functional teams including Product, Design, and Backend to deliver scalable front-end solutions.',
        'Mentored junior developers and onboarded new team members, improving team productivity and knowledge sharing.',
        'Architected and implemented reusable component libraries using Ant Design, reducing development time by 30%.',
        'Participated in technical discussions and contributed to architectural decisions for new projects.',
        'Optimized application performance through code splitting, lazy loading, and state management with Redux.',
      ],
      technologies: ['ReactJS', 'TypeScript', 'Redux', 'Ant Design', 'JavaScript'],
    },
    {
      company: 'Beesight Soft',
      position: 'Web Developer',
      period: {
        start: '6/2018',
        end: '2/2020',
      },
      description: [
        'Developed cross-platform mobile applications using PhoneGap and ReactJS for various client projects.',
        'Analyzed client requirements, evaluated project feasibility, and proposed technical solutions.',
        'Built responsive web applications with ReactJS, ensuring optimal user experience across devices.',
        'Collaborated with international clients to deliver high-quality software solutions.',
        'Gained experience in diverse project types including e-commerce, management systems, and training platforms.',
      ],
      technologies: ['ReactJS', 'PhoneGap', 'Redux', 'Bootstrap', 'JavaScript'],
    },
  ],
  projects: [
    {
      name: 'Salary & Bonus System',
      role: 'Developer',
      period: {
        start: '06/2024',
        end: 'Now',
      },
      description: [
        'Developed Salary & Bonus Management System (React 18, TypeScript, TailwindCSS) with Module Federation for micro-frontend architecture.',
        'Built policy management engines: truck driver salary (pricing, bonus algorithms, regional factors), shipment bonus/penalty (rule-based, tier rewards), commission (AOV shift config).',
        'Implemented exception management with approval workflows, salary rerun with transaction rollback, and policy configuration (Formik, Zod validation).',
        'Created Excel import/export with data transformation pipelines and reporting dashboards with aggregation for policy analysis.',
        'Optimized API calls by 35% using React Query with optimistic updates and implemented RBAC with role-based UI rendering.',
      ],
      technologies: ['React 18', 'TypeScript', 'TailwindCSS', 'React Query', 'Formik', 'Zod', 'Rspack', 'Module Federation'],
      keywords: ['Salary Management', 'Bonus Policy', 'Commission Policy', 'Policy Configuration', 'Exception Management', 'Salary Rerun', 'Logistics Management'],
    },
    {
      name: 'Payroll',
      role: 'Developer',
      period: {
        start: '09/2022',
        end: 'Now',
      },
      description: [
        'Architected Compensation & Benefits System (ReactJS, TypeScript, Ant Design) with component-based architecture and Redux Saga for async state management.',
        'Implemented formula calculation engine using HyperFormula for dynamic commission policy evaluation and complex mathematical operations.',
        'Built automated payslip generation with PDF export (jsPDF, html2canvas) and integrated bank APIs with retry mechanisms for payment processing.',
        'Developed bulk Excel import/export (ExcelJS) with chunked processing, data validation, and error tracking for large datasets.',
        'Created accounting dashboards (Recharts) with real-time updates and salary rerun mechanism with transaction rollback capabilities.',
        'Optimized API calls by 40% using React Query for intelligent caching and server state synchronization.',
      ],
      technologies: ['ReactJS', 'TypeScript', 'Ant Design', 'Redux', 'Redux Saga', 'React Query', 'HyperFormula', 'Recharts'],
      keywords: ['HRM', 'Payroll Management', 'Commission Policy', 'Formula Calculation', 'Bank API Integration', 'Payslip Generation', 'Tax Configuration', 'Accounting Reports'],
    },
    {
      name: 'HRM Core',
      role: 'Developer',
      period: {
        start: '04/2022',
        end: 'Now',
      },
      description: [
        'Built scalable HRM System (ReactJS, TypeScript, Ant Design) with feature-based architecture and RBAC implementation at component/route levels.',
        'Developed interactive organizational chart (react-organizational-chart) with drag-and-drop and virtual scrolling for large employee datasets.',
        'Implemented contract/leave management with multi-step approval workflows, e-contract integration, and automated balance calculations.',
        'Created bulk Excel import/export with chunked processing (50 records/batch), data validation, and comprehensive error reporting.',
        'Built audit logging system with before/after state tracking and rollback capabilities for critical data operations.',
        'Optimized performance using React Query for server state management with optimistic updates and intelligent caching.',
      ],
      technologies: ['ReactJS', 'TypeScript', 'Ant Design', 'Redux', 'Redux Saga', 'React Query'],
      keywords: ['HRM', 'Employee Management', 'Contract Management', 'Leave Management', 'Tax Settlement', 'RBAC', 'Excel Import/Export', 'Audit Logging', 'Organizational Chart'],
    },
    {
      name: 'Candidate',
      role: 'Developer',
      period: {
        start: '04/2022',
        end: 'Now',
      },
      description: [
        'Developed Candidate Management System (ReactJS, TypeScript, Ant Design, Redux) with dynamic workflow configuration engine.',
        'Built candidate tracking with stage-based progression, timeline visualization, and real-time collaboration with conflict resolution.',
        'Created analytics dashboard with data aggregation for time-to-hire metrics, candidate sources, and interview success rates.',
        'Implemented event-driven notification system and advanced filtering with debounced input and server-side pagination.',
      ],
      technologies: ['ReactJS', 'TypeScript', 'Ant Design', 'Redux'],
      keywords: ['Recruitment', 'Candidate Tracking', 'Workflow Management', 'Analytics', 'HRM'],
    },
    {
      name: 'Cost',
      role: 'Developer',
      period: {
        start: '01/2021',
        end: '03/2021',
      },
      description: [
        'Developed Procurement Management System (ReactJS, React Bootstrap, Redux Saga) with multi-step approval workflows and conditional routing.',
        'Integrated Oracle ERP via REST APIs with retry mechanisms and built budget management with real-time tracking and inter-department transfers.',
        'Implemented real-time notifications (Firebase, Stream Chat) and Excel import/export with validation, duplicate detection, and bulk processing.',
        'Built bill confirmation workflow with OCR integration for invoice extraction and immutable audit trail with rollback capabilities.',
      ],
      technologies: ['ReactJS', 'React Bootstrap', 'Redux', 'Redux Saga', 'Firebase', 'Stream Chat', 'JavaScript'],
      keywords: ['Procurement Management', 'Purchase Order', 'Oracle Integration', 'Budget Management', 'Workflow Management', 'Cost Control', 'Transaction Tracking'],
    },
    {
      name: 'Eform',
      role: 'Developer',
      period: {
        start: '01/2021',
        end: '03/2021',
      },
      description: [
        'Developed dynamic Form Management System (ReactJS, Ant Design, Redux Saga) with drag-and-drop builder (React Beautiful DnD).',
        'Built dynamic field rendering engine supporting multiple types with conditional visibility, validation rules, and nested structures.',
        'Implemented configurable multi-step approval workflows with role-based routing, parallel approvals, and conditional branching logic.',
        'Created form template system reducing creation time by 60% and integrated TinyMCE for rich text editing with custom toolbars.',
        'Built real-time collaboration with commenting, versioning system, and export functionality (PDF/Excel) with template-based generation.',
      ],
      technologies: ['ReactJS', 'Ant Design', 'Redux', 'Redux Saga', 'TinyMCE', 'React Beautiful DnD', 'TypeScript'],
      keywords: ['Form Builder', 'Workflow Management', 'Approval Process', 'Dynamic Forms', 'Document Management', 'Drag and Drop'],
    },
    {
      name: 'Fixle',
      role: 'Developer',
      period: {
        start: '11/2018',
        end: '4/2019',
      },
      description: [
        'Developed cross-platform mobile app (ReactJS, PhoneGap) with multi-role authentication (Master/Company Admin, Provider, Client) and RBAC.',
        'Built job assignment engine with automated provider matching algorithms (location, availability, service type) and GPS-based status tracking.',
        'Implemented real-time features: status updates, push notifications, in-app messaging, and admin dashboards with analytics visualization.',
        'Created payment processing with multiple gateway integrations and transaction history tracking.',
      ],
      technologies: ['ReactJS', 'PhoneGap', 'Redux', 'Bootstrap', 'JavaScript'],
      keywords: ['Job Management', 'Multi-role System', 'Workflow Management', 'Service Distribution'],
    },
    {
      name: 'Primary ITO',
      role: 'Developer',
      period: {
        start: '3/2019',
        end: '12/2019',
      },
      description: [
        'Developed Training Management App (PhoneGap, ReactJS, Redux, Bootstrap) with offline-first architecture using IndexedDB for data persistence.',
        'Built workplace/learner management with CRUD operations, bulk import/export, and capability plan tracking with milestone-based progress monitoring.',
        'Implemented PDF report generation (jsPDF) with custom templates, email integration for automated distribution, and data sync with conflict resolution.',
        'Created learner progress dashboard with visual indicators, completion metrics, and form validation for offline scenarios.',
      ],
      technologies: ['ReactJS', 'PhoneGap', 'Redux', 'Bootstrap', 'JavaScript'],
      keywords: ['Training Management', 'Offline Support', 'PDF Generation', 'Progress Tracking', 'Mobile App'],
    },
  ],
  certificates: [
    {
      name: 'Introduction to Cybersecurity',
      source: 'Cisco Network Academy',
      file: icCertificate,
    },
  ],
};

export const cvDataVn: CVData = {
  personalInfo: {
    name: 'Nguyễn Hoài Thanh Ngọc',
    title: 'Front-end Developer',
    dateOfBirth: '23/05/1997',
    phone: '0363295271',
    email: 'ngocnht.uit@gmail.com',
    gender: 'Nữ',
  },
  education: {
    school: 'Đại học Công nghệ Thông tin - Đại học Quốc gia Thành phố Hồ Chí Minh',
    major: 'Mạng máy tính và Truyền thông dữ liệu',
    period: {
      start: '09/2015',
      end: '06/2020',
    },
    gpa: '7.8/10',
  },
  skills: [
    { name: 'JavaScript', category: 'language' },
    { name: 'TypeScript', category: 'language' },
    { name: 'CSS', category: 'language' },
    { name: 'HTML', category: 'language' },
    { name: 'ReactJS', category: 'framework' },
    { name: 'Bootstrap', category: 'library' },
    { name: 'Ant Design', category: 'library' },
    { name: 'Redux', category: 'library' },
  ],
  workExperience: [
    {
      company: 'GHN Express',
      position: 'Web Developer',
      period: {
        start: '6/2020',
        end: 'Hiện tại',
      },
      description: [
        'Phát triển và bảo trì nhiều ứng dụng web sử dụng ReactJS và TypeScript, đảm bảo chất lượng code và hiệu suất cao.',
        'Hợp tác với các team đa chức năng bao gồm Product, Design và Backend để xây dựng các giải pháp front-end có khả năng mở rộng.',
        'Hướng dẫn các developer junior và onboard thành viên mới, cải thiện năng suất team và chia sẻ kiến thức.',
        'Thiết kế và xây dựng thư viện component tái sử dụng sử dụng Ant Design, giảm thời gian phát triển 30%.',
        'Tham gia thảo luận kỹ thuật và đóng góp vào các quyết định kiến trúc cho các dự án mới.',
        'Tối ưu hiệu suất ứng dụng thông qua code splitting, lazy loading và quản lý state với Redux.',
      ],
      technologies: ['ReactJS', 'TypeScript', 'Redux', 'Ant Design', 'JavaScript'],
    },
    {
      company: 'Beesight Soft',
      position: 'Web Developer',
      period: {
        start: '6/2018',
        end: '2/2020',
      },
      description: [
        'Phát triển ứng dụng mobile đa nền tảng sử dụng PhoneGap và ReactJS cho các dự án khách hàng đa dạng.',
        'Phân tích yêu cầu khách hàng, đánh giá tính khả thi dự án và đề xuất giải pháp kỹ thuật.',
        'Xây dựng ứng dụng web responsive với ReactJS, đảm bảo trải nghiệm người dùng tối ưu trên mọi thiết bị.',
        'Hợp tác với khách hàng quốc tế để cung cấp các giải pháp phần mềm chất lượng cao.',
        'Tích lũy kinh nghiệm với nhiều loại dự án bao gồm e-commerce, hệ thống quản lý và nền tảng đào tạo.',
      ],
      technologies: ['ReactJS', 'PhoneGap', 'Redux', 'Bootstrap', 'JavaScript'],
    },
  ],
  projects: [
    {
      name: 'Hệ thống lương thưởng',
      role: 'Developer',
      period: {
        start: '06/2024',
        end: 'Hiện tại',
      },
      description: [
        'Phát triển Hệ thống Quản lý Lương & Thưởng (React 18, TypeScript, TailwindCSS) với Module Federation cho micro-frontend architecture.',
        'Xây dựng engine quản lý chính sách: lương tài xế (pricing, bonus algorithms, regional factors), thưởng phạt vận đơn (rule-based, tier rewards), hoa hồng (AOV shift config).',
        'Triển khai quản lý ngoại lệ với approval workflows, chạy lại lương với transaction rollback và cấu hình chính sách (Formik, Zod validation).',
        'Tạo import/export Excel với data transformation pipelines và dashboard báo cáo với aggregation cho policy analysis.',
        'Tối ưu API calls 35% sử dụng React Query với optimistic updates và triển khai RBAC với role-based UI rendering.',
      ],
      technologies: ['React 18', 'TypeScript', 'TailwindCSS', 'React Query', 'Formik', 'Zod', 'Rspack', 'Module Federation'],
      keywords: ['Quản lý Lương', 'Chính sách Thưởng', 'Chính sách Hoa hồng', 'Cấu hình Chính sách', 'Quản lý Ngoại lệ', 'Chạy lại Lương', 'Quản lý Logistics'],
    },
    {
      name: 'Payroll',
      role: 'Developer',
      period: {
        start: '09/2022',
        end: 'Hiện tại',
      },
      description: [
        'Thiết kế Hệ thống Quản lý Lương & Phúc lợi (ReactJS, TypeScript, Ant Design) với kiến trúc component-based và Redux Saga cho async state management.',
        'Triển khai engine tính toán công thức (HyperFormula) cho đánh giá chính sách hoa hồng động và các phép toán phức tạp.',
        'Xây dựng hệ thống tự động tạo phiếu lương với PDF export (jsPDF, html2canvas) và tích hợp API ngân hàng với retry mechanisms.',
        'Phát triển import/export Excel hàng loạt (ExcelJS) với chunked processing, validation và error tracking cho dataset lớn.',
        'Tạo dashboard kế toán (Recharts) với real-time updates và cơ chế chạy lại lương với transaction rollback.',
        'Tối ưu API calls 40% sử dụng React Query cho intelligent caching và server state synchronization.',
      ],
      technologies: ['ReactJS', 'TypeScript', 'Ant Design', 'Redux', 'Redux Saga', 'React Query', 'HyperFormula', 'Recharts'],
      keywords: ['HRM', 'Quản lý Lương', 'Chính sách Hoa hồng', 'Tính toán Công thức', 'Tích hợp API Ngân hàng', 'Tạo Phiếu lương', 'Cấu hình Thuế', 'Báo cáo Kế toán'],
    },
    {
      name: 'HRM Core',
      role: 'Developer',
      period: {
        start: '04/2022',
        end: 'Hiện tại',
      },
      description: [
        'Xây dựng Hệ thống HRM có khả năng mở rộng (ReactJS, TypeScript, Ant Design) với kiến trúc feature-based và triển khai RBAC ở cấp component/route.',
        'Phát triển sơ đồ tổ chức tương tác (react-organizational-chart) với drag-and-drop và virtual scrolling cho dataset nhân viên lớn.',
        'Triển khai quản lý hợp đồng/nghỉ phép với workflow phê duyệt đa bước, tích hợp e-contract và tính toán điều chỉnh tự động.',
        'Xây dựng import/export Excel với chunked processing (50 bản ghi/batch), validation và error reporting toàn diện.',
        'Tạo hệ thống audit logging với before/after state tracking và rollback capabilities cho thao tác dữ liệu quan trọng.',
        'Tối ưu hiệu suất sử dụng React Query cho server state management với optimistic updates và intelligent caching.',
      ],
      technologies: ['ReactJS', 'TypeScript', 'Ant Design', 'Redux', 'Redux Saga', 'React Query'],
      keywords: ['HRM', 'Quản lý Nhân viên', 'Quản lý Hợp đồng', 'Quản lý Nghỉ phép', 'Quyết toán Thuế', 'RBAC', 'Import/Export Excel', 'Audit Logging', 'Sơ đồ Tổ chức'],
    },
    {
      name: 'Candidate',
      role: 'Developer',
      period: {
        start: '04/2022',
        end: '9/2024',
      },
      description: [
        'Phát triển Hệ thống Quản lý Ứng viên (ReactJS, TypeScript, Ant Design, Redux) với engine cấu hình workflow động.',
        'Xây dựng tracking ứng viên với stage-based progression, timeline visualization và cộng tác real-time với conflict resolution.',
        'Tạo dashboard phân tích với data aggregation cho metrics time-to-hire, nguồn ứng viên và tỷ lệ thành công phỏng vấn.',
        'Triển khai hệ thống thông báo event-driven và filtering nâng cao với debounced input và server-side pagination.',
      ],
      technologies: ['ReactJS', 'TypeScript', 'Ant Design', 'Redux'],
      keywords: ['Tuyển dụng', 'Theo dõi Ứng viên', 'Quản lý Workflow', 'Phân tích', 'HRM'],
    },
    {
      name: 'Cost',
      role: 'Developer',
      period: {
        start: '01/2021',
        end: '03/2021',
      },
      description: [
        'Phát triển Hệ thống Quản lý Mua sắm (ReactJS, React Bootstrap, Redux Saga) với workflow phê duyệt đa bước và conditional routing.',
        'Tích hợp Oracle ERP qua REST APIs với retry mechanisms và xây dựng quản lý ngân sách với real-time tracking và chuyển khoản liên phòng ban.',
        'Triển khai thông báo real-time (Firebase, Stream Chat) và import/export Excel với validation, duplicate detection và bulk processing.',
        'Xây dựng workflow xác nhận hóa đơn với OCR integration cho invoice extraction và immutable audit trail với rollback capabilities.',
      ],
      technologies: ['ReactJS', 'React Bootstrap', 'Redux', 'Redux Saga', 'Firebase', 'Stream Chat', 'JavaScript'],
      keywords: ['Quản lý Mua sắm', 'Đơn hàng Mua', 'Tích hợp Oracle', 'Quản lý Ngân sách', 'Quản lý Workflow', 'Kiểm soát Chi phí', 'Theo dõi Giao dịch'],
    },
    {
      name: 'Eform',
      role: 'Developer',
      period: {
        start: '01/2021',
        end: '03/2021',
      },
      description: [
        'Phát triển Hệ thống Quản lý Form Động (ReactJS, Ant Design, Redux Saga) với drag-and-drop builder (React Beautiful DnD).',
        'Triển khai engine render field động hỗ trợ nhiều loại với conditional visibility, validation rules và nested structures.',
        'Xây dựng workflow phê duyệt đa bước có thể cấu hình với role-based routing, parallel approvals và conditional branching logic.',
        'Tạo hệ thống form template giảm 60% thời gian tạo form và tích hợp TinyMCE cho rich text editing với custom toolbars.',
        'Phát triển cộng tác real-time với commenting, versioning system và export functionality (PDF/Excel) với template-based generation.',
      ],
      technologies: ['ReactJS', 'Ant Design', 'Redux', 'Redux Saga', 'TinyMCE', 'React Beautiful DnD', 'TypeScript'],
      keywords: ['Form Builder', 'Quản lý Workflow', 'Quy trình Phê duyệt', 'Form Động', 'Quản lý Tài liệu', 'Drag and Drop'],
    },
    {
      name: 'Fixle',
      role: 'Developer',
      period: {
        start: '11/2018',
        end: '4/2019',
      },
      description: [
        'Phát triển ứng dụng mobile đa nền tảng (ReactJS, PhoneGap) với multi-role authentication (Master/Company Admin, Provider, Client) và RBAC.',
        'Xây dựng engine phân công công việc với thuật toán matching tự động (location, availability, service type) và GPS-based status tracking.',
        'Triển khai tính năng real-time: status updates, push notifications, in-app messaging và admin dashboards với analytics visualization.',
        'Tạo hệ thống xử lý thanh toán với tích hợp nhiều payment gateways và transaction history tracking.',
      ],
      technologies: ['ReactJS', 'PhoneGap', 'Redux', 'Bootstrap', 'JavaScript'],
      keywords: ['Quản lý Công việc', 'Hệ thống Đa vai trò', 'Quản lý Workflow', 'Phân phối Dịch vụ'],
    },
    {
      name: 'Primary ITO',
      role: 'Developer',
      period: {
        start: '3/2019',
        end: '12/2019',
      },
      description: [
        'Phát triển Ứng dụng Quản lý Đào tạo (PhoneGap, ReactJS, Redux, Bootstrap) với offline-first architecture sử dụng IndexedDB cho data persistence.',
        'Xây dựng quản lý nơi làm việc/học viên với CRUD operations, bulk import/export và tracking kế hoạch năng lực với milestone-based progress.',
        'Triển khai PDF report generation (jsPDF) với custom templates, email integration cho automated distribution và data sync với conflict resolution.',
        'Tạo dashboard tiến độ học viên với visual indicators, completion metrics và form validation cho offline scenarios.',
      ],
      technologies: ['ReactJS', 'PhoneGap', 'Redux', 'Bootstrap', 'JavaScript'],
      keywords: ['Quản lý Đào tạo', 'Hỗ trợ Offline', 'Tạo PDF', 'Theo dõi Tiến độ', 'Ứng dụng Mobile'],
    },
  ],
  certificates: [
    {
      name: 'Introduction to Cybersecurity',
      source: 'Cisco Network Academy',
      file: icCertificate,
    },
  ],
};
