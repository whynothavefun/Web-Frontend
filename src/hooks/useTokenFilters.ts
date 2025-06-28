import { useState, useMemo } from 'react';
import { Token } from '@/lib/types';

type SortField = 'marketCap' | 'volume24h' | 'change24h' | 'name';
type SortDirection = 'asc' | 'desc';

export const useTokenFilters = (tokens: Token[]) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<SortField>('marketCap');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [trendFilter, setTrendFilter] = useState<
    'all' | 'up' | 'down' | 'stable'
  >('all');

  const filteredAndSortedTokens = useMemo(() => {
    const filtered = tokens.filter(token => {
      const matchesSearch =
        token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        token.symbol.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTrend = trendFilter === 'all' || token.trend === trendFilter;
      return matchesSearch && matchesTrend;
    });

    filtered.sort((a, b) => {
      let aValue = a[sortField];
      let bValue = b[sortField];

      if (sortField === 'name') {
        aValue = a.name.toLowerCase();
        bValue = b.name.toLowerCase();
      }

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    return filtered;
  }, [tokens, searchTerm, sortField, sortDirection, trendFilter]);

  const handleSortChange = (field: SortField, direction: SortDirection) => {
    setSortField(field);
    setSortDirection(direction);
  };

  return {
    searchTerm,
    setSearchTerm,
    sortField,
    sortDirection,
    trendFilter,
    setTrendFilter,
    filteredAndSortedTokens,
    handleSortChange,
  };
};
