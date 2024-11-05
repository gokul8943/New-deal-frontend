import axios from '../../../constants/instance'


export const getListing = (page?: number, search?: string) => {
    return axios.get("/user/getListing", {
      params: {
        ...(page && { page }),
        ...(search && { search })
      }
    });
  };
  

export const createListing = async (data:any): Promise<any> => {
    return axios.post('/user/creatingListing', data);
};