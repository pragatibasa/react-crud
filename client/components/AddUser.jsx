import React from 'react';
import axios from 'axios';

export default class AddUser extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            id : (this.props.location.state) ? this.props.location.state.user.id : '',
            firstname : (this.props.location.state) ? this.props.location.state.user.firstname : '',
            lastname : (this.props.location.state) ? this.props.location.state.user.lastname : '',
            city : (this.props.location.state) ? this.props.location.state.user.city : '',
            buttonvalue : (this.props.location.state) ? 'Update User' : 'Add User'
        };
    }

    handleChange(key,event) {
        this.state[key] = event.target.value;
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        axios.post('http://localhost:1337/user/'+this.state.id, data)
        .then(res => {
            if( ( res.status == 201 || res.status == 200 ) && ( res.statusText == 'Created' || res.statusText == 'OK' ) ) {
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
                            <input type="text" name="firstname" class="form-control" id="firstName" required defaultValue={this.state.firstname} onChange={this.handleChange.bind(this,'firstname')} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="lastName" class="col-sm-2 col-form-label">Last Name</label>
                        <div class="col-sm-3">
                            <input type="text" name="lastname" class="form-control" id="lastName" required defaultValue={this.state.lastname} onChange={this.handleChange.bind(this,'lastname')} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="city" class="col-sm-2 col-form-label">City</label>
                        <div class="col-sm-3">
                            <input type="text" name="city" class="form-control" id="city" required defaultValue={this.state.city} onChange={this.handleChange.bind(this,'city')} />
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary mb-2">{this.state.buttonvalue}</button>
                </form>
                
            </div>
            );
  }
}