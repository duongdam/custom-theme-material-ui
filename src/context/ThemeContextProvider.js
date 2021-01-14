import React, {createContext, useEffect, useState} from 'react';
import {useGlobal} from 'reactn';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

export const UseThemeContext = createContext();

export const ThemeProviderContext = ({children}) => {
  const theme = useThemeConText();
  return (
      <UseThemeContext.Provider value={theme}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </UseThemeContext.Provider>
  );
};

export const useThemeConText = () => {
  const [colors] = useGlobal('colors');
  const [theme, setTheme] = useState(createMuiTheme({}));

  console.log(colors);

  useEffect(() => {
    if (!colors?.primary)
      return;

    setTheme(createMuiTheme({
      props: {
        primaryColor: colors.primary,
        secondaryColor: colors.secondary,
      },
      // and more setting to use
    }));
  }, [colors]);

  return theme;
};
