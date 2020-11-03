import './SearchBar.css'
import React from 'react';



class SearchBar extends React.Component {
    state = {term: ''}

    onInputChange = (e) => {
        this.setState({term: e.target.value});
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        if (this.state.term.length > 0) {
            this.props.onSubmit(this.state.term)
        }
    }

    render() {
        return (
            <form className="search-bar" onSubmit={this.onFormSubmit}>
                <div className="ui category search">
                    <div className="ui icon input">
                        <input className="prompt" type="text" value={this.state.term} onChange={this.onInputChange} placeholder={this.props.placeholder} />
                        <i className="search icon"></i>
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar