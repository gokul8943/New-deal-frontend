import axios from '../../../constants/instance'

export const getListing = () =>{
    return axios.get("/user/getListing")
}