import { Route, Routes } from "react-router-dom"
import { routes } from "../data/routes"
import PublicLayout from "../layout/Layout"

const RouterConfig = () => {
    return (
        <Routes>
            {
                routes.map(item => {
                    let Layout = item.layout ? item.layout : PublicLayout
                    return <Route
                        key={item.id}
                        path={item.path}
                        exact={item.exact}
                        element={<Layout>{item.component}</Layout>}
                    />
                })
            }
        </Routes>
    )
}

export default RouterConfig