import axios from 'axios'

const Users = {
    users: async () => {
        const res = await axios.get('/users')
        return res?.data?.data
    }
}

export default Users