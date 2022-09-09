import React, {useState} from 'react';
import ImageItem from "./ImageItem";
import MyModal from "./UI/MyModal/MyModal";
import ImageForm from "./ImageForm";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "./UI/Loader/Loader";

const ImageList = ({images, isImagesLoading}) => {
    const [modal, setModal] = useState(false)
    const [imageData, setImageData] = useState({id: 0, src: '', comments: []})

    const createComment = () => {
        setModal(false)
    }

    const [fetchImageById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)

        await setImageData({id: response.data.id, src: response.data.url, comments: response.data.comments})
    })


    const imageClick = (e) => {
        fetchImageById(e)
        setModal(true)
    }

    return (
        <div className="container">
            {isImagesLoading
                ? <div className="loader__fix"><Loader/></div>
                :
                <div className="row">
                    {images.map((post, index) =>
                        <ImageItem key={index + 1} number={index + 1} post={post} imageClick={imageClick}/>
                    )}
                </div>
            }

            <MyModal visible={modal} setVisible={setModal}>
                <ImageForm createComment={createComment} imageData={imageData} isLoading={isLoading}/>
            </MyModal>
        </div>
    );
};

export default ImageList;