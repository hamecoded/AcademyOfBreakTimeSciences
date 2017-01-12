import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item video-list-container">
      <div className="video-list media">
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
        <div className="media-right">
          <img className="media-object" src={imageUrl} />
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
