import axios, { Axios } from "axios"
import { useState } from "react"

const [user, setUser] = useState(null);

const authProvider = {
    login: async ({email, password})=> {
        await axios.post('/user/login', {email, password})
        .then(response => setUser(response.data))
        .catch(e => console.error('Something went wrong', e.message))
    }

}