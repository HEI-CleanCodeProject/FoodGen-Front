import axios from "axios"

const baseUrl = "";

export const authProvider = {
    login: async ({email, password}) => {
        return axios.post(`${baseUrl}}/users/login`, {email, password})
        .then(response => {
            sessionStorage.setItem("FoodGen-token", response.data);
            return response.data
        })
        .catch(e => console.error('Something went wrong', e.message))
    },

    logout: async () => {
        return axios.get(`${baseUrl}}/users/logout`)
        .then(() => {
            sessionStorage.removeItem("FoodGen-token");
        })
        .catch(e => console.error('Something went wrong', e.message))
    },
    
    verifyAuthentificationByToken: async () => {
        return axios
    }
}