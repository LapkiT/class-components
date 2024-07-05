// src/components/App.tsx
import React, { Component } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import SearchBar from "./components/SearchBar";
import ResultsList from "./components/ResultsList";

interface State {
  query: string;
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { query: "" };
  }

  handleSearch = (query: string) => {
    this.setState({ query });
  };

  render() {
    return (
      <ErrorBoundary>
        <div>
          <div>
            <SearchBar onSearch={this.handleSearch} />
          </div>
          <div>
            <ResultsList query={this.state.query} />
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
