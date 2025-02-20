'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/lib/redux/store'; 
//01
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/lib/persistStore';



function Providers ({ children, }: readonly<{children:React.ReactNode;}>) {
    //02
    let persistore = persistStore(store)
  return(
     <Provider store={store}>
    //03
    <PersistGate persistor={persistore}>
    {children}
    </PersistGate>
    
    </Provider>
  )
};

export default Provider;