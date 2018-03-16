import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter,Route, Switch, withRouter,Redirect } from 'react-router-dom';
import Home from './components/Home.jsx';
import AddUser from './components/AddUser.jsx';

class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact render={() => <Redirect to='/home' />} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/adduser" exact component={AddUser} />                    
                </Switch>
            </BrowserRouter>
        );
    }
}

render(<App/>, document.getElementById('root'));