import axios from '../../../constants/instance'

export const getListing = () => {
    return axios.get("/user/getListing")
}
export const createListing = async (data:any): Promise<any> => {
    return axios.post('/user/creatingListing', data);
};