import axios from "axios";

const gamesApi = axios.create({
    baseURL: 'https://bookscore-server-production.up.railway.app'
});


export default gamesApi;