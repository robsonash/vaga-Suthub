import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://servicodados.ibge.gov.br/api/v1/paises/"

});

const axiosInstance2 = axios.create({
    baseURL: "https://restcountries.com/v2/"

});
export const api = axiosInstance;
export const api2 = axiosInstance2;

export function getCep(cep) {
    return axios.get(`https://viacep.com.br/ws/${cep}/json`);
}