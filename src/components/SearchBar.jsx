import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="search">
        <input
          onChange={event => this.props.onTermChange(event.target.value)}
          placeholder="Type Here To Search For Gif"
        />
      </div>
    );
  }
}

export default SearchBar;
