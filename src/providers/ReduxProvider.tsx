// src/provider/cartProvider.tsx (or wherever you want it)
'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '@/redux/store'; // Correct import path

interface ReduxProviderProps {
  children: ReactNode;
}

const ReduxProvider = ({ children }: ReduxProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;