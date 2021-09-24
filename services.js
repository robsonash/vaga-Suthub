import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://servicodados.ibge.gov.br/api/v1/paises/"

});

export const api = axiosInstance;
/* export const api = {
    get(endpoint) {
        return axiosInstance.get(endpoint);
    },
    post(endpoint, body) {
        return axiosInstance.post(endpoint, body);
    },
    put(endpoint, body) {
        return axiosInstance.put(endpoint, body);
    },
    delete(endpoint, body) {
        return axiosInstance.delete(endpoint, body);
    }
} */
export function getCep(cep) {
    return axios.get(`https://viacep.com.br/ws/${cep}/json`);
}