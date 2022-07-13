import { createContext, useReducer } from "react";
import {
	LoginReducer,
	LoginInitialState,
	LoginType,
} from "../reducers/LoginReducer";
import { reducerActionType } from "../types/reducerActionType";

type initialStateType = {
	login: LoginType;
};

type ContextType = {
	state: initialStateType;
	dispatch: React.Dispatch<any>;
};

const initialState = {
	login: LoginInitialState,
};

export const Context = createContext<ContextType>({
	state: initialState,
	dispatch: () => null,
});

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
	login: LoginReducer(state.login, action),
});

export const ContextProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer(mainReducer, initialState);
	return (
		<Context.Provider value={{ state, dispatch }}>
			{children}
		</Context.Provider>
	);
};
