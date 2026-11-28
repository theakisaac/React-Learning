import Info from "./Info";
import Counter from "./Counter";
import ContactForm from "./ContactForm";
import Testing from "./Testing";

function App() {

 const summerTrips = [
  {id: 1, destination: "Maldives", price: 3000000},
    {id: 2, destination: "Singapore", price: 5200000},
      {id: 3, destination: "Lebanon", price: 6800000},
        {id: 4, destination: "Rwanda", price: 5000000},

 ]

  const holidayTrips = [
  {id: 1, destination: "France", price: 5700000},
    {id: 2, destination: "Cape Verde", price: 3600000},
      {id: 3, destination: "Tokyo", price: 4700000},
        {id: 4, destination: "Kenya", price: 4000000},

 ]




  return (
    <>
    
      <Info isLoggedIn={true} />
      <Counter />
      <ContactForm />
      <Testing title="Exciting Destinations this Summer" trips={summerTrips}/>
            <Testing title="Exciting Destinations this Holiday Season" trips={holidayTrips}/>

    </>
  )
}

export default App
 