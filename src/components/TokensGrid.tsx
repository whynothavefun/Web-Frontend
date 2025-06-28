import React from 'react';
import { Token } from '@/lib/types';
import TokenCard from './TokenCard';

interface TokensGridProps {
  tokens: Token[];
  title?: string;
}

const TokensGrid: React.FC<TokensGridProps> = ({
  tokens,
  title = 'All Tokens',
}) => {
  return (
    <div className="mb-8">
      <h2 className="mb-6 text-2xl font-bold text-black">{title}</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tokens.map(token => (
          <TokenCard key={token.id} token={token} />
        ))}
      </div>
    </div>
  );
};

export default TokensGrid;
