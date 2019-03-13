import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class RepositoriesList extends Component {
    static propTypes = {
        full_name: PropTypes.string,
        owner: PropTypes.object,
        description: PropTypes.string,
        html_url: PropTypes.string,
        stargazers_count: PropTypes.number,
    }

    render() {
        const { full_name, description, html_url, stargazers_count} = this.props
        return(
            <div className="box">
                <article className="media">
                    <div className="media-content">
                    <div className="content">
                        <p>
                        <strong><a href={html_url} >{full_name}</a></strong>
                        <br/>
                        {description}
                        </p>
                    </div>
                    <nav className="level is-mobile">
                        <div className="level-left">
                            <div className="level-item" aria-label="reply">
                                <span className="icon is-small">
                                <span role="img" aria-label="Snowman">⭐</span>{stargazers_count}
                                </span>
                            </div>
                        </div>
                    </nav>
                    </div>
                </article>
                </div>
        )
    }
}
