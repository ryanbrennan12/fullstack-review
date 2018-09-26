import React from 'react';



const RepoList = (props) => (
  <div className="repo-list">
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
  </div>
)

export default RepoList;



var VideoList = (props) => (
  <div className="video-list">
    {/* <div><h5><em>videoListEntry</em> view goes here</h5></div> */}
    {props.videos.map(video =>
      <VideoListEntry video={video} onClick={props.onClick}/>
    )}

  </div>
);