import React, { useState } from 'react';

interface BillInputProps {
  onAddBill: (bill: { description: string; amount: number; profile: string }) => void;
  profiles: string[];
  activeProfile: string;
}

const BillInput: React.FC<BillInputProps> = ({ onAddBill, profiles, activeProfile }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedProfile, setSelectedProfile] = useState(activeProfile);

  const handleSubmit = () => {
    if (description && amount && selectedProfile) {
      onAddBill({ description, amount: parseFloat(amount), profile: selectedProfile });
      setDescription('');
      setAmount('');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Valor"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <select
          className="w-full p-2 border border-gray-300 rounded-md"
          value={selectedProfile}
          onChange={(e) => setSelectedProfile(e.target.value)}
        >
          {profiles.map((profile, index) => (
            <option key={index} value={profile}>
              {profile}
            </option>
          ))}
        </select>
      </div>
      <button
        className="bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90"
        onClick={handleSubmit}
      >
        Adicionar Conta
      </button>
    </div>
  );
};

export default BillInput;
