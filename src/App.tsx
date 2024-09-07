import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
              activeProfile={activeProfile} profiles={[]}            />
          }
        />
        <Route
          path="/"
          element={
            <div>
              <h1>Bem-vindo ao Divisor de Contas</h1>
              <BillInput
                onAddBill={handleAddBill}
                profiles={profiles}
                activeProfile={activeProfile}
              />
              <BillList bills={bills} />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
