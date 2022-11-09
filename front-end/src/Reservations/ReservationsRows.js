import React from "react";
import { Link } from "react-router-dom";
import { cancelReservation } from "../utils/api";

export default function ReservationsRows({reservation}) {

  //handle Cancel function
    const handleClick = async (event) => {
      event.preventDefault();
      const confirm = window.confirm("Do you want to cancel this reservation? This cannot be undone.");
      if (confirm) {
        try {
          await cancelReservation(reservation, "cancelled");
          window.location.reload();
        } catch (error) {console.log(error)}
      }
    }

    //rows returned in reservations table
    return (
        <tr key={reservation.reservation_id}>
          <td>{reservation.first_name}</td>
          <td>{reservation.last_name}</td>
          <td>{reservation.mobile_number}</td>
          <td>{reservation.people}</td>
          <td>{reservation.reservation_date}</td>
          <td>{reservation.reservation_time}</td>
          <td>{reservation.status}</td>
          <td>
          {reservation.status==="booked" && (
            <button 
            className="btn btn-secondary" 
            style={{width: '70px'}}>
              <Link 
              href="/reservations/${reservation_id}/edit" 
              to={`/reservations/${reservation.reservation_id}/edit`} 
              style={{color: 'white'}}>
                Edit
              </Link>
            </button>)}
          {reservation.status==="booked" && (
          <button 
          data-reservation-id-status={reservation.reservation_id}
          name="seat" 
          className="btn btn-primary" 
          style={{width: '70px'}}>
            <Link 
            href="/reservations/${reservation_id}/seat" 
            to={`/reservations/${reservation.reservation_id}/seat`} 
            style={{color: 'white'}}>
              Seat
              </Link>
            </button>)}
          {reservation.status==="booked" && (
            <button 
            data-reservation-id-cancel={reservation.reservation_id} 
            className="btn btn-danger"
            style={{width: '70px'}}              
            onClick={handleClick}>
                Cancel
            </button>
          )}
          </td>
        </tr>
        )

}