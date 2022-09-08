import axios from "axios";

export default class PostService {
    static async getAll() {
        const response = await axios.get('https://boiling-refuge-66454.herokuapp.com/images')
        return response;
    }

    static async getById(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return response;
    }

    static async getCommentsByPostId(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response;
    }
}