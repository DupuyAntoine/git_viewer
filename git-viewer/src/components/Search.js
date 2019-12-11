import React from 'react';
import { browserHistory as history } from 'react-router';
// import '../styles/Render.css'
import styles from '../styles/Render.css'

/*
This component displays a form where the user can enter a GitHub username
When they submit the form either by pressing ENTER or clicking the button,
we will use react-router's history.push function to push a new URL to the history.
This will have as an effect to navigate to a new URL, which will display the User component
Why are we doing this instead of using a <Link>? The answer is straightforward, but make sure you understand!!!
*/
class Search extends React.Component {
    constructor(props) {
        super(props);
        this._handleSubmit = this._handleSubmit.bind(this);
    }
    _handleSubmit(e) {
        e.preventDefault();
        history.push(`/users/${this.refs.projectInput.value}`)
    }

    render() {
        return (
            <div className="card mb-3">
                <div className="renderPrincipal">
                    <h2>Enter a GitHub project</h2>
                    <form onSubmit={this._handleSubmit}>
                        <input ref="projectInput" type="text" />
                        <button>Search</button>
                    </form>
                </div>
            </div>
        );
    }
};

export default Search;
