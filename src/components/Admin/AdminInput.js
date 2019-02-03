import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';

class AdminInput extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            newProject: {
                name: '', description: '', thumbnail: '',
                website: '', github: '', date_completed: '',
                tag_id: '',
            } } }

    handleNameChange = (event) => {
        this.setState({
            newProject: {
                ...this.state.newProject, 
                name: event.target.value
            }
        });
    }

    handleDateChange = (event) => {
        this.setState({
            newProject: {
                ...this.state.newProject,
                date_completed: event.target.value
            }
        });
    }

    handleChange = (event) => {
        this.setState({
            newProject: {
                ...this.state.newProject,
                tag_id: event.target.value
            }
        });
    }

    handleGitChange = (event) => {
        this.setState({
            newProject: {
                ...this.state.newProject,
                github: event.target.value
            }
        });
    }

    handleWebChange = (event) => {
        this.setState({
            newProject: {
                ...this.state.newProject,
                website: event.target.value
            }
        });
    }

    handleDescription = (event) => {
        this.setState({
            newProject: {
                ...this.state.newProject,
                description: event.target.value
            }
        });
    }

    addNewPortfolio = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_PORTFOLIO', payload: this.state.newProject});
        this.setState({
            newProject: {
                name: '',
                description: '',
                thumbnail: '',
                website: '',
                github: '',
                date_completed: '',
                tag_id: '',
            }
        });
    }

    // componentDidMount() {
    //     this.getPortfolio();
    // }

    // getPortfolio = () => {
    //     axios({
    //         method: 'GET',
    //         url: '/admin'
    //     }).then((response) => {
    //         const action = {type: 'SET_PROJECTS', payload: response.data}
    //         this.props.dispatch(action);
    //     }).catch((error) => {
    //         alert('something went wrong');
    //     });
    // }

    render() {
        return(
            <div>
                <p>Add New Project</p>
                {JSON.stringify(this.state.newProject)}
                <form onSubmit={this.addNewPortfolio}>
                    <input type='text' value={this.state.newProject.name} 
                        onChange={this.handleNameChange} placeholder='Name' />
                    <input type='text' value={this.state.newProject.date_completed}
                        onChange={this.handleDateChange} placeholder='04/12/2019' />
                    <select onChange={this.handleChange} 
                    placeholder="Tags" className="category">
                            <option />
                            <option value="1">React</option>
                            <option value="2">JQuery</option>
                            <option value="3">Node</option>
                            <option value="4">SQL</option>
                            <option value="5">Redux</option>
                            <option value="6">HTML</option>
                    </select>
                    <input type='text' value={this.state.newProject.github}
                        onChange={this.handleGitChange} placeholder='GitHub URL'/>
                    <input type='text' value={this.state.newProject.website}
                        onChange={this.handleWebChange} placeholder='Website URL (Optional)'/>
                    <textarea rows="4" cols="50" placeholder='Description'
                    onChange={this.handleDescription} value={this.state.newProject.description}>
                    </textarea>
                    <input className='submitBtn' type='Submit' value='Submit'/>
                </form>
            </div>

        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState
});

export default connect(mapStateToProps) (AdminInput);