import { useEffect, useState } from "react"
import Loader  from "../../components/loader/Loader"
import UsersIntegration from "../../integration/users"
import { toast } from "react-toastify"

const Users =  () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        setLoading(true)

        try {
            const res = await UsersIntegration.users()
            setData(res.content)
        } catch (error) {
            toast.error("Error obteniendo los datos de los usuarios")
        }

        setLoading(false)
    }

    return (
        <>
        {
            loading ? <Loader /> :
            <div>
                {
                    data.map((user, idx) => (
                        <div key={`user-key-${idx}`}>
                            Nombre: {user.name}
                        </div>
                    ))
                }
            </div>
        }
        </>
    )
}

export default Users