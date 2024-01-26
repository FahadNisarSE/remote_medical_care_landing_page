"use client"

import React, { createContext, useContext, useState, ReactNode } from "react";

type SectionInViewValue = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const SectionInViewContext = createContext<SectionInViewValue | null>(null);

type SectionInViewContextProviderProps = {
  children: ReactNode;
};

function SectionInViewContextProvider({ children }: SectionInViewContextProviderProps) {
  const [value, setValue] = useState<string>("home");

  const contextValue: SectionInViewValue = {
    value,
    setValue,
  };

  return (
    <SectionInViewContext.Provider value={contextValue}>{children}</SectionInViewContext.Provider>
  );
}

const useSectionInViewContext = (): SectionInViewValue => {
  const context = useContext(SectionInViewContext);
  if (!context) {
    throw new Error("useSectionInViewContext must be used within a SectionInViewContextProvider");
  }
  return context;
};

export { SectionInViewContextProvider, useSectionInViewContext };