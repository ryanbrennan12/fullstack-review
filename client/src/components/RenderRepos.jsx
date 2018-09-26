import React from 'react';


const RenderRepos = (props) => (
  <div>
  {props.repos.map((repo) => {
    console.log(repo)
  })}
   </div> 
)



export default RenderRepos;