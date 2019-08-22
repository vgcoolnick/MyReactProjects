import React, { Component } from 'react';
import Header from './Components/Header';
import Login from './Components/Login';
import Footer from './Components/Footer';
import './App.css';
import { getUsersService } from './Services/users.service';

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
           users: []
        }
  };

  componentDidMount(){
    getUsersService().then((data) => {
      console.log(data);
    this.setState({users: data});
  })
};
  
  render() {
    return (
      <div className="app">
        <Header />
        <Login users={this.state.users}/>
        <Footer />
      </div>
    );
  }
}

export default App;
