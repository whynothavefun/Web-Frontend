import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from '@/lib/wagmi';
import WalletButton from '@/components/WalletButton';
import '@rainbow-me/rainbowkit/styles.css';

const queryClient = new QueryClient();

const App = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider initialChain={1}>
          <div className="min-h-screen p-4 text-white">
            <header className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-black" >
                Whynothave.fun
              </h1>
              <WalletButton />
            </header>
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;
