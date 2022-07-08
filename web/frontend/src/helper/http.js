import axios from "axios";

const localStore = JSON.parse(localStorage.getItem("auth"));
const access_token = localStore?.tokens?.access_token;
console.log(access_token)

export const http = axios.create((() => {
    if (access_token) {
        return (
            {
                baseURL: process.env.REACT_APP_API_URL,
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            }
        )
    }
    return {baseURL: process.env.REACT_APP_API_URL}
})());
