import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import exampleData from '../../data.json'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  
  
  componentDidMount() {
    //gets REPOS on Load
    $.ajax({
      type: 'GET',
      url: 'http://localhost:1128/repos',
      success: data => { console.log('REPOS ON LOAD: ', data)},
      error: error => { console.log('ERROR, NO REPOS ', error)}
    })
  }
    
  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
      type: 'POST',
      url: 'http://localhost:1128/repos',
      // request: $.post('http://localhost:1128/repos', {username: term}),
      data: {username: term},
      dataType: 'json',
      success: data => { console.log('We have DATA!', data) },
      error: error => { console.log('Whoops, try again', error)}
    })
  }
    
  

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));