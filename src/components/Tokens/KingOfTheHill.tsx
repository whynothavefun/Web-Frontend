import React from 'react';
import { Token } from '@/lib/types';
import TokenCard from '@/components/Tokens/TokenCard';

interface KingOfTheHillProps {
  kingToken: Token;
}

const KingOfTheHill: React.FC<KingOfTheHillProps> = ({ kingToken }) => {
  return (
    <div className="mb-12">
      <h2 className="mb-6 flex items-center text-2xl font-bold text-black">
        👑 King of the Hill
      </h2>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-3">
          <TokenCard token={kingToken} isKing={true} />
        </div>
      </div>
    </div>
  );
};

export default KingOfTheHill;
