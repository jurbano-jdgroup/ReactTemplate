import { createContext, useReducer } from 'react'
import { LocalStorage } from "./storage"
import axios from "axios"

export const ACTIONS = {
    SESSION_DATA: 'SESSION_DATA'
}

export const initialState = () => {
    let userData = {user: null, token: null}

    try {
        userData = LocalStorage.getSession()

        if (userData && userData.token) {
            axios.defaults.headers = {
                'Authorization': `Bearer ${userData.token}`
            }
        }
    } catch (error) {
        console.error("Error getting local stored data: ", error)
    }

    return userData
}

export const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.SESSION_DATA:
            return {
                user: action.data.user,
                token: action.data.token
            }
        default:
            break;
    }
}

export const useGlobalState = () => {
    const [globalState, globalDispatch] = useReducer(reducer, initialState())
    return {globalState, globalDispatch}
}

export const Context = createContext(initialState())