import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Token } from '@/lib/types';
import { TokenIcon } from '@/components';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatNumber, formatPrice, getChangeColor } from '@/utils/tokenUtils';

interface TokenInfoProps {
  token: Token;
}

const TokenInfo: React.FC<TokenInfoProps> = ({ token }) => {
  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-5 w-5 text-green-500" />;
      case 'down':
        return <TrendingDown className="h-5 w-5 text-red-500" />;
      case 'stable':
        return <Minus className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <TokenIcon symbol={token.symbol} size={60} />
          <div>
            <CardTitle className="text-2xl font-bold text-black">
              {token.name}
            </CardTitle>
            <p className="text-lg text-gray-600">{token.symbol}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Current Price</p>
            <p className="text-xl font-bold text-black">
              {formatPrice(token.price)}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">24h Change</p>
            <div className="flex items-center space-x-2">
              {getTrendIcon(token.trend)}
              <span
                className={`text-xl font-bold ${getChangeColor(token.change24h)}`}
              >
                {token.change24h >= 0 ? '+' : ''}
                {token.change24h.toFixed(2)}%
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Market Cap</p>
            <p className="text-lg font-semibold text-black">
              {formatNumber(token.marketCap)}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">24h Volume</p>
            <p className="text-lg font-semibold text-black">
              {formatNumber(token.volume24h)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TokenInfo;
