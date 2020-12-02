import axios from 'axios';

const api = axios.create({
    baseURL: `https://api.themoviedb.org/4/list/`,
    params: {
        api_key: 'ed48ea034a175c8c4c97597ab1f5d0e9'
    }
})

export {api};