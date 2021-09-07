import axios from "axios";

const api = axios.create({
    baseURL: "https://api.github.com",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    }
});

export const get = (url) => api.get(url);
