import React from 'react';
import { Input, Badge, Button } from '@/components/ui';
import { TokenFormData } from '@/lib/types';

interface CreateTokenStep2Props {
  formData: TokenFormData;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onPrev: () => void;
  onNext: () => void;
}

const CreateTokenStep2: React.FC<CreateTokenStep2Props> = ({
  formData,
  onInputChange,
  onPrev,
  onNext,
}) => (
  <div className="space-y-6">
    <div className="flex items-center space-x-2">
      <Badge className="bg-purple-500 text-white">Step 2 of 3</Badge>
      <span className="text-sm text-gray-400">Tokenomics</span>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-white">Total Supply</label>
        <Input
          name="totalSupply"
          value={formData.totalSupply}
          onChange={onInputChange}
          placeholder="1,000,000"
          type="number"
          className="border-gray-700 bg-gray-800 text-white placeholder-gray-500"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-white">
          Initial Price (USDC)
        </label>
        <Input
          name="initialPrice"
          value={formData.initialPrice}
          onChange={onInputChange}
          placeholder="0.001"
          type="number"
          step="0.000001"
          className="border-gray-700 bg-gray-800 text-white placeholder-gray-500"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-white">Max Buy (%)</label>
        <Input
          name="maxBuy"
          value={formData.maxBuy}
          onChange={onInputChange}
          placeholder="5"
          type="number"
          className="border-gray-700 bg-gray-800 text-white placeholder-gray-500"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-white">Max Wallet (%)</label>
        <Input
          name="maxWallet"
          value={formData.maxWallet}
          onChange={onInputChange}
          placeholder="10"
          type="number"
          className="border-gray-700 bg-gray-800 text-white placeholder-gray-500"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-white">Buy Tax (%)</label>
        <Input
          name="buyTax"
          value={formData.buyTax}
          onChange={onInputChange}
          placeholder="5"
          type="number"
          className="border-gray-700 bg-gray-800 text-white placeholder-gray-500"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-white">Sell Tax (%)</label>
        <Input
          name="sellTax"
          value={formData.sellTax}
          onChange={onInputChange}
          placeholder="10"
          type="number"
          className="border-gray-700 bg-gray-800 text-white placeholder-gray-500"
        />
      </div>
    </div>
    <div className="flex justify-between">
      <Button
        type="button"
        onClick={onPrev}
        variant="outline"
        className="border-gray-700 text-white hover:bg-gray-800"
      >
        Previous
      </Button>
      <Button
        type="button"
        onClick={onNext}
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
      >
        Next Step
      </Button>
    </div>
  </div>
);

export default CreateTokenStep2;
