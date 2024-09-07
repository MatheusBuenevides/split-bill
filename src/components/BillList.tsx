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
    <div className="bg-white p-6 rounded-lg shadow-md">
      <ul className="mb-4">
        {bills.map((bill, index) => (
          <li key={index} className="mb-2">
            <span className="font-bold">{bill.description}</span> - {bill.profile}: R$ {bill.amount.toFixed(2)}
          </li>
        ))}
      </ul>
      <div className="text-lg">
        <p>Total: R$ {total.toFixed(2)}</p>
        <p>Cada um deve: R$ {share.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default BillList;
