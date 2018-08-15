import React, { Component } from "react";

// --------------------------------------------------------
//              class-based component
// --------------------------------------------------------
// A class component is used whenever we want the component to have some type of 
// internal record keeping (called state)
class SearchBar extends Component {
    // initialize state
    constructor(props) {
        super(props);

        this.state = { term: "Shikamaru Nara" };

        this.handleInputChange = this.handleInputChange.bind(this);
    }
    

    render() {
        return (
           // --------------------------------------------------------------------------
           //                      Controlled Component
           //            (State should tell the input to change its value)
           // --------------------------------------------------------------------------
            <div className="search-bar">
                <input
                    value={ this.state.term }  
                    onChange={event => this.handleInputChange(event.target.value)} />
            </div>
        );
    }

    // event handler
    handleInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term)
    }
}

export default SearchBar;