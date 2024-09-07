import React, { useState } from 'react';

interface ProfileManagerProps {
  profiles: string[];
  onAddProfile: (profile: string) => void;
  onSelectProfile: (profile: string) => void;
  activeProfile: string;
}

const ProfileManager: React.FC<ProfileManagerProps> = ({ profiles, onAddProfile, onSelectProfile, activeProfile }) => {
  const [name, setName] = useState('');

  const handleAddProfile = () => {
    if (name) {
      onAddProfile(name);
      setName('');
    }
  };

  return (
    <div>
      <input type="text" placeholder="Nome do perfil" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAddProfile}>Adicionar Perfil</button>
      <ul>
        {profiles.map((profile, index) => (
          <li key={index} onClick={() => onSelectProfile(profile)}>
            {profile} {activeProfile === profile && '(Ativo)'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileManager;
