import React from 'react';
import { Typography } from 'antd';
import { Education as EducationType } from '../../model/cv';
import { translations } from '../../constants/translations';
import { useLanguage } from '../../hooks/useLanguage';
import './Education.scss';

const { Text, Title } = Typography;

interface EducationProps {
  education: EducationType;
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="section">
      <h2 className="section-title">{t.education}</h2>
      <Title level={4} className="education-school">{education.school}</Title>
      <Text strong className="education-major">{education.major}</Text>
      <br />
      <Text className="education-period">
        {education.period.start} - {education.period.end}
      </Text>
      {education.gpa && (
        <>
          <br />
          <Text className="education-gpa">GPA: {education.gpa}</Text>
        </>
      )}
    </div>
  );
};
