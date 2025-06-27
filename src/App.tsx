import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { config } from '@/lib/wagmi';
import { Header } from '@/components';
import { TokensPage, TokenPage, NotFound } from '@/pages';
import '@rainbow-me/rainbowkit/styles.css';

const queryClient = new QueryClient();

const App = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider initialChain={42161}>
          <BrowserRouter>
            <div className="min-h-screen p-4 text-white">
              <Header />
              <main>
                <Routes>
                  <Route path="/tokens" element={<TokensPage />} />
                  <Route path="/tokens/:tokenId" element={<TokenPage />} />
                  <Route path="/404" element={<NotFound />} />
                  <Route path="*" element={<Navigate to="/404" replace />} />
                </Routes>
              </main>
            </div>
          </BrowserRouter>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;
