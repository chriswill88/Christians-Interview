import { createContext, useState } from 'react';
import Page from '../Page/Page';
import './App.css'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { UserContextProvider } from '../../Providers/UserContext';


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <Page />
      </UserContextProvider>
    </QueryClientProvider>
  )
}

export default App
