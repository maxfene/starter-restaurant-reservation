import React from "react";
import ReservationsRows from "./ReservationsRows";

function ReservationsList({reservations}){
    return (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone #</th>
                <th>Party Size</th>
                <th>Reservation Date</th>
                <th>Reservation Time</th>
                <th>Status</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
            {reservations && reservations.map((reservation) => (
              <ReservationsRows reservation={reservation}/>
            ))}
            </tbody>
          </table>
        </div>
      );
}

export default ReservationsList;