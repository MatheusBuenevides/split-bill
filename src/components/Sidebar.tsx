import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-1/4 bg-secondary text-white min-h-screen p-6">
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <ul className="space-y-2">
        <li>
          <Link
            to="/"
            className="block bg-primary p-2 rounded-md hover:bg-opacity-90 transition"
          >
            Início
          </Link>
        </li>
        <li>
          <Link
            to="/create-profile"
            className="block bg-primary p-2 rounded-md hover:bg-opacity-90 transition"
          >
            Criar Perfil
          </Link>
        </li>
        <li>
          <Link
            to="/profile-list"
            className="block bg-primary p-2 rounded-md hover:bg-opacity-90 transition"
          >
            Visualizar Perfis
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
