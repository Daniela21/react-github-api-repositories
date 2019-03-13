import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { RepositoriesList } from './RepositoriesList'

export class Repositories extends Component {
    static propTypes = {
        results: PropTypes.array
    }

    render() {
        const { results } = this.props
        return (
            <div className="RepoList">
            {
                results.map(repo => {
                    return(
                        <div key={repo.id} className="RepoList-item">
                            <RepositoriesList
                                key={repo.id}
                                full_name={repo.full_name}
                                description={repo.description}
                                html_url={repo.html_url}
                                stargazers_count={repo.stargazers_count}
                            />
                        </div>
                    )
                })
            }
            </div>
        )
    }
}
