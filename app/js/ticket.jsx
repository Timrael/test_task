import React from 'react';
import {carrier_url, formatted_date, stop_desc} from './ticket_helper.js';


module.exports = class Ticket extends React.Component {
  render() {
    let ticket = this.props.ticket;
    return (
      <div className="ticket">
        <div className="header">
          <img src={carrier_url(ticket.carrier)} />
          <button>Купить за {ticket.price} Р</button>
        </div>
        <div>
          <div className="departure">
            <p>{ticket.departure_time}</p>
            <p>{ticket.origin}, {ticket.origin_name}</p>
            <p>{formatted_date(ticket.departure_date)}</p>
          </div>

          <div>
            {stop_desc(ticket.stops)}
          </div>

          <div className="departure">
            <p>{ticket.arrival_time}</p>
            <p>{ticket.destination}, {ticket.destination_name}</p>
            <p>{formatted_date(ticket.arrival_date)}</p>
          </div>
        </div>
      </div>
    )
  }
};
