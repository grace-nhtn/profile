import React from 'react';
import { Typography, Avatar } from 'antd';
import { PersonalInfo } from '../../model/cv';
import { translations } from '../../constants/translations';
import { useLanguage } from '../../hooks/useLanguage';
import avatarImage from '../../assets/images/avatar.jpg';
import './ProfileHeader.scss';

const { Title, Text } = Typography;

interface ProfileHeaderProps {
  personalInfo: PersonalInfo;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ personalInfo }) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="hero-bg2" />
      <div className="hero-inner">
        <div className="hero-tag">{t.heroOpenToOpportunities}</div>
        <Title level={1} style={{ margin: 0 }}>
          <span style={{ display: 'block', color: 'var(--hero-name)' }}>{personalInfo.name}</span>
          <em>{personalInfo.title}</em>
        </Title>
        <Text className="hero-sub">{t.heroSubtitle}</Text>
        <div className="hero-ctas">
          <a href="#projects" className="btn-primary">
            {t.heroCtaWork}
          </a>
          <a href="#contact" className="btn-secondary">
            {t.heroCtaContact}
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <div className="stat-num">4<span>+</span></div>
            <div className="stat-label">{t.heroStatYears}</div>
          </div>
          <div>
            <div className="stat-num">8<span>+</span></div>
            <div className="stat-label">{t.heroStatProjects}</div>
          </div>
          <div>
            <div className="stat-num">2</div>
            <div className="stat-label">{t.heroStatCompanies}</div>
          </div>
        </div>

        <div style={{ marginTop: '3.25rem', display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
          <Avatar src={avatarImage} alt={personalInfo.name} size={72} />
          <div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: 'var(--text)' }}>
              {personalInfo.name}
            </div>
            <div style={{ color: 'var(--text2)', fontSize: '0.9rem' }}>{personalInfo.title}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
