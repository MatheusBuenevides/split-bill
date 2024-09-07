import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateProfilePage from './pages/CreateProfilePage';
import ProfilePage from './pages/ProfilePage';
import BillInput from './components/BillInput';
import BillList from './components/BillList';

function App() {
  const [profiles, setProfiles] = useState<string[]>([]);
  const [bills, setBills] = useState<{ description: string; amount: number; profile: string }[]>([]);
  const [activeProfile, setActiveProfile] = useState<string>('');

  const handleAddProfile = (profile: string) => {
    setProfiles([...profiles, profile]);
  };

  const handleAddBill = (bill: { description: string; amount: number; profile: string }) => {
    setBills([...bills, bill]);
  };

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

        {/* Layout */}
        <div className="flex">
          {/* Sidebar */}
          <aside className="w-1/4 bg-secondary text-white min-h-screen p-6">
            <h2 className="text-xl font-bold mb-4">Perfis</h2>
            <ul className="space-y-2">
              {profiles.map((profile, index) => (
                <li key={index}>
                  <Link to={`/profile/${profile}`} className="block bg-primary p-2 rounded-md hover:bg-opacity-90">
                    {profile}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/create-profile" className="block bg-darkGray p-2 rounded-md hover:bg-opacity-90">
                  Criar Novo Perfil
                </Link>
              </li>
            </ul>
          </aside>

          {/* Main Content */}
          <main className="w-3/4 p-6">
            <Routes>
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
              <Route
                path="/profile/:id"
                element={
                  <ProfilePage 
                    bills={bills}
                    activeProfile={activeProfile} profiles={[]}                  />
                }
              />
              <Route
                path="/"
                element={
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Adicionar Conta</h2>
                    <BillInput
                      onAddBill={handleAddBill}
                      profiles={profiles}
                      activeProfile={activeProfile}
                    />
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
}

export default App;
