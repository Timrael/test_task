import React from 'react';
import ReactDOM from 'react-dom';
import Tickets from './tickets.jsx';
import Filters from './filters.jsx';
import tickets_data from './tickets_data.js';
import '../index.css';

class SearchResults extends React.Component {
  constructor() {
    super();
    this.state = {
      tickets: tickets_data,
      stops_filter: [0, 1, 2, 3]
    };
  }

  setStopsFilter(stops_filter) {
    this.setState({stops_filter: stops_filter});
  }

  render() {
    return (
      <div>
        <Filters
          stops_filter={this.state.stops_filter}
          setStopsFilter={(stops_filter) => this.setStopsFilter(stops_filter)}
        />
        <Tickets
          tickets={this.state.tickets}
          stops_filter={this.state.stops_filter}
        />
      </div>
    )
  }
}

ReactDOM.render(<SearchResults/>, document.getElementById('root'));
