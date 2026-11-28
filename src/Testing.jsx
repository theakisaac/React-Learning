
function Testing({title, trips}) {

const listedTrips = trips.map((trip) => {
    return (
        <li key={trip.id}>
            {trip.destination} - #{trip.price.toLocaleString("en-NG")}
        </li>
    )

});


    return (
        <>
        <h1>
            {title}
        </h1>
        <ul>
            {listedTrips}
        </ul>
        </>
    )
}

export default Testing;