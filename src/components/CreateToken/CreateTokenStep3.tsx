import React from 'react';
import { Input, Badge, Button } from '@/components/ui';
import { TokenFormData } from '@/lib/types';

interface CreateTokenStep3Props {
  formData: TokenFormData;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onPrev: () => void;
}

const CreateTokenStep3: React.FC<CreateTokenStep3Props> = ({
  formData,
  onInputChange,
  onPrev,
}) => (
  <div className="space-y-6">
    <div className="flex items-center space-x-2">
      <Badge className="bg-purple-500 text-white">Step 3 of 3</Badge>
      <span className="text-sm text-gray-400">Social Links & Review</span>
    </div>
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-white">Website</label>
        <Input
          name="website"
          value={formData.website}
          onChange={onInputChange}
          placeholder="https://yourwebsite.com"
          type="url"
          className="border-gray-700 bg-gray-800 text-white placeholder-gray-500"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-white">Telegram</label>
        <Input
          name="telegram"
          value={formData.telegram}
          onChange={onInputChange}
          placeholder="https://t.me/yourgroup"
          type="url"
          className="border-gray-700 bg-gray-800 text-white placeholder-gray-500"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-white">Twitter</label>
        <Input
          name="twitter"
          value={formData.twitter}
          onChange={onInputChange}
          placeholder="https://twitter.com/yourhandle"
          type="url"
          className="border-gray-700 bg-gray-800 text-white placeholder-gray-500"
        />
      </div>
    </div>
    <div className="space-y-2 rounded-lg bg-gray-800 p-4">
      <h4 className="font-medium text-white">Review Your Token</h4>
      <div className="space-y-1 text-sm text-gray-400">
        <p>
          <strong>Name:</strong> {formData.name || 'N/A'}
        </p>
        <p>
          <strong>Symbol:</strong> {formData.symbol || 'N/A'}
        </p>
        <p>
          <strong>Total Supply:</strong> {formData.totalSupply || 'N/A'}
        </p>
        <p>
          <strong>Initial Price:</strong> ${formData.initialPrice || 'N/A'} USDC
        </p>
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
        type="submit"
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
      >
        Create Token
      </Button>
    </div>
  </div>
);

export default CreateTokenStep3;
