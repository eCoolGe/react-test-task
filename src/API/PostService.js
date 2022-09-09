import axios from "axios";

export default class PostService {
    static async getAll() {
        return await axios.get('https://boiling-refuge-66454.herokuapp.com/images');
    }

    static async getById(id) {
        return await axios.get('https://boiling-refuge-66454.herokuapp.com/images/' + id);
    }

    static async postCommentByImageId(id, name, comment) {
        return await axios.post(`https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`, {
            name: name,
            comment: comment
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        ;
    }
}