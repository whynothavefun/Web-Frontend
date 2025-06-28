import React from 'react';
import { Upload } from 'lucide-react';
import { Input, Badge, Button } from '@/components/ui';
import { TokenFormData } from '@/lib/types';

interface CreateTokenStep1Props {
  formData: TokenFormData;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNext: () => void;
}

const CreateTokenStep1: React.FC<CreateTokenStep1Props> = ({
  formData,
  onInputChange,
  onFileChange,
  onNext,
}) => (
  <div className="space-y-6">
    <div className="flex items-center space-x-2">
      <Badge className="bg-purple-500 text-white">Step 1 of 3</Badge>
      <span className="text-sm text-gray-400">Basic Information</span>
    </div>
    <div className="space-y-2">
      <label className="text-sm font-medium text-white">Token Logo</label>
      <div className="group rounded-lg border-2 border-dashed border-purple-500 p-6 text-center transition-all duration-300 hover:border-pink-500">
        <Upload className="mx-auto mb-2 h-10 w-10 text-purple-500 group-hover:text-pink-500" />
        <input
          type="file"
          accept="image/*"
          onChange={onFileChange}
          className="hidden"
          id="logo-upload"
        />
        <label
          htmlFor="logo-upload"
          className="cursor-pointer text-sm text-gray-400 group-hover:text-white"
        >
          Click to upload logo or drag and drop
        </label>
      </div>
    </div>
    <div className="space-y-2">
      <label className="text-sm font-medium text-white">Token Name</label>
      <Input
        name="name"
        value={formData.name}
        onChange={onInputChange}
        placeholder="e.g., My Awesome Token"
        required
        className="border-gray-700 bg-gray-800 text-white placeholder-gray-500"
      />
    </div>
    <div className="space-y-2">
      <label className="text-sm font-medium text-white">Token Symbol</label>
      <Input
        name="symbol"
        value={formData.symbol}
        onChange={onInputChange}
        placeholder="e.g., MAT"
        maxLength={10}
        required
        className="border-gray-700 bg-gray-800 text-white placeholder-gray-500"
      />
    </div>
    <div className="space-y-2">
      <label className="text-sm font-medium text-white">Description</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={onInputChange}
        placeholder="Describe your token..."
        className="w-full resize-none rounded-md border border-gray-700 bg-gray-800 p-3 text-white placeholder-gray-500"
        rows={3}
      />
    </div>
    <div className="flex justify-end">
      <Button
        type="button"
        onClick={onNext}
        disabled={!formData.name || !formData.symbol}
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 disabled:opacity-50"
      >
        Next Step
      </Button>
    </div>
  </div>
);

export default CreateTokenStep1;
