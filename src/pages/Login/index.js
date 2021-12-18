import Login from "./login"
import { useContext, useState } from "react"
import { toast } from "react-toastify"
import LoginIntegration from './../../integration/login'
import { LocalStorage } from "../../utils/storage"
import { useNavigate } from "react-router"
import { Context, ACTIONS } from "../../utils/context"

const LoginPage = () => {
    const [loadingLogin, setLoadingLogin] = useState(false)
    const {globalDispatch} = useContext(Context)
    const navigate = useNavigate()

    const onLoginSubmit = async (values, actions) => {
        setLoadingLogin(true)

        try {
            const response = await LoginIntegration.login(values)

            const data = {
                user: {
                    username: response.username
                },
                token: response.token
            }

            LocalStorage.setSession(data)
            globalDispatch({
                type: ACTIONS.SESSION_DATA,
                data: data
            })
            toast.success('Logeado correctamente')
            navigate("/profile")
        } catch (error) {
            console.error("error: ", error)
            toast.error("Ocurrió un error, verifique que sus datos son correctos")
        }
        
        setLoadingLogin(false)
        actions.setSubmitting(false)
    }

    return (
        <>
            <div className="row no gutters justify-content-center mt-5">
                <div className="col-12 col-md-9 col-lg-6">
                    <div className="p-4 border rounded shadow-sm bg-white">
                        <h1 className="text-center">Login</h1>
                        <Login onSubmit={onLoginSubmit} loading={loadingLogin} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage