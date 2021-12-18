import Login from "./login"
import { useState } from "react"
import { toast } from "react-toastify"
import LoginIntegration from './../../integration/login'

const LoginPage = () => {
    const [loadingLogin, setLoadingLogin] = useState(false)

    const onLoginSubmit = async (data, actions) => {
        setLoadingLogin(true)

        try {
            const response = await LoginIntegration.login(data)
            toast.success('Logeado correctamente')
        } catch (error) {
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