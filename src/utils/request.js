import axios from "axios";
const request = axios.create({
    // baseURL: "http://localhost:8000"
    baseURL: "https://backend-blog-mauve.vercel.app"
});


export default request;