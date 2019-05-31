import React, { Component } from "react";
import logo from "./logo.svg";
import "./styles/App.css";
import SearchBar from "./components/SearchBar";
import GifList from "./components/GifList";
import request from "superagent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    };
  }

  handleTermChange = term => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=SYuuhbO9kh4QEGNI6rH796Kkr76j1QoV&q=${term.replace(
      /\s/g,
      "+"
    )}&limit=25&offset=0&rating=R&lang=en`;
    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data });
    });
  };

  render() {
    return (
      <div>
        <SearchBar onTermChange={this.handleTermChange} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
