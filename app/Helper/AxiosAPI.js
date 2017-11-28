import configData from '../Config/Config';
import axios from 'axios';
let axiosInstance = null;
export default class ApiHelper {
    static getAxiosInstance(headers = {}) {
        console.log("this is request instance");
        if (axiosInstance === null) {
            axiosInstance = axios.create({
                baseURL : configData.axiosApiRequestURL,
                timeout : 100000,
                headers : headers,

            });
        }

        return axiosInstance;
    }
}