import axios from "axios";
const request = axios.create({
    // baseURL: "http://localhost:8000"
    baseURL: "https://elhlwany-blog.netlify.app"
});


export default request;