import { useContext } from "react"
import { LocalStorage } from "../../utils/storage"
import { Context, ACTIONS } from "../../utils/context"
import { Navigate } from "react-router"

const Logout = () => {
    const {globalDispatch} = useContext(Context)

    LocalStorage.deleteSession()
    globalDispatch({type: ACTIONS.SESSION_DATA, data: {user: null, token: null}})
    return <Navigate to="/" />
}

export default Logout