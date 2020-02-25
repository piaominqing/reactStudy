import React from 'react';
// 防止provider 未赋值 传一个默认值
export const UserContext = React.createContext({userColor:'pink'})
export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer