import React from 'react';
import {Header} from './Header.jsx';
import {Content} from './Content.jsx';
import {Footer} from './Footer.jsx';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      users : []
    }
  }
  
  addUser() {
    this.props.history.push('/adduser');
  }

  render() {
    return (
      <div class="container" style={{textAlign: 'center'}}>
        <Header />
        <div class="row mb-5">
          <div class="col-sm-10">
            <h4>List of Users</h4>            
          </div>
          <div class="col-sm-2">
            <button type="button" onClick={this.addUser.bind(this)} class="btn btn-primary">Add User</button>
          </div>
        </div>
        <div class="row">
          <Content />
        </div>
        <Footer />
       </div>
    );
  }
}