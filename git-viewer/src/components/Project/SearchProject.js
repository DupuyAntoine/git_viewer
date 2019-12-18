import React from 'react';
import { browserHistory as history } from 'react-router';

/*
This component displays a form where the user can enter a GitHub project
When they submit the form either by pressing ENTER or clicking the button,
we will use react-router's history.push function to push a new URL to the history.
This will have as an effect to navigate to a new URL, which will display the Project component
*/
class SearchProject extends React.Component {
    constructor(props) {
        super(props);
        this._handleSubmit = this._handleSubmit.bind(this);
    }
    _handleSubmit(e) {
        e.preventDefault();
        history.push(`/repos/${this.refs.projectInput.value}/commits`)
    }

    render() {
        return (
            <div className="card mb-3">
                <div className="renderPrincipal">
                    <h2>Enter a GitHub/Gitlab project like this gitversion.com/user/repo ou gitversion/user/repo</h2>
                    <form onSubmit={this._handleSubmit}>
                        <input ref="projectInput" type="text" />
                        <button>Search</button>
                    </form>
                </div>
            </div>
        );
    }
};

export default SearchProject;
