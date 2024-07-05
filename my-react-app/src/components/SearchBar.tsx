// src/components/SearchBar.tsx
import React, { Component, ChangeEvent, FormEvent } from "react";

interface Props {
  onSearch: (query: string) => void;
}

interface State {
  query: string;
}

class SearchBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const savedQuery = localStorage.getItem("searchQuery") || "";
    this.state = { query: savedQuery };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedQuery = this.state.query.trim();
    localStorage.setItem("searchQuery", trimmedQuery);
    this.props.onSearch(trimmedQuery);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.query}
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;
