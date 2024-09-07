import React from 'react';

interface Bill {
  description: string;
  amount: number;
  profile: string;
}

interface BillListProps {
  bills: Bill[];
}

const BillList: React.FC<BillListProps> = ({ bills }) => {
  const total = bills.reduce((sum, bill) => sum + bill.amount, 0);
  const share = total / 2;

  return (
    <div>
      <h2>Contas do Mês</h2>
      <ul>
        {bills.map((bill, index) => (
          <li key={index}>
            {bill.description} - {bill.profile}: R$ {bill.amount.toFixed(2)}
          </li>
        ))}
      </ul>
      <div>
        <p>Total: R$ {total.toFixed(2)}</p>
        <p>Deve a cada um: R$ {share.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default BillList;
