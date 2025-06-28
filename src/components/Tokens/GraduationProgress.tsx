import React from 'react';
import { Trophy, TrendingUp } from 'lucide-react';
import { Token } from '@/lib/types';
import { Progress } from '@/components/ui';
import {
  calculateMarketCapProgress,
  calculateFeeProgress,
  formatFeePot,
  getGraduationStatus,
  formatNumber,
} from '@/utils/tokenUtils';

interface GraduationProgressProps {
  token: Token;
}

const GraduationProgress: React.FC<GraduationProgressProps> = ({ token }) => {
  const marketCapProgress = calculateMarketCapProgress(token);
  const feeProgress = calculateFeeProgress(token);
  const graduationStatus = getGraduationStatus(token);

  return (
    <div className="mt-4 space-y-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Trophy className="h-4 w-4 text-yellow-500" />
          <span className="text-sm font-semibold text-black">
            Graduation Progress
          </span>
        </div>
        <span className="text-xs font-medium text-gray-600">
          {graduationStatus}
        </span>
      </div>

      {/* Market Cap Progress */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-3 w-3 text-blue-500" />
            <span className="text-xs text-gray-600">Market Cap</span>
          </div>
          <span className="text-xs font-medium text-black">
            {formatNumber(token.marketCap)} / {formatNumber(token.maxMarketCap)}
          </span>
        </div>
        <Progress value={marketCapProgress} className="h-1.5" />
        <div className="text-right">
          <span className="text-xs text-gray-500">
            {marketCapProgress.toFixed(1)}% of target
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-purple-500" />
            <span className="text-xs text-gray-600">Fee Pot</span>
          </div>
          <span className="text-xs font-medium text-black">
            {formatFeePot(token.feePot)} /{' '}
            {formatFeePot(token.graduationTarget)}
          </span>
        </div>
        <Progress value={feeProgress} className="h-1.5" />
        <div className="text-right">
          <span className="text-xs text-gray-500">
            {feeProgress.toFixed(1)}% of target
          </span>
        </div>
      </div>
    </div>
  );
};

export default GraduationProgress;
