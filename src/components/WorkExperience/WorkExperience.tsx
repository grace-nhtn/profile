import React from 'react';
import { WorkExperience as WorkExperienceType } from '../../model/cv';
import { translations } from '../../constants/translations';
import { useLanguage } from '../../hooks/useLanguage';
import './WorkExperience.scss';

interface WorkExperienceProps {
  workExperience: WorkExperienceType[];
}

export const WorkExperience: React.FC<WorkExperienceProps> = ({ workExperience }) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="section">
      <h2 className="section-title">{t.workExperience}</h2>
      {workExperience.map((exp, index) => (
        <div key={index} className="work-experience-item">
          <div className="item-header">
            <div className="item-title">{exp.company}</div>
            <div className="item-subtitle">{exp.position}</div>
            <div className="item-period">
              {exp.period.start} - {exp.period.end}
            </div>
          </div>
          <ul className="description-list">
            {exp.description.map((desc, descIndex) => (
              <li key={descIndex}>{desc}</li>
            ))}
          </ul>
          {exp.technologies && exp.technologies.length > 0 && (
            <div className="technologies">
              {exp.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
