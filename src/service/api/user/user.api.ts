import axios from "axios";

export const login = (data:any) =>{
    return axios.post("/user/login",data)
}
export const register = (data:any) =>{
    return axios.post("/user/register",data)
}