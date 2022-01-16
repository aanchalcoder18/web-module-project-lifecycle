import React, { Component } from 'react';
import axios from 'axios';
import FollowerList from './components/FollowerList';
import User from './components/User';

class App extends React.Component {
  state = {
    user: {}
  };

  componentDidMount(){
    axios
      .get ("https://api.github.com/users/aanchalcoder18")
      .then((response)=>{
        this.setState({
          ...this.state,
          user: response.data
        });
      })
      .catch((errors)=>{
        console.log(errors);
      });
  }


  render() {
    return(
    <div>
      <h2>Github User Information</h2>
      <User />
      <FollowerList />
    </div>
    );
  }
}

export default App;
