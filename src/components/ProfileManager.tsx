import React from 'react';
import { Link } from 'react-router-dom';

interface ProfileListPageProps {
  profiles: string[];
}

const ProfileListPage: React.FC<ProfileListPageProps> = ({ profiles }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Perfis Cadastrados</h2>
      <ul className="space-y-2">
        {profiles.map((profile, index) => (
          <li key={index}>
            <Link
              to={`/profile/${profile}`}
              className="block bg-primary text-white p-2 rounded-md hover:bg-opacity-90 transition"
            >
              {profile}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileListPage;
