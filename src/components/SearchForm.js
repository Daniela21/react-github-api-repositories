import React, { Component } from 'react';

export class SearchForm extends Component {
    state = {
        inputUserName: '',
        userData: ''
    }

    _handleChange = (e) => {
        this.setState({ inputUserName: e.target.value })
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        const { inputUserName } = this.state
        fetch(`https://api.github.com/users/${inputUserName}/repos`)
            .then(response => response.json())
            .then(results => {
                const userData = results
                this.setState({
                    userData: userData
                  })
                this.props.onResults(this.state.userData)
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
