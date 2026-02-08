import React from 'react';
import { Typography, Space } from 'antd';
import { MailOutlined, CalendarOutlined, UserOutlined } from '@ant-design/icons';
import { PersonalInfo as PersonalInfoType } from '../../model/cv';
import { translations } from '../../constants/translations';
import { useLanguage } from '../../hooks/useLanguage';
import './PersonalInfo.scss';

const { Text } = Typography;

interface PersonalInfoProps {
  personalInfo: PersonalInfoType;
}

export const PersonalInfo: React.FC<PersonalInfoProps> = ({ personalInfo }) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="section personal-info">
      <h2 className="section-title">{t.personalInfo}</h2>
      <Space direction="vertical" size={5} style={{ width: '100%' }}>
        <div className="info-item">
          <CalendarOutlined className="icon" />
          <Text className="content">{t.dateOfBirth}: {personalInfo.dateOfBirth}</Text>
        </div>
        <div className="info-item">
          <UserOutlined className="icon" />
          <Text className="content">{t.gender}: {personalInfo.gender || (language === 'vn' ? 'Nữ' : 'Female')}</Text>
        </div>
        <div className="info-item">
          <MailOutlined className="icon" />
          <Text className="content">
            <a href={`mailto:${personalInfo.email}`}>Gửi mail</a>
          </Text>
        </div>
      </Space>
    </div>
  );
};
