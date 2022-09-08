import React from 'react';

const ImageItem = (props) => {

    return (
        <div className="col-12 col-sm-6 col-lg-4 mb-4">
            {/*<img src={props.post.url} alt=""/>*/}
            <img className="rounded w-100" src="https://placeimg.com/300/200/animals" alt=""/>
            <div className="post__content">
                id: {props.post.id}
            </div>

        </div>
    );
};

export default ImageItem;