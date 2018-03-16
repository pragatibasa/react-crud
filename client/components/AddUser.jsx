import React from 'react';
import axios from 'axios';

export default class AddUser extends React.Component {
    
    constructor(props) {
        super(props);
         this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        axios.post('http://localhost:1337/user', data)
        .then(res => {
            if(res.status == 201 && res.statusText == 'Created') {
                this.props.history.push('/home');
            }
            return res;
        });
    }

    render() {
        return (
            <div class="container mt-5">
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group row">
                        <label for="firstName" class="col-sm-2 col-form-label">First Name</label>
                        <div class="col-sm-3">
                            <input type="text" name="firstname" class="form-control" id="firstName" required value={this.props.location.state && this.props.location.state.user.firstname}/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="lastName" class="col-sm-2 col-form-label">Last Name</label>
                        <div class="col-sm-3">
                            <input type="text" name="lastname" class="form-control" id="lastName" required value={this.props.location.state && this.props.location.state.user.lastname}/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="city" class="col-sm-2 col-form-label">City</label>
                        <div class="col-sm-3">
                            <input type="text" name="city" class="form-control" id="city" required value={this.props.location.state && this.props.location.state.user.city}/>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary mb-2">Add User</button>
                </form>
                
            </div>
            );
  }
}