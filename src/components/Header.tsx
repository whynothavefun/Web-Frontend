import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import WalletButton from './WalletButton';
import CreateTokenModal from './CreateToken/CreateTokenModal';
import { Button } from './ui';

const Header: React.FC = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between border-b border-gray-200 bg-white p-4">
        <h1 className="text-2xl font-bold text-black">Whynothave.fun</h1>
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => setIsCreateModalOpen(true)}
            className="flex items-center space-x-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 font-medium text-white hover:from-blue-600 hover:to-purple-700"
          >
            <Plus className="h-4 w-4" />
            <span>Create Token</span>
          </Button>
          <WalletButton />
        </div>
      </header>

      <CreateTokenModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </>
  );
};

export default Header;
