import React, { useState } from "react";
import ReservationsList from "./ReservationsList";
import { listReservations } from "../utils/api";


export default function SearchReservations() {
    const [reservations, setReservations] = useState([]);
    const [clicked, setClicked] = useState(false);
    const [mobileNumber, setMobileNumber] = useState("")
    //create a form with a submit button
    //on submission, functions searchReservations should be called from api, and clicked should become true
    //if clicked is true, SearchReservations should return reservationsList, with reservations found from api as a param & clicked should be set to null
    const handleSubmit = async (event) => {
        const abortCon= new AbortController();
        event.preventDefault();
        setClicked(!clicked);
        listReservations({ mobile_number: mobileNumber }, abortCon.signal).then(setReservations);
        return () => abortCon.abort(); 
    }
    const handleChange = (event) => {
        setMobileNumber(event.target.value);
        };
    return (
        <div>
            <h1>Search Reservations</h1>
            <form className="col-12" onSubmit={handleSubmit}>
            <div className="row form-group">
                    <label>Search Here</label>
                    <input
                        type="search"
                        className="form-control form-control-lg"
                        name="mobile_number"
                        value={mobileNumber}
                        onChange={handleChange}
                        placeholder="Enter reservation phone number"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary"> Search </button>
            </form>
            {reservations.length ? (
                <ReservationsList reservations={reservations} />
            ) : clicked && (<h2>No reservations found.</h2>)}
        </div>
    )
}