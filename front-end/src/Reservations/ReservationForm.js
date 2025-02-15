import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { createReservation, editReservation } from "../utils/api";

export default function ReservationForm({reservation_id, reservation, mode}) {
    const history = useHistory();

    const [formData, setFormData] = useState({ ...reservation });
    const [errors, setErrors] = useState({});

    //handle errors function
    const mapErrors = Object.keys(errors).map((error) => (
        <div className="alert alert-danger" role="alert">{error}</div>
    ));

    //handle change function
    const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    //handle cancel function
    const handleCancel = (e) => {
        e.preventDefault();
        history.go(-1);
      };

    //handle submit function
    const handleSubmit = async (event) => {
        event.preventDefault();
        const abortCon = new AbortController();
        formData.people = parseInt(formData.people);

        async function newReservation() {
            try {
                await createReservation(formData, abortCon.signal);
                setErrors({});
                history.push(`/dashboard?date=${formData.reservation_date}`);
            } catch (error) {
                if (!errors[error.message]) {
                    setErrors({ ...errors, [error.message]: 1 });
                }
        }}

        async function updateReservation() {
            
            try {
                await editReservation(reservation_id, formData, abortCon.signal);
                setErrors({});
                history.push(`/dashboard?date=${formData.reservation_date}`);
            } catch (error) {
                if (!errors[error.message]) {
                    setErrors({ ...errors, [error.message]: 1 });
                }
            }
        }
        mode === "edit" ? updateReservation() : newReservation();
        return () => abortCon.abort();
      };
        
    
return (
    <main>
        <div className="createErrors">{mapErrors ? mapErrors : null}</div>
        <div className="d-md-flex mb-3">
            <form className="col-12" onSubmit={handleSubmit}>
                <div className="row form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        id="firstName"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        placeholder="First Name"
                        required
                    />
                </div>
                <div className="row form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        
                        type="text"
                        className="form-control form-control-lg"
                        id="lastName"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        placeholder="Last Name"
                        required="true"
                    />
                </div>
                <div className="row form-group">
                <label htmlFor="mobile_number">Mobile Number</label>
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        id="mobileNumber"
                        name="mobile_number"
                        value={formData.mobile_number}
                        onChange={handleChange}
                        placeholder="Mobile Number"
                        required="true"
                    />
                </div>
                <div className="row form-group">
                <label htmlFor="people">Number of Guests</label>
                    <input
                        type="number"
                        className="form-control form-control-lg"
                        id="people"
                        name="people"
                        value={formData.people}
                        onChange={handleChange}
                        placeholder="1"
                        required="true"
                    />
                </div>
                <div className="row form-group">
                <label htmlFor="reservation_date">Reservation Date</label>
                    <input
                        type="date"
                        className="form-control form-control-lg"
                        id="reservationDate"
                        name="reservation_date"
                        value={formData.reservation_date}
                        onChange={handleChange}
                        required="true"
                    />
                </div>
                <div className="row form-group">
                <label htmlFor="reservation_time">Reservation Time</label>
                    <input
                        type="time"
                        className="form-control form-control-lg"
                        id="reservationTime"
                        name="reservation_time"
                        value={formData.reservation_time}
                        onChange={handleChange}
                        required="true"
                    />
                </div>
                <div className="row">
                    <button className="btn btn-secondary mr-2" onclick={handleCancel}>
                        Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    </main>
   )
    
}