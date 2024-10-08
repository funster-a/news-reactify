import { createContext, ReactNode, useContext, useState } from "react";

interface IThemeContext {
    isDark: boolean;
    toggleTheme: () => void;
  }
  
export const ThemeContext = createContext<IThemeContext | undefined>(undefined)

export const useTheme = () => {
    const context = useContext(ThemeContext)

    if(!context) {
        throw new Error('Context error')
    }

    return context;
}

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider =({children}: ThemeProviderProps) => {
    const [isDark, setDark] = useState(false);

    const toggleTheme = () => {
        setDark((prev) => !prev)
    }

    return (
        <ThemeContext.Provider value={{isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}