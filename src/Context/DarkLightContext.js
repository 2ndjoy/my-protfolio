import { createContext, useState } from "react";

export const DarkLightContext = createContext();

const DarkLightProvider = ({ children }) => {
  // For theme changing
  const [theme, setTheme] = useState(true);

  const authInfo = {
    theme,
    setTheme,
  };

  return (
    <DarkLightContext.Provider value={authInfo}>
      {children}
    </DarkLightContext.Provider>
  );
};

export default DarkLightProvider;
