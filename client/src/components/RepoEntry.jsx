import React from 'react';

var RepoEntry = (props) => (
  
  <div>
    <p><a href={props.repo.repoURL}>{props.repo.repoName}</a></p>
    <p>{props.repo.userName}</p>

  </div>
  )
    



// window.RepoEntry = RepoEntry

export default RepoEntry;