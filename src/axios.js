import axios from 'axios'

const instance = axios.create({
    // 外部APIのURLを書いておく
    // TMDBのURL
    baseURL: "",
});

export default instance;