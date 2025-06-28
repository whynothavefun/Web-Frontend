export interface Token {
  id: string;
  name: string;
  symbol: string;
  price: number;
  marketCap: number;
  volume24h: number;
  change24h: number;
  trend: 'up' | 'down' | 'stable';
  image: string;
  feePot: number;
  graduationTarget: number;
  currentRank: number;
  maxMarketCap: number;
}

export interface Transaction {
  id: string;
  accountAddress: string;
  type: 'buy' | 'sell';
  price: number;
  usdc: number;
  lvr: number;
  date: string;
  transactionHash: string;
}

export interface TopTrader {
  id: string;
  accountAddress: string;
  balance: number;
  pnl: number;
}

export interface UserMessage {
  id: string;
  username: string;
  avatar: string;
  message: string;
  date: string;
}

export interface TokenFormData {
  name: string;
  symbol: string;
  description: string;
  website: string;
  telegram: string;
  twitter: string;
  totalSupply: string;
  initialPrice: string;
  maxBuy: string;
  maxWallet: string;
  buyTax: string;
  sellTax: string;
  logo: File | null;
}
