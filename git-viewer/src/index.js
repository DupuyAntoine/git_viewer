import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import './index.css';
import App from './components/App';

// User components
import SearchUser from './components/User/SearchUser';
import User from './components/User/User';

// Project components
import SearchProject from './components/Project/SearchProject'
import Project from './components/Project/Project'

import * as serviceWorker from './serviceWorker';
// import 'bootstrap/dist/css/bootstrap.css';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            {/* <IndexRoute component={SearchUser}/>
            <Route path="users/:username" component={User}/> */}
            <IndexRoute component={SearchProject}/>
            <Route path="repos/:user/:repo/commits" component={Project}/>
        </Route>
    </Router>
)

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
