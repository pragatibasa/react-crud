import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            users : []
        }
    }
    
    handleDelete(id,event) {
        axios.delete('http://localhost:1337/user/'+id)
        .then(res => {
            if( res.status == 200 && res.statusText == 'OK' ) {
                this.getUsersList();
            }
        });
    }

    componentDidMount() {
        this.getUsersList();    
    }

    getUsersList() {
        axios.get('http://localhost:1337/user', {
            headers: {'Access-Control-Allow-Origin': 'http://localhost:1337/user', 'Content-Type': 'application/json'}
        })
        .then((res) => {
            return res;
        }, (err) => {
            console.log(err);
        }).then(data => {
            this.setState({users: data.data});
        });
    }

    render () {
        const { users } = this.state;
        return (
            <table class="table table-striped">
              <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">City</th>
                    <th>Actions</th>
                </tr>
             </thead>
             <tbody>
              {users.map(user =>
                <tr>
                    <td>{user.id}</td>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>                    
                    <td>{user.city}</td>
                    <td>
                        <Link 
                        to={{
                            pathname: '/adduser',
                            state: { user: user }
                          }}><span class="oi oi-pencil mr-2"></span></Link>
                        <span class="oi oi-trash" onClick={this.handleDelete.bind(this,user.id)}></span>
                    </td>
                </tr>
              )}
              </tbody>
            </table>
          );
    }
}