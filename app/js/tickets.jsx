import React from 'react';
import Ticket from './ticket.jsx';

module.exports = class Tickets extends React.Component {
  prepared_tickets() {
    let stops_filter = this.props.stops_filter;
    let filtered_tickets = this.props.tickets.filter(
      ticket => stops_filter.includes(ticket.stops)
    );
    return filtered_tickets.sort((a, b) => {return a.price > b.price});
  }

  render() {
    let ticket_tags = this.prepared_tickets().map((x, i) => {
      return (
        <Ticket ticket={x} key={i} />
      );
    });
    return <div>{ticket_tags}</div>
  }
};
