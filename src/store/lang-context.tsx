import React, { ReactNode, useState } from "react";

type LangContextType = {
  lang: "en" | "pt";
  setLang: (lang: "en" | "pt") => void;
};

export const LangContext = React.createContext<LangContextType | null>(null);

type Props = {
  children: ReactNode;
};

export function LangContextProvider({ children }: Props) {
  const [lang, setLang] = useState<"en" | "pt">("en");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}
