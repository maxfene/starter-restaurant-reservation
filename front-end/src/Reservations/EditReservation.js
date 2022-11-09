import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReservationForm from "./ReservationForm";
import { getReservation } from "../utils/api";

export default function EditReservation() {
    const {reservation_id} = useParams();
    const [reservation, setReservation] = useState({}); 

    useEffect(()=> {
        const abortCon = new AbortController();

        getReservation(reservation_id, abortCon.signal)
        .then(res => setReservation({...res}))
        .catch(err => console.log(err));
        return () => abortCon.abort();
    }, [reservation_id]);

    return (
        <main>
            <h1>Edit Reservation</h1>
            <ReservationForm reservation_id={reservation_id} reservation={reservation} mode={"edit"}/>
        </main>

    )
}