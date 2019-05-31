import React, { Component } from "react";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = { term: "" };
  }
  onInputChange(term) {
    this.setState({ term });
    this.props.onTermChange(term);
  }

  render() {
    return (
      <div className="search">
        <input
          onChange={event => this.onInputChange(event.target.value)}
          placeholder="Type Here To Search For Gif"
        />
      </div>
    );
  }
}

export default SearchBar;
