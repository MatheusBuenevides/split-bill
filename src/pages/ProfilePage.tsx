import React from 'react';
import { useParams } from 'react-router-dom';
import BillList from '../components/BillList';

interface ProfilePageProps {
  profiles: string[];
  bills: { description: string; amount: number; profile: string }[];
  activeProfile: string;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ bills, activeProfile }) => {
  const { id } = useParams<{ id: string }>();

  const filteredBills = bills.filter(bill => bill.profile === id);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Gastos de {id}</h1>
      <BillList bills={filteredBills} />
      <p className="mt-4">Perfil ativo: {activeProfile}</p>
    </div>
  );
};

export default ProfilePage;
