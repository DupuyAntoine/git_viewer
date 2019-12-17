import React from 'react';

class Project extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    /*
        This method will be called by React after the first render. This Project component gets mounted in the DOM as soon as the URL is :user/:project
        We're using it to make an API call to GitHub to fetch the user data for the username in the URL. Once we receive
        the data -- in the callback -- we call `setState` to put the user data in our state. This will trigger a re-render.
        When `render` gets called again, `this.state.user` exists and we get the user info display instead of "LOADING..."
    */
    componentDidMount() {
        fetch(`https://api.github.com/repos/${this.props.params.user}/${this.props.params.repo}/commits`)
        .then(response => response.json())
        .then(
            commits => {
                // How can we use `this` inside a callback without binding it??
                // Make sure you understand this fundamental difference with arrow functions!!!
                this.setState({
                    commits: commits
                });
            }
        );
    }

    /*
    This method is used as a mapping function. Eventually this could be factored out to its own component.
    */
    renderCommit(commit) {
        return (
            <div key={commit.url} className="commit" id={commit.url} >
                <ul>
                <a href={commit.html_url}>
                    Link to commit url
                </a>
                <p>Autheur : {commit.commit.author.name}</p>
                <p>Date : {commit.commit.author.date}</p>
                <p>Commiteur : {commit.commit.committer.name}</p>
                <p>Date : {commit.commit.committer.date}</p>
                <p>Message : {commit.commit.message}</p>
                </ul>
            </div>
        );
    }

    render() {
        // If the state doesn't have a project key, it means the AJAX didn't complete yet. Simply render a LOADING indicator.
        if (!this.state.commits) {
            return (<div>LOADING...</div>);
        }

        // If we get to this part of `render`, then the project commits are loaded
        const commits = this.state.commits;
        console.log(commits)

        // Gather up some informations about the project commits, to be used in a map below
        if (commits.length > 0) {
            return (
                <div className="container">
                    {commits.map(commit => this.renderCommit(commit))}
                </div>
            );    
        } else {
            return(
            <div>
                <p>There is no commits from the {this.props.params.user}/{this.props.params.repo} or the repository does not exist.</p>
            </div>)
        }
    }
};

export default Project;
