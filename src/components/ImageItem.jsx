import React from 'react';

const ImageItem = ({imageClick, ...props}) => {

    const onClick = (e) => {
        imageClick(e.target.id)
    }

    return (
        <div className="col-12 col-sm-6 col-lg-4 mb-4">
            {/*<img src={props.post.url} alt=""/>*/}
            <img id={props.post.id} className="rounded w-100 img__click" src="https://placeimg.com/300/200/animals" alt="" onClick={onClick}/>
            <div className="post__content">
                id: {props.post.id}
            </div>
        </div>
    );
};

export default ImageItem;