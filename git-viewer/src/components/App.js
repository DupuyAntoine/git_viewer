import React from 'react';
import { Link } from 'react-router';
import headimg from '../images/Git-Viewer.png'
import bgimg from '../images/OLO2DM0.jpg'

import styles from '../styles/Render.css'

/*
This is the layout component. It's displayed by the top-level Route
this.props.children will correspond to the current URL's component.
If the URL is only / then the IndexRoute's component will be the child (Search component)
If the URL is /user/:username then the User component will be displayed.
*/
class App extends React.Component {
    render() {
        return (
            <div className="body_">
                <header className="title_">
                    {/*<h1><Link style={{textDecoration:"none"}} to="/">Git viewer</Link></h1>*/}
                    <img src={headimg} alt="headerimg"/>
                </header>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
};

export default App;
