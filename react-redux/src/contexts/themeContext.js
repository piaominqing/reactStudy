import React from 'react';
// 防止provider 未赋值 传一个默认值
export const ThemeContext = React.createContext({themeColor:'pink'})
export const ThemeProvider = ThemeContext.Provider
export const ThemeConsumer = ThemeContext.Consumer