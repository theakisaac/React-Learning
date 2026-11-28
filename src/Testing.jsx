function Testing() {
   const trips = [

    { id: 1, name: "Zanzibar", available: true },
    { id: 2, name: "Kenya", available: false },
    { id: 3, name: "Maldives", available: true },

  ];

  const listedTrips = trips.map((trip) => {
    return (
        <li key={trip.id}>
            {trip.name} - {trip.available ? "Trip is available for booking!" : "Sorry, fully booked!"}
        </li>
    )
  });
  
  return (
    <>
     <ul> {listedTrips}</ul>
    </>
   
  )
}

export default Testing;