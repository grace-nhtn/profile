import React from 'react';
import { Project } from '../../model/cv';
import { translations } from '../../constants/translations';
import { useLanguage } from '../../hooks/useLanguage';
import './Projects.scss';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="section">
      <h2 className="section-title">{t.projects}</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <div className="item-header">
            <div className="item-title">{project.name}</div>
            <div className="item-subtitle">{project.role}</div>
            <div className="item-period">
              {project.period.start} - {project.period.end}
            </div>
          </div>
          <ul className="description-list">
            {project.description.map((desc, descIndex) => (
              <li key={descIndex}>{desc}</li>
            ))}
          </ul>
          {project.technologies && project.technologies.length > 0 && (
            <div className="technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          )}
          {project.keywords && project.keywords.length > 0 && (
            <div className="keywords">
              {project.keywords.map((keyword, keywordIndex) => (
                <span key={keywordIndex} className="keyword-tag">
                  {keyword}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
