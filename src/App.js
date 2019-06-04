import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles/App.css";
import SearchBar from "./components/SearchBar";
import GifList from "./components/GifList";
import * as Actions from "./actions";
import { bindActionCreators } from "redux";

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar onTermChange={this.props.actions.requestGifs} />
        <GifList gifs={this.props.gifs} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gifs: state.gifs.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
