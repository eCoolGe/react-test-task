import React from 'react';
import ImageItem from "./ImageItem";

const ImageList = ({posts}) => {

    return (
        <div className="container">
            <div className="row">
                {posts.map((post, index) =>
                    <ImageItem key={index + 1} number={index + 1} post={post}/>
                )}
            </div>

        </div>
    );
};

export default ImageList;