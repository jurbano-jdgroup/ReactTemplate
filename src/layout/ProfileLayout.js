import { useContext } from "react"
import { ToastContainer } from "react-toastify"
import { Context } from "../utils/context"
import { Navigate } from "react-router"

const Layout = ({children}) => {
    const {globalState} = useContext(Context)

    if (!(globalState && globalState.user && globalState.token)) return <Navigate to="/login" />

    return (
        <div className="container-fluid m-0 p-0 w-100">
            <div>
                <div className="row no-gutters justify-content-center m-0 p-0">
                    <div className="col-12 col-md-10 col-lg-9 m-0 p-0">
                        <div className="p-4">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer hideProgressBar />
        </div>
    )
}

export default Layout