import { createContext, useMemo, useReducer } from "react";

type State = {
    username: string
    isButtonDisabled: boolean
    helperText: string
    isError: boolean
    condition: string
};

type Action = { type: 'setUsername', payload: string }
    | { type: 'setIsButtonDisabled', payload: boolean }
    | { type: 'loginSuccess', payload: string, username: string }
    | { type: 'logoutSuccess', payload: string }
    | { type: 'loginFailed', payload: string }
    | { type: 'setIsError', payload: boolean };

type AuthInterface = {
    authAction: AuthAction
    state: State
}

type AuthAction = {
    handleLogin: Function
    handleLogout: Function
}

const initialState: State = {
    username: '',
    isButtonDisabled: true,
    helperText: '',
    isError: false,
    condition: ''
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'setUsername':
            return {
                ...state,
                username: action.payload
            };
        case 'setIsButtonDisabled':
            return {
                ...state,
                isButtonDisabled: action.payload
            };
        case 'loginSuccess':
            return {
                ...state,
                username: action.username,
                helperText: action.payload,
                isError: false,
                condition: 'logedin'
            };
        case 'loginFailed':
            return {
                ...state,
                helperText: action.payload,
                isError: true
            };
        case 'logoutSuccess':
            return {
                ...state,
                helperText: action.payload,
                isError: true,
                condition: ''
            };
        case 'setIsError':
            return {
                ...state,
                isError: action.payload
            };
    }
}

export const Context = createContext<AuthInterface | null>(null)

const Provider = ({ children }: { children: any }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const authAction = useMemo(() => ({
        handleLogin: (username: string) => {
            if (username === 'abc@email.com') {
                window.localStorage.setItem('usenarme', username);
                dispatch({
                    type: 'loginSuccess',
                    payload: 'Login Successfully',
                    username
                });
            } else {
                dispatch({
                    type: 'loginFailed',
                    payload: 'Incorrect username'
                });
            }
        },
        handleLogout: () => {
            window.localStorage.getItem('username')
            window.localStorage.clear();
            dispatch({
                type: 'loginSuccess',
                payload: 'Logout Successfully',
                username: ""
            });
        }
    }), [])

    return <Context.Provider value={{ authAction, state }}>
        {children}
    </Context.Provider>

}

export default { Provider, Consumer: Context.Consumer }