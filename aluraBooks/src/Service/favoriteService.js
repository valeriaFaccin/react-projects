import axios from 'axios';

const connectAPI = axios.create({baseURL: "http://localhost:9090/favorites"});

async function getAllFavorites() {
    const response = await connectAPI.get('/');
    console.log(response.data);
    return response.data;
}

async function postFavorite(id) {
    await connectAPI.post(`/${id}`);
}

async function deleteFavorite(id) {
    await connectAPI.delete(`/${id}`);
}

export {
    getAllFavorites,
    deleteFavorite,
    postFavorite
}
