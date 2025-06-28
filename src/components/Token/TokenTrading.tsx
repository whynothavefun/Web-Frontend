import React, { useState } from 'react';
import { TrendingUp, TrendingDown, DollarSign, Coins } from 'lucide-react';
import { Token } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { formatNumber, formatPrice } from '@/utils/tokenUtils';

interface TokenTradingProps {
  token: Token;
}

const TokenTrading: React.FC<TokenTradingProps> = ({ token }) => {
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');
  const [amount, setAmount] = useState<string>('');
  const [isCalculating, setIsCalculating] = useState(false);

  // Mock bonding curve calculation
  const calculateBondingCurvePrice = (
    currentPrice: number,
    tradeAmount: number,
    isBuy: boolean
  ) => {
    // Simple bonding curve: price increases with buys, decreases with sells
    const impact = tradeAmount * 0.001; // 0.1% price impact per $1000
    return isBuy ? currentPrice * (1 + impact) : currentPrice * (1 - impact);
  };

  const calculateTrade = () => {
    if (!amount || parseFloat(amount) <= 0) return null;

    const tradeAmount = parseFloat(amount);
    const currentPrice = token.price;
    const newPrice = calculateBondingCurvePrice(
      currentPrice,
      tradeAmount,
      tradeType === 'buy'
    );

    // Calculate tokens received/sold
    const tokensReceived =
      tradeType === 'buy' ? tradeAmount / newPrice : tradeAmount * currentPrice;

    // Calculate fees (0.5% platform + 0.5% auction)
    const platformFee = tradeAmount * 0.005;
    const auctionFee = tradeAmount * 0.005;
    const totalFees = platformFee + auctionFee;
    const netAmount =
      tradeType === 'buy' ? tradeAmount - totalFees : tradeAmount + totalFees;

    return {
      tokensReceived,
      newPrice,
      platformFee,
      auctionFee,
      totalFees,
      netAmount,
      priceImpact: ((newPrice - currentPrice) / currentPrice) * 100,
    };
  };

  const tradeDetails = calculateTrade();

  const handleTrade = () => {
    if (!tradeDetails) return;

    setIsCalculating(true);

    // Simulate trade processing
    setTimeout(() => {
      setIsCalculating(false);
      setAmount('');
      // Here you would typically call your smart contract
      alert(
        `${tradeType === 'buy' ? 'Buy' : 'Sell'} order executed successfully!`
      );
    }, 2000);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-black">
          Trade {token.symbol}
        </CardTitle>
        <p className="text-sm text-gray-600">
          Trade on bonding curve with instant liquidity
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Trade Type Toggle */}
        <div className="flex space-x-1 rounded-lg bg-gray-100 p-1">
          <button
            onClick={() => setTradeType('buy')}
            className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              tradeType === 'buy'
                ? 'bg-green-500 text-white shadow-sm'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span>Buy</span>
            </div>
          </button>
          <button
            onClick={() => setTradeType('sell')}
            className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              tradeType === 'sell'
                ? 'bg-red-500 text-white shadow-sm'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <TrendingDown className="h-4 w-4" />
              <span>Sell</span>
            </div>
          </button>
        </div>

        {/* Amount Input */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-black">
            {tradeType === 'buy' ? 'USDC Amount' : `${token.symbol} Amount`}
          </label>
          <div className="relative">
            <Input
              type="number"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              placeholder={tradeType === 'buy' ? '0.00' : '0.00'}
              className="pr-20"
            />
            <div className="absolute top-1/2 right-3 -translate-y-1/2 text-sm text-gray-500">
              {tradeType === 'buy' ? 'USDC' : token.symbol}
            </div>
          </div>
        </div>

        {/* Trade Preview */}
        {tradeDetails && (
          <div className="space-y-4 rounded-lg bg-gray-50 p-4">
            <h4 className="font-semibold text-black">Trade Preview</h4>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Current Price</span>
                <span className="text-sm font-medium text-black">
                  {formatPrice(token.price)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-sm text-gray-600">New Price</span>
                <span className="text-sm font-medium text-black">
                  {formatPrice(tradeDetails.newPrice)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Price Impact</span>
                <span
                  className={`text-sm font-medium ${
                    tradeDetails.priceImpact > 0
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  {tradeDetails.priceImpact > 0 ? '+' : ''}
                  {tradeDetails.priceImpact.toFixed(2)}%
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-sm text-gray-600">
                  {tradeType === 'buy' ? 'Tokens Received' : 'USDC Received'}
                </span>
                <span className="text-sm font-medium text-black">
                  {tradeType === 'buy'
                    ? `${tradeDetails.tokensReceived.toFixed(4)} ${token.symbol}`
                    : `${tradeDetails.netAmount.toFixed(2)} USDC`}
                </span>
              </div>
            </div>

            {/* Fees Breakdown */}
            <div className="border-t border-gray-200 pt-3">
              <h5 className="mb-2 text-sm font-medium text-black">Fees</h5>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Platform Fee (0.5%)</span>
                  <span className="text-gray-600">
                    {formatPrice(tradeDetails.platformFee)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Auction Fee (0.5%)</span>
                  <span className="text-gray-600">
                    {formatPrice(tradeDetails.auctionFee)}
                  </span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-1">
                  <span className="font-medium text-black">Total Fees</span>
                  <span className="font-medium text-black">
                    {formatPrice(tradeDetails.totalFees)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Trade Button */}
        <Button
          onClick={handleTrade}
          disabled={!tradeDetails || isCalculating}
          className={`w-full ${
            tradeType === 'buy'
              ? 'bg-green-500 hover:bg-green-600'
              : 'bg-red-500 hover:bg-red-600'
          } text-white`}
        >
          {isCalculating ? (
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              <span>Processing...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              {tradeType === 'buy' ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              <span>
                {tradeType === 'buy' ? 'Buy' : 'Sell'} {token.symbol}
              </span>
            </div>
          )}
        </Button>

        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="text-xs">
            1% Total Fees
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default TokenTrading;
