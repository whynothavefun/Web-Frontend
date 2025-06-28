import React from 'react';
import { useAccount, useDisconnect } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Button } from '@/components/ui/button';

const WalletButton: React.FC = () => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <div className="flex items-center gap-2">
      {isConnected ? (
        <Button
          variant="destructive"
          className="to-fuchsia-500px-4 bg-linear-to-bl from-violet-500 py-2 text-white transition-colors"
          onClick={() => disconnect()}
        >
          Disconnect: {address?.slice(0, 6)}...{address?.slice(-4)}
        </Button>
      ) : (
        <ConnectButton.Custom>
          {({ openConnectModal }) => (
            <Button
              className="to-fuchsia-500px-4 bg-linear-to-bl from-violet-500 py-2 text-white transition-colors"
              onClick={openConnectModal}
            >
              Connect Wallet
            </Button>
          )}
        </ConnectButton.Custom>
      )}
    </div>
  );
};

export default WalletButton;
