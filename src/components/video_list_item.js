import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
    console.log(video);

    return (
        <li className="list-group-item" onClick={ () => onVideoSelect(video) }>
            <div className="video-list text-center">
                <div className="media-left">
                    <img className="media-object img-fluid" src={ video.snippet.thumbnails.medium.url } />
                </div>
                <div className="media-body">
                    <div className="media-heading">{ video.snippet.title }</div>
                </div>
            </div>
        </li>
    );
}

/*
const VideoListItem = (props) => {
    const video = props.video;
    return <li> video </li>;
}
*/

export default VideoListItem;