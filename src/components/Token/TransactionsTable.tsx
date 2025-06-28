import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Transaction } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatPrice } from '@/utils/tokenUtils';

interface TransactionsTableProps {
  transactions: Transaction[];
}

const TransactionsTable: React.FC<TransactionsTableProps> = ({
  transactions,
}) => {
  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const formatHash = (hash: string) => {
    return `${hash.slice(0, 8)}...${hash.slice(-6)}`;
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-black">
          Recent Transactions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-2 py-3 text-left text-sm font-medium text-gray-600">
                  Account
                </th>
                <th className="px-2 py-3 text-left text-sm font-medium text-gray-600">
                  Type
                </th>
                <th className="px-2 py-3 text-left text-sm font-medium text-gray-600">
                  Price
                </th>
                <th className="px-2 py-3 text-left text-sm font-medium text-gray-600">
                  USDC
                </th>
                <th className="px-2 py-3 text-left text-sm font-medium text-gray-600">
                  LVR
                </th>
                <th className="px-2 py-3 text-left text-sm font-medium text-gray-600">
                  Date
                </th>
                <th className="px-2 py-3 text-left text-sm font-medium text-gray-600">
                  Transaction
                </th>
              </tr>
            </thead>
          </table>
          <div className="max-h-110 overflow-y-auto">
            <table className="w-full">
              <tbody>
                {transactions.map(transaction => (
                  <tr
                    key={transaction.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="px-2 py-3 font-mono text-sm text-black">
                      {formatAddress(transaction.accountAddress)}
                    </td>
                    <td className="px-2 py-3">
                      <div className="flex items-center space-x-1">
                        {transaction.type === 'buy' ? (
                          <ArrowUpRight className="h-4 w-4 text-green-500" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4 text-red-500" />
                        )}
                        <span
                          className={`text-sm font-medium ${
                            transaction.type === 'buy'
                              ? 'text-green-600'
                              : 'text-red-600'
                          }`}
                        >
                          {transaction.type.toUpperCase()}
                        </span>
                      </div>
                    </td>
                    <td className="px-2 py-3 text-sm text-black">
                      {formatPrice(transaction.price)}
                    </td>
                    <td className="px-2 py-3 text-sm text-black">
                      ${transaction.usdc.toLocaleString()}
                    </td>
                    <td className="px-2 py-3 text-sm text-black">
                      {transaction.lvr.toFixed(3)}
                    </td>
                    <td className="px-2 py-3 text-sm text-gray-600">
                      {formatDate(transaction.date)}
                    </td>
                    <td className="px-2 py-3 font-mono text-sm text-blue-600">
                      <a
                        href={`https://etherscan.io/tx/${transaction.transactionHash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {formatHash(transaction.transactionHash)}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionsTable;
