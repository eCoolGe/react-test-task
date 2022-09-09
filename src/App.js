import React, {useEffect, useState} from 'react'
import PostService from "./API/PostService";
import {useFetching} from "./hooks/useFetching";
import ImageList from "./components/ImageList";
import ProfileBar from "./components/ProfileBar";
import './styles/App.css';

function App() {
    const [images, setImages] = useState([])

    const [fetchImages, isImagesLoading, imageError] = useFetching(async () => {
        const response = await PostService.getAll()
        setImages([...images, ...response.data])
    })

    useEffect(() => {
        fetchImages()
    }, [])

    return (
        <div className="App">
            <ProfileBar/>
            <br/>
            <br/>
            <ImageList images={images} isImagesLoading={isImagesLoading}/>
        </div>
    )
}

export default App;
