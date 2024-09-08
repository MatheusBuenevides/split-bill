import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateProfilePage from './pages/CreateProfilePage';
import ProfilePage from './pages/ProfilePage';
import BillInput from './components/BillInput';
import BillList from './components/BillList';
import Sidebar from './components/Sidebar';
import ProfileListPage from './components/ProfileManager';

const App: React.FC = () => {
  // Estado para armazenar os perfis e as contas
  const [profiles, setProfiles] = useState<string[]>([]);
  const [bills, setBills] = useState<{ description: string; amount: number; profile: string }[]>([]);
  const [activeProfile, setActiveProfile] = useState<string>('');

  // Função para adicionar um novo perfil
  const handleAddProfile = (profile: string) => {
    setProfiles([...profiles, profile]);
  };

  // Função para adicionar uma nova conta
  const handleAddBill = (bill: { description: string; amount: number; profile: string }) => {
    setBills([...bills, bill]);
  };

  // Função para selecionar o perfil ativo
  const handleSelectProfile = (profile: string) => {
    setActiveProfile(profile);
  };

  return (
    <Router>
      <div className="min-h-screen bg-lightGray text-darkGray">
        {/* Header */}
        <header className="bg-primary text-white p-4 shadow-md">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold">Divisor de Contas</h1>
          </div>
        </header>

        {/* Layout com Sidebar */}
        <div className="flex">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="w-3/4 p-6">
            <Routes>
              {/* Página para adicionar novo perfil */}
              <Route
                path="/create-profile"
                element={
                  <CreateProfilePage
                    profiles={profiles}
                    onAddProfile={handleAddProfile}
                    onSelectProfile={handleSelectProfile}
                    activeProfile={activeProfile}
                  />
                }
              />

              {/* Página de cada perfil individual */}
              <Route
                path="/profile/:id"
                element={<ProfilePage bills={bills} profiles={[]} />}
              />

              {/* Página para listar todos os perfis */}
              <Route
                path="/profile-list"
                element={<ProfileListPage profiles={profiles} />}
              />

              {/* Página principal com lista de contas */}
              <Route
                path="/"
                element={
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Adicionar Conta</h2>
                    <BillInput onAddBill={handleAddBill} profiles={profiles} activeProfile={activeProfile} />
                    <h2 className="text-2xl font-bold mt-8 mb-4">Contas do Mês</h2>
                    <BillList bills={bills} />
                  </div>
                }
              />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
