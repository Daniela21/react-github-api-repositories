import React, { Component } from 'react';
import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm'
import { Repositories } from './components/Repositories'

import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
    state = {
        usedSearch: false,
        results: []
    }

    _handleResults = (results) =>{
        this.setState({ results, usedSearch: true })
    }

    _renderResults () {
        return typeof this.state.results.length === 'undefined'
            ? <p>Sorry!<span role="img" aria-label="Snowman">😞</span>Results not found</p>
            : <Repositories results={this.state.results}/>
        
    }

    render() {
        return (
            <div className="App">
                <Title>Search Repositories</Title>
                <div className="SearchForm-wrapper">
                    <SearchForm onResults={this._handleResults} />
                </div>
                {
                    this.state.usedSearch
                        ? this._renderResults()
                        : <small>Type a username in the form</small>
                }
            </div>
        )
    }
}

export default App;
