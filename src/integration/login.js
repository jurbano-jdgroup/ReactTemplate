import axios from 'axios'

const Login = {
    login: async (data) => {
        const res = await axios.post('/login', data)
        return res.data
    }
}

export default Login