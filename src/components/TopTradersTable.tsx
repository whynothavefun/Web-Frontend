import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { TopTrader } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatNumber } from '@/utils/tokenUtils';

interface TopTradersTableProps {
  traders: TopTrader[];
}

const TopTradersTable: React.FC<TopTradersTableProps> = ({ traders }) => {
  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const getPnlColor = (pnl: number) => {
    return pnl >= 0 ? 'text-green-600' : 'text-red-600';
  };

  const getPnlIcon = (pnl: number) => {
    return pnl >= 0 ? (
      <TrendingUp className="h-4 w-4 text-green-500" />
    ) : (
      <TrendingDown className="h-4 w-4 text-red-500" />
    );
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-black">
          Top 10 Traders
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-2 py-3 text-left text-sm font-medium text-gray-600">
                  Rank
                </th>
                <th className="px-2 py-3 text-left text-sm font-medium text-gray-600">
                  Account
                </th>
                <th className="px-2 py-3 text-left text-sm font-medium text-gray-600">
                  Balance
                </th>
                <th className="px-2 py-3 text-left text-sm font-medium text-gray-600">
                  PnL
                </th>
              </tr>
            </thead>
            <tbody>
              {traders.map((trader, index) => (
                <tr
                  key={trader.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="px-2 py-3 text-sm font-medium text-gray-600">
                    #{index + 1}
                  </td>
                  <td className="px-2 py-3 font-mono text-sm text-black">
                    {formatAddress(trader.accountAddress)}
                  </td>
                  <td className="px-2 py-3 text-sm font-semibold text-black">
                    ${formatNumber(trader.balance)}
                  </td>
                  <td className="px-2 py-3">
                    <div className="flex items-center space-x-1">
                      {getPnlIcon(trader.pnl)}
                      <span
                        className={`text-sm font-semibold ${getPnlColor(trader.pnl)}`}
                      >
                        {trader.pnl >= 0 ? '+' : ''}${formatNumber(trader.pnl)}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopTradersTable;
