import { createContext, useContext, useState } from 'react';

const SnackbarContext = createContext();
const SetSnackbarContext = createContext();

const SnackbarProvider = ({ children }) => {
  const [state, setState] = useState('');

  return (
    <SnackbarContext.Provider value={state}>
      <SetSnackbarContext.Provider value={setState}>
        {children}
      </SetSnackbarContext.Provider>
    </SnackbarContext.Provider>
  );
};

const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (context === undefined) {
    throw new Error('useSnackbar hook must be used within a SnackbarProvider');
  }
  return context;
};

const useSetSnackbar = () => {
  const context = useContext(SetSnackbarContext);
  if (context === undefined) {
    throw new Error('useSetSnackbar must be used within a SnackbarProvider');
  }
  return context;
};

export { SnackbarProvider, useSnackbar, useSetSnackbar };
