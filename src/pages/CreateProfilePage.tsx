import React, { useState } from 'react';
import ProfileManager from '../components/ProfileManager';

interface CreateProfilePageProps {
  profiles: string[];
  onAddProfile: (profile: string) => void;
  onSelectProfile: (profile: string) => void;
  activeProfile: string;
}

const CreateProfilePage: React.FC<CreateProfilePageProps> = ({ profiles, onAddProfile, onSelectProfile, activeProfile }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Gerenciar Perfis</h1>
      <ProfileManager 
        profiles={profiles}
        onAddProfile={onAddProfile}
        onSelectProfile={onSelectProfile}
        activeProfile={activeProfile}
      />
    </div>
  );
};

export default CreateProfilePage;
