import React, { Component } from "react";
import { fetchItems } from "../API/api";

interface Props {
  query: string;
}

interface State {
  items: any[];
  loading: boolean;
}

class ResultsList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { items: [], loading: false };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.query !== this.props.query) {
      this.fetchData();
    }
  }

  fetchData() {
    this.setState({ loading: true });
    fetchItems(this.props.query)
      .then((items) => {
        this.setState({ items, loading: false });
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { items, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default ResultsList;
