import axios from "axios";

const gamesApi = axios.create({
    baseURL: 'http://localhost:5000'
});


export default gamesApi;