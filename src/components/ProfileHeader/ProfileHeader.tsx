import React from 'react';
import { Typography, Avatar } from 'antd';
import { PersonalInfo } from '../../model/cv';
import avatarImage from '../../assets/images/avatar.jpg';
import './ProfileHeader.scss';

const { Title, Text } = Typography;

interface ProfileHeaderProps {
  personalInfo: PersonalInfo;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ personalInfo }) => {
  return (
    <div className="profile-header">
      <Avatar
        src={avatarImage}
        alt={personalInfo.name}
        size={200}
        className="profile-avatar"
      />
      <Title level={1} className="name">
        {personalInfo.name}
      </Title>
      <Text className="title">{personalInfo.title}</Text>
    </div>
  );
};
