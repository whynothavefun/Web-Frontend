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
