export const SESSION_KEYS = {
    SESSION: '_app_session_data'
}

export const SessionStorage = {
    // get session
    getSession: () => {
        const storage = window.sessionStorage
        
        if (!storage) throw Error("The browser doesn't support session storage")

        return JSON.parse(storage.getItem(SESSION_KEYS.SESSION))
    },
    // set session
    setSession: (data) => {
        if (!(data.user && data.token)) throw Error("No session data specified")
        const storage = window.sessionStorage
        
        if (!storage) throw Error("The browser doesn't support session storage")

        return storage.setItem(SESSION_KEYS.SESSION, JSON.stringify(data))
    },
    // delete session
    deleteSession: () => {
        const storage = window.sessionStorage
        
        if (!storage) throw Error("The browser doesn't support session storage")

        return storage.clear()
    }
}

export const LocalStorage = {
    // get session
    getSession: () => {
        const storage = window.localStorage
        
        if (!storage) throw Error("The browser doesn't support local storage")

        return JSON.parse(storage.getItem(SESSION_KEYS.SESSION))
    },
    // set session
    setSession: (data) => {
        if (!(data.user && data.token)) throw Error("No session data specified")
        const storage = window.localStorage
        
        if (!storage) throw Error("The browser doesn't support local storage")

        return storage.setItem(SESSION_KEYS.SESSION, JSON.stringify(data))
    },
    // delete session
    deleteSession: () => {
        const storage = window.localStorage
        
        if (!storage) throw Error("The browser doesn't support local storage")

        return storage.clear()
    }
}