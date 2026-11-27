import Info from "./Info";
import Counter from "./Counter";
import ContactForm from "./ContactForm";
import Testing from "./Testing"

function App() {

  return (
    <>
    
      <Info isLoggedIn={true}/>
      <Counter />
      <ContactForm />
      <Testing />

    </>
  )
}

export default App
 