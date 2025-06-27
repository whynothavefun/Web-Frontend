import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'wagmi';

import { Chain } from 'viem';

const hyperevm = {
  id: 999,
  name: 'HyperEVM',
  nativeCurrency: {
    name: 'HYPE',
    symbol: 'HYPE',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['https://rpc.hyperevm.com'] },
    public: { http: ['https://rpc.hyperevm.com'] },
  },
  blockExplorers: {
    default: {
      name: 'HyperEVM Explorer',
      url: 'https://explorer.hyperevm.com',
    },
  },
} as const satisfies Chain;

export const config = getDefaultConfig({
  appName: 'Whynothave.fun',
  projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID,
  chains: [hyperevm],
  transports: {
    [hyperevm.id]: http('https://rpc.hyperevm.com'),
  },
});
