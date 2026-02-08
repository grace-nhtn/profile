import React from 'react';
import { Skill } from '../../model/cv';
import { translations } from '../../constants/translations';
import { useLanguage } from '../../hooks/useLanguage';
import './Skills.scss';

interface SkillsProps {
  skills: Skill[];
}

const getCategoryLabel = (category: Skill['category'], language: 'en' | 'vn'): string => {
  const t = translations[language];
  const labels: Record<Skill['category'], keyof typeof t> = {
    language: 'language',
    framework: 'framework',
    library: 'library',
    tool: 'library',
  };
  return t[labels[category]];
};

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const { language } = useLanguage();

  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<Skill['category'], Skill[]>
  );

  return (
    <div className="section">
      <h2 className="section-title">{translations[language].skills}</h2>
      {Object.entries(groupedSkills).map(([category, categorySkills]) => (
        <div key={category} style={{ marginBottom: '16px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px', color: '#00695c' }}>
            {getCategoryLabel(category as Skill['category'], language)}
          </h3>
          <div className="skills-list">
            {categorySkills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
