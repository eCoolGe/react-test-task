import React, {useState} from 'react';
import MyButton from "./UI/button/MyButton";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "./UI/Loader/Loader";

const ImageForm = ({createComment, imageData, isLoading}) => {
    const [post, setPost] = useState({name: 'admin', comment: ''})

    const [uploadCommentById, isComLoading, error] = useFetching(async (id, name, comment) => {
        const response = await PostService.postCommentByImageId(id, name, comment)

    })

    const addNewComment = (e) => {
        e.preventDefault()

        createComment()
        uploadCommentById(imageData.id, post.name, post.comment)

        setPost({name: 'admin', comment: ''})
    }

    return (
        <form action="">
            {isLoading
                ? <div className="mx-5"><Loader/></div>
                :
                <div>
                    <div className="text-center">
                        {/*<img src={imageData.src} alt=""/>*/}
                        <img className="shadow rounded w-75" src="https://placeimg.com/600/400/animals" alt=""/>
                    </div>

                    <p className="fs-5 fw-bold mb-0 mt-2">Comments for image_id: {imageData.id}</p>
                    {imageData.comments.length >= 1
                        ?
                        imageData.comments.map((comment) =>
                            <p key={comment.id} className="fs-6 mb-0 mt-1">User_{comment.id}: {comment.text}</p>
                        )
                        : <p className="mb-0 mt-1">Comments not found :с</p>
                    }
                    <textarea
                        className="w-100"
                        name="comment"
                        cols="40"
                        rows="3"
                        value={post.comment}
                        onChange={e => setPost({...post, comment: e.target.value})}
                    >
                    </textarea>
                    <p className="fs-6 fw-light">Write a few sentences about the photo.</p>
                    <div className="text-center">
                        <button type="button" onClick={addNewComment} className="btn btn-primary active">Save</button>
                    </div>
                </div>
            }
        </form>
    );
};

export default ImageForm;