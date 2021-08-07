import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { Routes } from './routes';


function App() {
  return (
    <>
      <ToastProvider placement="bottom-center">
        <Routes />
      </ToastProvider>
    </>
  );
}

export default App;
