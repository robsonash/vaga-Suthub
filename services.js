import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://servicodados.ibge.gov.br/api/v1/paises/"

});

export const api = axiosInstance;

export function getCep(cep) {
    return axios.get(`https://viacep.com.br/ws/${cep}/json`);
}