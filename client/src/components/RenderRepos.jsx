import React from 'react';


const RenderRepos = (props) => (
  <div>
  {props.repos.map((repo) => {
    console.log(repo)
  })}
   </div> 
)








// var VideoList = ({videos, handleVideoListEntryTitleClick}) => (
//   <div className="video-list">
//     {videos.map((video) =>
//       <VideoListEntry
//         key={video.etag}
//         video={video}
//         handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}
//       />
//     )}
//   </div>
// );

// var VideoList = (props) => (
//   <div className="video-list">
//     {/* <div><h5><em>videoListEntry</em> view goes here</h5></div> */}
//     {props.videos.map(video =>
//       <VideoListEntry video={video} onClick={props.onClick}/>
//     )}

//   </div>
// );

// const RenderRepos = (props) => {
//   {props.repos.map((repo) => {
//      return (
//       <div> </div>
//      ); 
//   })}
// }
export default RenderRepos;