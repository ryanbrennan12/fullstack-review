import React from 'react';



const RepoList = (props) => (
  <div className="repo-list">
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
  </div>
)

export default RepoList;


