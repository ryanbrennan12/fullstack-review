import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import RenderRepos from './components/RenderRepos.jsx';
import RepoEntry from './components/RepoEntry.jsx';
import exampleData from '../../data.json'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
     
    }
  }
  componentDidMount() {
    //GETS REPOS on Load
    fetch('/repos')
      .then(res => res.json())
      .then((result) => {
        this.setState({
          repos: result
        })
      }
    )

  }

  search(term) {
  
    console.log(`${term} was searched`);
    $.ajax({
      method: 'POST',
      url: '/repos',
      // request: $.post('http://localhost:1128/repos', {username: term}),
      data: { username: term },
      dataType: 'json'
    }).done(() => {
      console.log('this is done, we are now FETCHING')
      fetch('/repos')
      .then(res => res.json())
      .then((result) => {
        this.setState({
          repos: result
        })
      }
    )
    }).fail(() => {
      console.log('We Fail')
    })
  }
      
  render() {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos} />
      <Search onSearch={this.search.bind(this)} repos={this.state.repos} />
      <RenderRepos repos ={this.state.repos} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));





  
  



  // $.ajax({
  //   type: 'GET',
  //   url: 'http://localhost:1128/repos',
  //   success: data => { console.log('REPOS ON LOAD: ', data)},
  //   error: error => { console.log('ERROR, NO REPOS ', error)}

  // })