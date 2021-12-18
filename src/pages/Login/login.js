import * as yup from 'yup'
import { Formik, Form, Field } from "formik"
import Loader from '../../components/loader/Loader'

const schema = yup.object().shape({
    username: yup.string().required("Debe especificar el nombre de usuario"),
    password: yup.string().required("Debe especificar la contraseña")
})

const defaultValues = {
    username: '',
    password: '',
}

const Login = ({ onSubmit, loading }) => {

    return (
        <>
            {
                <Formik
                    initialValues={defaultValues}
                    validationSchema={schema}
                    onSubmit={onSubmit}
                    className="px-4"
                >
                    {
                        ({ errors, touched }) => (
                            <Form>
                                <div className="form-group mt-3">
                                    <label className="my-2">
                                        <small style={{ fontSize: '0.7rem' }}>
                                            <strong>
                                                NOMBRE DE USUARIO
                                            </strong>
                                        </small>
                                        <small className="text-danger">
                                            *
                                        </small>
                                    </label>
                                    <Field name="username" className="form-control py-3"
                                        placeholder="nombre de usuario" />
                                    {
                                        errors.username && touched.username ? (
                                            <div className="my-1 text-danger">
                                                <small>
                                                    {errors.username}
                                                </small>
                                            </div>
                                        ) : null
                                    }
                                </div>
                                <div className="form-group mt-3">
                                    <label className="my-2">
                                        <small style={{ fontSize: '0.7rem' }}>
                                            <strong>
                                                CONTRASEÑA
                                            </strong>
                                        </small>
                                        <small className="text-danger">
                                            *
                                        </small>
                                    </label>
                                    <Field name="password" className="form-control py-3"
                                        placeholder="contraseña" type="password" />
                                    {
                                        errors.password && touched.password ? (
                                            <div className="my-1 text-danger">
                                                <small>
                                                    {errors.password}
                                                </small>
                                            </div>
                                        ) : null
                                    }
                                </div>
                                <div className="form-group mt-3 d-grid">
                                    <button type="submit" className="btn btn-block btn-primary px-5">
                                        {
                                            loading ? <Loader className="text-white" /> : 'Ingresar'
                                        }
                                    </button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            }
        </>
    )
}

export default Login