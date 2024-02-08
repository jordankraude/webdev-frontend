'use client'

import React, { createContext, useState, useContext } from 'react';

const SuccessContext = createContext();

export const SuccessProvider = ({ children }) => {
  const [success, setSuccess] = useState(false);

  return (
    <SuccessContext.Provider value={{ success, setSuccess }}>
      {children}
    </SuccessContext.Provider>
  );
};

export const useSuccess = () => useContext(SuccessContext);

