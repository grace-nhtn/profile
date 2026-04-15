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
    <Select value={language} onChange={setLanguage} style={{ width: 120 }} suffixIcon={<GlobalOutlined />}>
      {LANGUAGES.map((lang) => (
        <Select.Option key={lang.code} value={lang.code}>
          {lang.flag} {lang.label}
        </Select.Option>
      ))}
    </Select>
  );
};

const AppContent: React.FC = () => {
  const { language } = useLanguage();
  const cvData = language === 'en' ? cvDataEn : cvDataVn;

  React.useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.fade-in'));
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    nodes.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
      <nav className="top-nav">
        <a className="nav-logo" href="#hero">
          ngoc<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-right">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </nav>

      <div className="page">
        <ProfileHeader personalInfo={cvData.personalInfo} />

        <section id="skills" className="profile-section alt-bg">
          <div className="container">
            <div className="section-label">Capabilities</div>
            <div className="section-title">Technical Stack</div>
            <div className="fade-in">
              <Skills skills={cvData.skills} />
            </div>
          </div>
        </section>

        <section id="experience" className="profile-section">
          <div className="container">
            <div className="section-label">Career</div>
            <div className="section-title">Work Experience</div>
            <div className="section timeline fade-in">
              <WorkExperience workExperience={cvData.workExperience} />
            </div>
          </div>
        </section>

        <section id="projects" className="profile-section alt-bg">
          <div className="container">
            <div className="section-label">Portfolio</div>
            <div className="section-title">Featured Projects</div>
            <div className="fade-in">
              <Projects projects={cvData.projects} />
            </div>
          </div>
        </section>

        <section id="education" className="profile-section">
          <div className="container">
            <div className="section-label">Background</div>
            <div className="section-title">Education</div>
            <div className="fade-in">
              <Education education={cvData.education} />
            </div>
          </div>
        </section>

        <section id="contact" className="profile-section">
          <div className="container">
            <div className="section-label">Let's talk</div>
            <div className="section-title">Get In Touch</div>
            <div className="profile-content">
              <div className="left-column fade-in">
                <PersonalInfo personalInfo={cvData.personalInfo} />
                <Certificates certificates={cvData.certificates} />
              </div>
              <div className="right-column fade-in">
                <div className="section">
                  <div style={{ color: 'var(--text2)', lineHeight: 1.8 }}>
                    I’m currently open to new opportunities — especially roles that push me toward backend and full-stack work.
                    If you have an interesting project or a position that fits, I’d love to hear from you.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
