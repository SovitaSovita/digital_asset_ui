import axios from "axios";
export const BASE_URL = `http://localhost:8080/api/v1`;
export const BASE_URL1 = `http://localhost:8080`;
export const BASE_URL2 = `http://localhost:3000`;
export const BASE_URL_IMAGE = `http://localhost:8080/api/v1/images/PROFILE?fileName=`;
export const BASE_URL_ZIN = `http://e-certify.org`;


export const TOKEN = localStorage.getItem("Token");

console.log("TOKEN", TOKEN);
const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    // Authorization: `Bearer ${localStorage.getItem("Token")}`,
    Authorization: `Bearer ${TOKEN}`,
    "Content-type": "application/json;charset=utf-8",
  },
});

API.interceptors.request.use((s)=> {
  const token = localStorage.getItem("Token")
  s.headers.Authorization= "Bearer "+ token
  return s
})

export {API};

export const Auth = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json;charset=utf-8",
  },
});



export const APIImage = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("Token")}`,
    "Content-Type": "multipart/form-data",
  },
});
