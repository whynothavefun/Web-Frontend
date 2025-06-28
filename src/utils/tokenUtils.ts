import { Token } from '@/lib/types';

export const formatNumber = (num: number): string => {
  if (num >= 1e9) return `$${(num / 1e9).toFixed(1)}B`;
  if (num >= 1e6) return `$${(num / 1e6).toFixed(1)}M`;
  if (num >= 1e3) return `$${(num / 1e3).toFixed(1)}K`;
  return `$${num.toFixed(0)}`;
};

export const formatPrice = (price: number): string => {
  if (price >= 1) return `$${price.toFixed(2)}`;
  return `$${price.toFixed(4)}`;
};

export const getKingOfTheHill = (tokens: Token[]): Token[] => {
  return tokens.sort((a, b) => b.marketCap - a.marketCap).slice(0, 3);
};

export const getChangeColor = (change: number): string => {
  return change >= 0 ? 'text-green-500' : 'text-red-500';
};
