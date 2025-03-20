import axios from "axios";

const connectAPI = axios.create({baseURL: "http://localhost:9090/routes"});

async function getALlBooks() {
    const response = await connectAPI.get('/');
    return response.data;
}

export default getALlBooks;
