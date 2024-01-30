import axios, { Axios } from "axios"

const authProvider = {
    login: async ({email, password}) => {
        await axios.post('/users/login', {email, password})
        .then(response => {
            sessionStorage.setItem("sessionToken", response.data);
            return response.data
        })
        .catch(e => console.error('Something went wrong', e.message))
    },

    logout: async () => {
        await axios.get('/users/logout')
        .then(() => {
            sessionStorage.removeItem("sessionStorage");
            axios.get('users/login')
        })
        .catch(e => console.error('Something went wrong', e.message))
    }
}