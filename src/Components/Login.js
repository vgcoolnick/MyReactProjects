import React, { Component } from 'react';
import { getUsersService } from '../Services/users.service';

class Login extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state = {
          authenticated: false,
          username: '',
          email: '',
          password: ''
        }
    }
    handleChangeName(event) {
       this.setState({
         username: event.target.value
       })
    }
    handleChangePswrd(event) {
      this.setState({
        password: event.target.value
      })
    }
    login() {
       if(this.props != null) {
         this.props.users.forEach((user) => {
           let userName = user.first_name + ' ' + user.last_name;
           if((this.state.username === userName) && 
               (this.state.password === user.password)){
                 this.setState({
                   authenticated: true
                 },()=>console.log(userName + ':authenticated' + this.state.authenticated))
                 
               }else {
                 console.log(userName + ':authenticated' + this.state.authenticated);
               }
         })
    }
  }
    render() {
        return(
          <div className="loginform">
            <form>
            <label>Name:</label>
            <input type="text" name="name" max="50" onChange={this.handleChangeName.bind(this)} />
            <br/>
            <label>Password:</label>
            <input type="text" name="password" max="50" onChange={this.handleChangePswrd.bind(this)} />
            <br/>
            <button type="submit" onClick={this.login.bind(this)}> Submit </button>
            </form>
          </div>
        )
    }
}
export default Login;