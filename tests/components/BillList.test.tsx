import React from 'react';
import { render, screen } from '@testing-library/react';
import BillList from '../../src/components/BillList';

describe('BillList', () => {
  const bills = [
    { description: 'Café', amount: 5, profile: 'Perfil 1' },
    { description: 'Chá', amount: 3, profile: 'Perfil 2' }
  ];

  test('renders bills correctly', () => {
    render(<BillList bills={bills} />);

    // Function to check text content with TypeScript types
    const getTextWithContent = (text: string) => {
      return screen.getByText((content, node) => {
        const hasText = (node: Element | null): node is Element => node?.textContent === text;
        const nodeHasText = hasText(node);
        const childrenDontHaveText = Array.from(node?.children || []).every(
          (child) => !hasText(child)
        );
        return nodeHasText && childrenDontHaveText;
      });
    };

    // Checking elements
    const cafeText = getTextWithContent("Café - Perfil 1: R$ 5.00");
    expect(cafeText).toBeInTheDocument();

    const chaText = getTextWithContent("Chá - Perfil 2: R$ 3.00");
    expect(chaText).toBeInTheDocument();
  });

  test('renders total correctly', () => {
    render(<BillList bills={bills} />);
    expect(screen.getByText('Total: R$ 8.00')).toBeInTheDocument();
  });
});
