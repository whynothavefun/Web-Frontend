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
