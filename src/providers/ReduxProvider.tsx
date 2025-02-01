// src/providers/ReduxProvider.tsx
'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store'; // Assuming the store is defined in redux/store.ts

interface ReduxProviderProps {
  children: ReactNode;
}

const ReduxProvider = ({ children }: ReduxProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
