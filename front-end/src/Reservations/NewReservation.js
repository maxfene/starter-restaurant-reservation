import React from "react";
import ReservationForm from "./ReservationForm";


function NewReservation() {
    const reservation = {
        first_name: "",
        last_name: "",
        mobile_number: "",
        reservation_date: "",
        reservation_time: "",
        people: ""
    };
    
    return (
        <main>
            <h1> New Reservation </h1>
            <ReservationForm reservation={reservation} mode="new"/>
        </main>
    )
}

export default NewReservation;