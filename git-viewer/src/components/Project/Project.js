import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../styles/Render.css'

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
        if(this.props.params.git.toLowerCase() == "github.com" || this.props.params.git.toLowerCase() == "github"){
            fetch(`https://api.github.com/repos/${this.props.params.user}/${this.props.params.repo}/commits`)
            .then(response => response.json())
            .then(
                commits => {
                    // How can we use `this` inside a callback without binding it??
                    // Make sure you understand this fundamental difference with arrow functions!!!
                    this.setState({
                        commits: commits,
                        repo : null
                    });
                }
            );
        }else {
            fetch(`https://gitlab.com/api/v4/projects?search=${this.props.params.repo}`)
            .then(response => response.json())
            .then(
                repo => {
                    this.setState({
                        repo : repo,
                        gitlab : "ok"
                    })
                    console.log(this.state.repo[0].id)
                }
            )
        }
        
    }
    /**For gitlab */
    /*
    componentDidMount(){
        fetch(`https://gitlab.com/api/v4/projects?search=${this.props.params.repo}`)
        .then(response => response.json())
        .then(
            repo => {
                this.setState({
                    repo : repo
                })
                console.log(this.state.repo[0].id)
            }
        )
    }*/
    componentDidUpdate(){
        if(this.state.repo !== null && this.state.idbefore !== this.state.repo[0].id && this.state.gitlab == "ok"){
            fetch(`https://gitlab.com/api/v4/projects/${this.state.repo[0].id}/repository/commits`)
            .then(response => response.json())
            .then(
                commits => {
                    this.setState({
                        commits : commits
                    })
                    console.log(commits.id)
                }
            )
            .then(
                this.setState({
                    idbefore : this.state.repo[0].id
                })
            )
        }else{
            console.log("nop")
        }
    }
    
    /*
    This method is used as a mapping function. Eventually this could be factored out to its own component.
    */
    renderCommit(commit) {
        if(this.state.gitlab == "ok"){
            return (
                <div key={commit.id} className="commit" id={commit.id} >
                    <ul>
                    <p>Autheur : {commit.author_name}</p>
                    <p>Date : {commit.authored_date}</p>
                    <p>Commiteur : {commit.committer_name}</p>
                    <p>Date : {commit.committed_date}</p>
                    <p>Message : {commit.message}</p>
                    </ul>
                </div>
            );
        }else {
            return (
            <div key={commit.url} className="commit" id={commit.url} >
                <ul>
                <a href={commit.html_url}>
                    Link to commit url
                </a>
                <p>Autheur : {commit.commit.author.name}</p>
                <p>Commiteur : {commit.commit.committer.name}</p>
                <p>Date : {commit.commit.committer.date}</p>
                <p>Message : {commit.commit.message}</p>
                </ul>
            </div>
            );
        }
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
                <p>There is no commits from the {this.props.params.user}/{this.props.params.repo}, the repository does not exist or is not public.</p>
            </div>)
        }
    }
};

export default Project;
