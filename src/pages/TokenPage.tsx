import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { mockTokens, mockTransactions, mockTopTraders } from '@/lib/mock';
import {
  TokenInfo,
  ChartPlaceholder,
  TransactionsTable,
  TopTradersTable,
} from '@/components';
import { Button } from '@/components/ui/button';

const TokenPage: React.FC = () => {
  const { tokenId } = useParams<{ tokenId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'transactions' | 'traders'>(
    'transactions'
  );

  const token = mockTokens.find(t => t.id === tokenId);
  const transactions = mockTransactions[tokenId || ''] || [];
  const traders = mockTopTraders[tokenId || ''] || [];

  if (!token) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-black">
            Token not found
          </h1>
          <Button onClick={() => navigate('/tokens')}>Back to Tokens</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/tokens')}
          className="mb-4 flex items-center space-x-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Tokens</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <ChartPlaceholder />

          <div className="flex space-x-1 rounded-lg bg-gray-100 p-1">
            <button
              onClick={() => setActiveTab('transactions')}
              className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === 'transactions'
                  ? 'bg-white text-black shadow-sm'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Transactions
            </button>
            <button
              onClick={() => setActiveTab('traders')}
              className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === 'traders'
                  ? 'bg-white text-black shadow-sm'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Top Traders
            </button>
          </div>

          <div>
            {activeTab === 'transactions' ? (
              <TransactionsTable transactions={transactions} />
            ) : (
              <TopTradersTable traders={traders} />
            )}
          </div>
        </div>

        <div className="lg:col-span-1">
          <TokenInfo token={token} />
        </div>
      </div>
    </div>
  );
};

export default TokenPage;
