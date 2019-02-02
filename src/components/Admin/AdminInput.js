import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class AdminInput extends Component {
    constructor(){
        super();
        
        this.state = {
            newProject: {
                name: '', description: '', thumbnail: '',
                website: '', github: '', date_completed: '',
                tag_id: '',
            }
        }
    }

    handleChange = (event) => {
        console.log('event happened');
        this.setState({
            newProject: {
                name: event.target.value,
                description: event.target.value,
                thumbnail: event.target.value,
                website: event.target.value,
                github: event.target.value,
                date_completed: event.target.value,
                tag_id: event.target.value,
            }
        });
    }

    addNewPortfolio = (event) => {
        event.preventDefault();
        this.dispatch({ type: 'ADD_PORTFOLIO', payload: this.state.newProject});
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

    render() {
        return(
            <div>
                <header><h2>Add New Project</h2></header>
                <form onSubmit={this.addNewPortfolio}>
                    <input type='text' value={this.newProject.name} 
                        onChange={this.handleChange} placeholder='Name' />
                    <input type='text' value={this.newProject.date_completed}
                        onChange={this.handleChange} placeholder='04/12/2019' />
                    <select onChange={this.handleChange} className="category">
                            <option />
                            <option value="1">React</option>
                            <option value="2">JQuery</option>
                            <option value="3">Node</option>
                            <option value="4">SQL</option>
                            <option value="5">Redux</option>
                            <option value="6">HTML</option>
                    </select>
                    <input type='text' value={this.newProject.github}
                        onChange={this.handleChange} placeholder='GitHub URL'/>
                    <input type='text' value={this.newProject.website}
                        onChange={this.handleChange} placeholder='Website URL (Optional)'/>
                    <textarea rows="4" cols="50" placeholder='Description'
                    value={this.newProject.description}>
                    {this.newProject.description}</textarea>
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