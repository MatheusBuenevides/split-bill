import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateProfilePage from '../../src/pages/CreateProfilePage';

describe('CreateProfilePage', () => {
  let mockOnAddProfile: jest.Mock;
  let mockOnSelectProfile: jest.Mock;
  const profiles = ['Profile 1', 'Profile 2'];
  const activeProfile = 'Profile 1';

  beforeEach(() => {
    mockOnAddProfile = jest.fn();
    mockOnSelectProfile = jest.fn();
    render(
      <CreateProfilePage
        profiles={profiles}
        onAddProfile={mockOnAddProfile}
        onSelectProfile={mockOnSelectProfile}
        activeProfile={activeProfile}
      />
    );
  });

  test('allows users to enter a profile name and add it', async () => {
    const input = screen.getByPlaceholderText('Nome do perfil');
    const addButton = screen.getByRole('button', { name: /Adicionar Perfil/i });

    await userEvent.type(input, 'Profile 3');
    await userEvent.click(addButton);

    await waitFor(() => {
      expect(mockOnAddProfile).toHaveBeenCalledWith('Profile 3');
      expect(mockOnAddProfile).toHaveBeenCalledTimes(1);
    });

    expect(input).toHaveValue('');  // Verifica se o input é limpo após adicionar
  });

  test('displays existing profiles and allows profile selection', async () => {
    const firstProfileButton = screen.getByText('Profile 1');
    await userEvent.click(firstProfileButton);

    await waitFor(() => {
      expect(mockOnSelectProfile).toHaveBeenCalledWith('Profile 1');
      expect(mockOnSelectProfile).toHaveBeenCalledTimes(1);
    });
  });
});
