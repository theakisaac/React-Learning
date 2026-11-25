import NavBar from "./NavBar";
import Info from "./Info"


function App() {

  return (
    <>
      <NavBar />
      <Info name="Isaac" profession="Software Developer"/>
      <Info name="Adekunle" profession="Chartered Accountant"/>
      <Info price={50000 + 60000}/>
      <Info isAvailable = {false} />
    </>
  )
}

export default App
 