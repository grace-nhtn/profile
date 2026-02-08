import React from 'react';
import { Typography, Button } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { Certificate } from '../../model/cv';
import { translations } from '../../constants/translations';
import { useLanguage } from '../../hooks/useLanguage';
import './Certificates.scss';

const { Text } = Typography;

interface CertificatesProps {
  certificates: Certificate[];
}

const handleView = (file: string) => {
  window.open(file, '_blank');
};

export const Certificates: React.FC<CertificatesProps> = ({ certificates }) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="section">
      <h2 className="section-title">{t.certificates}</h2>
      {certificates.map((certificate, index) => (
        <div key={index} className="certificate-item">
          <div className="certificate-info">
            <Text strong className="certificate-name">
              {certificate.name}
            </Text>
            <Text className="certificate-source">{certificate.source}</Text>
          </div>
          <Button
            type="text"
            icon={<FileTextOutlined />}
            onClick={() => handleView(certificate.file)}
            className="certificate-view-btn"
            title="View certificate"
          />
        </div>
      ))}
    </div>
  );
};
