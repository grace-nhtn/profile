import React from 'react';
import { Button } from 'antd';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import { useTheme } from '../../hooks/useTheme';
import './ThemeToggle.scss';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle">
      <Button
        type="text"
        icon={theme === 'light' ? <MoonOutlined /> : <SunOutlined />}
        onClick={toggleTheme}
        className="theme-button"
        title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      />
    </div>
  );
};
