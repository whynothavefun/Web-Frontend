import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Button,
} from '@/components/ui';
import CreateTokenStep1 from './CreateTokenStep1';
import CreateTokenStep2 from './CreateTokenStep2';
import CreateTokenStep3 from './CreateTokenStep3';
import { TokenFormData } from '@/lib/types';

interface CreateTokenModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateTokenModal: React.FC<CreateTokenModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<TokenFormData>({
    name: '',
    symbol: '',
    description: '',
    website: '',
    telegram: '',
    twitter: '',
    totalSupply: '',
    initialPrice: '',
    maxBuy: '',
    maxWallet: '',
    buyTax: '',
    sellTax: '',
    logo: null,
  });
  const [step, setStep] = useState(1);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, logo: file }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Creating token:', formData);
    onClose();
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl transform overflow-y-auto rounded-xl bg-gray-900 p-6 shadow-lg transition-all duration-300 ease-in-out"
        onClick={e => e.stopPropagation()}
      >
        <Card className="border-none bg-transparent">
          <CardHeader className="flex flex-row items-center justify-between border-b border-gray-800 pb-4">
            <CardTitle className="text-2xl font-bold text-white">
              Create New Token
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0 text-white hover:bg-gray-800 hover:text-purple-500"
            >
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <CreateTokenStep1
                  formData={formData}
                  onInputChange={handleInputChange}
                  onFileChange={handleFileChange}
                  onNext={() => setStep(2)}
                />
              )}
              {step === 2 && (
                <CreateTokenStep2
                  formData={formData}
                  onInputChange={handleInputChange}
                  onPrev={() => setStep(1)}
                  onNext={() => setStep(3)}
                />
              )}
              {step === 3 && (
                <CreateTokenStep3
                  formData={formData}
                  onInputChange={handleInputChange}
                  onPrev={() => setStep(2)}
                />
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateTokenModal;
