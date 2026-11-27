import Info from "./Info";
import Counter from "./Counter";
import ContactForm from "./ContactForm"

function App() {

  return (
    <>
    
      <Info isLoggedIn={true}/>
      <Counter />
      <ContactForm />

    </>
  )
}

export default App
 