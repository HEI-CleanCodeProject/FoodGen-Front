import axios, { Axios } from "axios"
const baseURL= ""
const authProvider = {

    login: async ({email, password}) => {
        await axios.post('{baseURL}/users/login', {email, password})
        .then(response => {
            sessionStorage.setItem("sessionToken", response.data);
            return response.data
        })
        .catch(e => console.error('Something went wrong', e.message))
    },

    logout: async () => {
        await axios.get('{baseURL}/users/logout')
        .then(() => {
            sessionStorage.removeItem("sessionStorage");
            axios.get('users/login')
        })
        .catch(e => console.error('Something went wrong', e.message))
    }
}