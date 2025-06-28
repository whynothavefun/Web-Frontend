import React from 'react';
import { mockTokens } from '@/lib/mock';
import { TokenFilters, KingOfTheHill, TokensGrid } from '@/components';
import { useTokenFilters } from '@/hooks/useTokenFilters';
import { getKingOfTheHill } from '@/utils/tokenUtils';

const TokensPage: React.FC = () => {
  const {
    searchTerm,
    setSearchTerm,
    sortField,
    sortDirection,
    trendFilter,
    setTrendFilter,
    filteredAndSortedTokens,
    handleSortChange,
  } = useTokenFilters(mockTokens);

  const kingOfTheHill = getKingOfTheHill(mockTokens);

  return (
    <div className="mx-auto max-w-7xl px-4">
      <KingOfTheHill topTokens={kingOfTheHill} />

      <TokenFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        trendFilter={trendFilter}
        onTrendFilterChange={setTrendFilter}
        sortField={sortField}
        sortDirection={sortDirection}
        onSortChange={handleSortChange}
      />

      <TokensGrid tokens={filteredAndSortedTokens} />
    </div>
  );
};

export default TokensPage;
