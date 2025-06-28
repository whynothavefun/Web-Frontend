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

// Graduation progress utilities
export const calculateMarketCapProgress = (token: Token): number => {
  return Math.min((token.marketCap / token.maxMarketCap) * 100, 100);
};

export const calculateFeeProgress = (token: Token): number => {
  return Math.min((token.feePot / token.graduationTarget) * 100, 100);
};

export const formatFeePot = (feePot: number): string => {
  return `${(feePot / 1000).toFixed(1)}k HYPE`;
};

export const getGraduationStatus = (token: Token): string => {
  const feeProgress = calculateFeeProgress(token);
  const mcapProgress = calculateMarketCapProgress(token);

  if (feeProgress >= 100 && mcapProgress >= 100) {
    return 'Ready to Graduate!';
  } else if (feeProgress >= 80 || mcapProgress >= 80) {
    return 'Close to Graduation';
  } else if (feeProgress >= 50 || mcapProgress >= 50) {
    return 'Making Progress';
  } else {
    return 'Early Stage';
  }
};
