import React, { createContext } from "react";

type ContextType = {
	isLogin: boolean;
};
const initialState = {
	isLogin: false,
};

export const Context = createContext<ContextType>(initialState);

export const ContextProvider = ({ children }: any) => {
	return <Context.Provider value={initialState}>{children}</Context.Provider>;
};
