function Testing() {
  const trips = [
    { id: 1, name: "Zanzibar", price: 500 },
    { id: 2, name: "Kenya", price: 700 },
    { id: 3, name: "Maldives", price: 900 },
  ];

  const premiumTrips = trips.filter((trip) => trip.price > 500);
  const selectedPremiumTrips = premiumTrips.map((premiumTrip) => {
    return (
        
            <li key={premiumTrip.id}>
                {premiumTrip.name} - {premiumTrip.price}
            </li>
    
    )
  })


  return(

    <ul>
        {selectedPremiumTrips}
    
    </ul>
  );
}

export default Testing