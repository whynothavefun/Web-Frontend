import React from 'react';
import { Token } from '@/lib/types';
import TokenCard from '@/components/Tokens/TokenCard';

interface KingOfTheHillProps {
  topTokens: Token[];
}

const KingOfTheHill: React.FC<KingOfTheHillProps> = ({ topTokens }) => {
  return (
    <div className="mb-12">
      <h2 className="mb-6 flex items-center text-2xl font-bold text-black">
        👑 King of the Hill
      </h2>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {topTokens.map((token, index) => (
          <div key={token.id} className="lg:col-span-1">
            <TokenCard token={token} isKing={true} rank={index + 1} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default KingOfTheHill;
