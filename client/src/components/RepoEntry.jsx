import React from 'react';

var RepoEntry = (props) => (
  
  <div>
    <p>{props.repo.repoName}</p>
    <p>{props.repo.userName}</p>
    <p><a href={props.repo.repoURL}>{props.repo.repoURL}</a></p>

  </div>
  )
    



// window.RepoEntry = RepoEntry

export default RepoEntry;