import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Token } from '@/lib/types';
import { TokenIcon } from '@/components';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatNumber, formatPrice, getChangeColor } from '@/utils/tokenUtils';

interface TokenCardProps {
  token: Token;
  isKing?: boolean;
}

const TokenCard: React.FC<TokenCardProps> = ({ token, isKing = false }) => {
  const navigate = useNavigate();

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'down':
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      case 'stable':
        return <Minus className="h-4 w-4 text-gray-500" />;
    }
  };

  const handleCardClick = () => {
    navigate(`/tokens/${token.id}`);
  };

  return (
    <Card
      className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
        isKing
          ? 'border-yellow-500 shadow-lg shadow-yellow-500/20'
          : 'hover:border-blue-500'
      }`}
      onClick={handleCardClick}
    >
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <TokenIcon symbol={token.symbol} size={40} />
            <div>
              <CardTitle className="text-lg font-bold text-black">
                {token.name}
              </CardTitle>
              <p className="text-sm text-gray-600">{token.symbol}</p>
            </div>
          </div>
          {isKing && (
            <Badge
              variant="default"
              className="bg-yellow-500 text-black hover:bg-yellow-600"
            >
              👑 KING
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Price</span>
          <span className="font-semibold text-black">
            {formatPrice(token.price)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Market Cap</span>
          <span className="font-semibold text-black">
            {formatNumber(token.marketCap)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">24h Volume</span>
          <span className="font-semibold text-black">
            {formatNumber(token.volume24h)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">24h Change</span>
          <div className="flex items-center space-x-1">
            {getTrendIcon(token.trend)}
            <span
              className={`font-semibold ${getChangeColor(token.change24h)}`}
            >
              {token.change24h >= 0 ? '+' : ''}
              {token.change24h.toFixed(2)}%
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TokenCard;
