import React from 'react';
import { browserHistory as history } from 'react-router';
import styles from '../../styles/Render.css'

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
            <div className="container">
                <div class="jumbotron common">
                    <div className="renderPrincipal">
                        <h3>Enter a GitHub project</h3>
                        <p>[gitlab|github]/username/repository_name</p>
                        <form onSubmit={this._handleSubmit}>
                            <input ref="projectInput" type="text" />
                            <button>Search</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};

export default SearchProject;
