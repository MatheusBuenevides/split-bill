import React, { useState } from 'react';

interface CreateProfilePageProps {
  profiles: string[];
  onAddProfile: (profile: string) => void;
  onSelectProfile: (profile: string) => void;
  activeProfile: string;
}

const CreateProfilePage: React.FC<CreateProfilePageProps> = ({ profiles, onAddProfile, onSelectProfile, activeProfile }) => {
  const [name, setName] = useState('');

  // Função para adicionar um novo perfil
  const handleAddProfile = () => {
    if (name.trim() !== '') {
      onAddProfile(name);
      setName('');  // Limpa o campo de entrada após a adição
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Criar Novo Perfil</h2>
      
      {/* Formulário para criar perfil */}
      <div className="mb-6">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome do perfil"
          className="p-2 border border-gray-300 rounded-md w-full"
        />
        <button
          onClick={handleAddProfile}
          className="mt-2 bg-primary text-white p-2 rounded-md hover:bg-opacity-90 transition"
        >
          Adicionar Perfil
        </button>
      </div>
      
      {/* Lista de perfis existentes */}
      <h3 className="text-xl font-semibold mb-4">Perfis Cadastrados</h3>
      <ul className="space-y-2">
        {profiles.map((profile, index) => (
          <li
            key={index}
            onClick={() => onSelectProfile(profile)}
            className={`p-2 cursor-pointer rounded-md ${activeProfile === profile ? 'bg-blue-200' : 'bg-gray-200'}`}
          >
            {profile}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreateProfilePage;
