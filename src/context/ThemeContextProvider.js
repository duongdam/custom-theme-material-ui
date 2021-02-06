import React, {createContext, useEffect, useState} from 'react';
import {useGlobal} from 'reactn';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {LinearProgress} from '@material-ui/core';

export const UseThemeContext = createContext({});

export const ThemeProviderContext = ({children}) => {
  const theme = useThemeConText();

  if (!theme)
    return <LinearProgress/>;

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
