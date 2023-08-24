import axios from "axios"

const URL = "http://localhost:9000";

export const loginAPI = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {    
            const response =  await axios.post(URL + "/Login", { email, password });
            resolve(response)
        } catch (error) {
            reject(error)
        }
    })
}

export const getAllUser = () => {
    return new Promise (async (resolve, reject) => {
        try {
            console.log("inside")
            const respone = await axios.get(URL + "/users")
            resolve(respone)
        } catch (error) {
            reject(error)
        }
    })
}

