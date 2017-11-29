import React from 'react';
import {stop_desc} from './ticket_helper.js';

module.exports = class Filters extends React.Component {
  constructor() {
    super();
    this.all_stops = [0, 1, 2, 3];
  }

  toggleStopFilter(stop_number, value) {
    if(value) {
      let new_stops_filter = this.props.stops_filter.slice();
      new_stops_filter.push(stop_number);
      new_stops_filter.sort();
      this.props.setStopsFilter(new_stops_filter);
    } else {
      let index = this.props.stops_filter.indexOf(stop_number);
      let new_stops_filter = this.props.stops_filter.slice();
      new_stops_filter.splice(index, 1);
      this.props.setStopsFilter(new_stops_filter);
    }
  }

  toggleAllStopFilter(value){
    if(value) {
      this.props.setStopsFilter(this.all_stops);
    } else {
      this.props.setStopsFilter([]);
    }
  }

  render() {
    let stops_checkboxes = this.all_stops.map((stop_number) => {
      return (
        <label htmlFor={`stops_${stop_number}`} key={stop_number}>
          <p>
            <input
              type="checkbox"
              id={`stops_${stop_number}`}
              checked={this.props.stops_filter.includes(stop_number)}
              onChange={(event) => this.toggleStopFilter(stop_number, event.target.checked)}
            />
            {stop_desc(stop_number)}
          </p>
        </label>
      );
    });
    return (
      <div>
        <label htmlFor="stops_all" key="stops_all">
          <p>
            <input
              type="checkbox"
              id="stops_all"
              checked={this.all_stops.every(stop_number => this.props.stops_filter.includes(stop_number))}
              onChange={(event) => this.toggleAllStopFilter(event.target.checked)}
            />
            Все
          </p>
        </label>
        {stops_checkboxes}
      </div>
    );
  }
};
