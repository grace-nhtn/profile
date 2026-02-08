import React from 'react';
import { Select } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { ProfileHeader } from './components/ProfileHeader/ProfileHeader';
import { PersonalInfo } from './components/PersonalInfo/PersonalInfo';
import { Education } from './components/Education/Education';
import { Skills } from './components/Skills/Skills';
import { WorkExperience } from './components/WorkExperience/WorkExperience';
import { Projects } from './components/Projects/Projects';
import { Certificates } from './components/Certificates/Certificates';
import { ThemeToggle } from './components/ThemeToggle/ThemeToggle';
import { cvDataEn, cvDataVn } from './constants/cvData';
import { LANGUAGES } from './constants/languages';
import { useLanguage } from './hooks/useLanguage';
import './styles/main.scss';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <Select
        value={language}
        onChange={setLanguage}
        style={{ width: 120 }}
        suffixIcon={<GlobalOutlined />}
      >
        {LANGUAGES.map((lang) => (
          <Select.Option key={lang.code} value={lang.code}>
            {lang.flag} {lang.label}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

const AppContent: React.FC = () => {
  const { language } = useLanguage();
  const cvData = language === 'en' ? cvDataEn : cvDataVn;

  return (
    <div className="profile-container">
      <ThemeToggle />
      <LanguageSwitcher />
      <ProfileHeader personalInfo={cvData.personalInfo} />
      <div className="profile-content">
        <div className="left-column">
          <PersonalInfo personalInfo={cvData.personalInfo} />
          <Education education={cvData.education} />
          <Skills skills={cvData.skills} />
          <Certificates certificates={cvData.certificates} />
        </div>
        <div className="right-column">
          <WorkExperience workExperience={cvData.workExperience} />
          <Projects projects={cvData.projects} />
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
