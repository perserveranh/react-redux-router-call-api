import axios from 'axios';
import * as Config from './../constants/config';

export default function callAPI(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `${Config.APIURL}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
};