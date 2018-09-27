import React from 'react';
import RepoEntry from './RepoEntry.jsx'


const RenderRepos = (props) => (
  <div>
  {props.repos.map((repo) => {
    return <RepoEntry repo={repo}/>
  })}
   </div> 
  )
   
    // console.log(repo)
      



export default RenderRepos;