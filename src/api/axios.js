import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.themoviedb.org/3",
  params: {
    api_key: "11317db7e9a535c11fd85bb5f9c5e423",
    language: "ko-KR",
  },
});

export default instance;
