import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BillInput from '../../src/components/BillInput';

describe('BillInput', () => {
  const mockAddBill = jest.fn();
  const profiles = ['Perfil 1', 'Perfil 2'];

  beforeEach(() => {
    render(<BillInput onAddBill={mockAddBill} profiles={profiles} activeProfile="Perfil 1" />);
  });

  test('renders correctly', () => {
    expect(screen.getByPlaceholderText('Descrição')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Valor')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Adicionar Conta' })).toBeInTheDocument();
  });

  test('allows input to be entered', () => {
    fireEvent.change(screen.getByPlaceholderText('Descrição'), {
      target: { value: 'Café' }
    });
    fireEvent.change(screen.getByPlaceholderText('Valor'), {
      target: { value: '10' }
    });
    fireEvent.click(screen.getByRole('button', { name: 'Adicionar Conta' }));

    expect(mockAddBill).toHaveBeenCalledWith({
      description: 'Café',
      amount: 10,
      profile: 'Perfil 1'
    });
  });
});
