import React from 'react';
import WalletButton from './WalletButton';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-black">Whynothave.fun</h1>
      <WalletButton />
    </header>
  );
};

export default Header;