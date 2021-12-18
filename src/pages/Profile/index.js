import { Link, Routes, Route } from "react-router-dom"
import Users from "./users"

const Profile = () => {
    return (
        <div className="p-4 rounded border shadow bg-white">
            <div className="d-flex flex-row justify-content-between">
                <div>
                    Profile
                </div>
                <div>
                    <Link to="/logout">Salir</Link>
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-12 col-md-5 col-lg-4">
                    <div className="d-flex flex-col">
                        <Link to="./users">Usuarios</Link>
                    </div>
                </div>
                <div className="col-12 col-md-7 col-lg-8">
                    <Routes>
                        <Route path="users" element={<Users />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Profile