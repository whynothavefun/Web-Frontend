import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type SortField = 'marketCap' | 'volume24h' | 'change24h' | 'name';
type SortDirection = 'asc' | 'desc';

interface TokenFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  trendFilter: 'all' | 'up' | 'down' | 'stable';
  onTrendFilterChange: (value: 'all' | 'up' | 'down' | 'stable') => void;
  sortField: SortField;
  sortDirection: SortDirection;
  onSortChange: (field: SortField, direction: SortDirection) => void;
}

const TokenFilters: React.FC<TokenFiltersProps> = ({
  searchTerm,
  onSearchChange,
  trendFilter,
  onTrendFilterChange,
  sortField,
  sortDirection,
  onSortChange,
}) => {
  const handleSortChange = (value: string) => {
    const [field, direction] = value.split('-');
    onSortChange(field as SortField, direction as SortDirection);
  };

  return (
    <div className="mb-8 space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
          <Input
            type="text"
            placeholder="Search by name or symbol..."
            value={searchTerm}
            onChange={e => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        <Select value={trendFilter} onValueChange={onTrendFilterChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All Trends" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Trends</SelectItem>
            <SelectItem value="up">Trending Up</SelectItem>
            <SelectItem value="down">Trending Down</SelectItem>
            <SelectItem value="stable">Stable</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={`${sortField}-${sortDirection}`}
          onValueChange={handleSortChange}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="marketCap-desc">
              Market Cap (High to Low)
            </SelectItem>
            <SelectItem value="marketCap-asc">
              Market Cap (Low to High)
            </SelectItem>
            <SelectItem value="volume24h-desc">
              Volume 24h (High to Low)
            </SelectItem>
            <SelectItem value="volume24h-asc">
              Volume 24h (Low to High)
            </SelectItem>
            <SelectItem value="change24h-desc">
              24h Change (High to Low)
            </SelectItem>
            <SelectItem value="change24h-asc">
              24h Change (Low to High)
            </SelectItem>
            <SelectItem value="name-asc">Name (A-Z)</SelectItem>
            <SelectItem value="name-desc">Name (Z-A)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default TokenFilters;
