import React, { Component } from 'react';
import axios from 'axios'

export class SearchForm extends Component {
    state = {
        inputUserName: '',
        userData: '',
        error: null
    }

    _handleChange = (e) => {
        this.setState({ inputUserName: e.target.value })
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        const { inputUserName } = this.state
        
        axios
            .get(
                window.encodeURI(
                    `https://api.github.com/users/${inputUserName}/repos`,
                ),
            )
            .then(response => { 
                this.setState({
                    userData: response.data
                })
                this.props.onResults(this.state.userData)
            })
            .catch(error => {
                this.setState({
                    error: error.response
                })
                this.props.onResults(this.state.error)
            })
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input 
                            className="input" 
                            onChange={this._handleChange}
                            type="text" 
                            placeholder="Find a repository"/>
                    </div>
                    <div className="control">
                        <button className="button is-info">
                        Search
                        </button>
                    </div>
                </div>
            </form>
            
        )
    }
}
