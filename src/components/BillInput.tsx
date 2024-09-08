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
      <input type="text" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="number" placeholder="Valor" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <select value={selectedProfile} onChange={(e) => setSelectedProfile(e.target.value)}>
        {profiles.map((profile, index) => (
          <option key={index} value={profile}>{profile}</option>
        ))}
      </select>
      <button onClick={handleSubmit}>Adicionar Conta</button>
    </div>
  );
};

export default BillInput;
