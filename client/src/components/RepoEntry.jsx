import React from 'react';

var RepoEntry = (props) => (
  
  <div>
    <p><strong><a href={props.repo.repoURL}>{props.repo.repoName}</a></strong></p>
    <p><strong>Repo ID: {props.repo.repoId}</strong></p>
    <p><strong>Stars: {props.repo.stars}</strong></p>
    <p><strong>User: {props.repo.userName}</strong></p>
    <p><strong>---------------------------</strong></p>
  </div>
  )
    



// window.RepoEntry = RepoEntry

export default RepoEntry;