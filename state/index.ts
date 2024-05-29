import { createContext, useContext } from 'react';

export interface AppStateContext {
  previousPathname?: string;
  onDashboard?: boolean;
}

export const AppStateContext = createContext<AppStateContext>({});

export const useAppState = (): AppStateContext => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within a AppStateProvider');
  }
  return context;
};