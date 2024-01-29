import BookingForm from "./Reservations/BookingForm"
import './Reservations/Reservations.css';

export default function Reservations() {
    return (
        <section className="reservations">
            <h2 className="reservationsTitle">Reservations</h2>
            <BookingForm />
        </section>
    );
}