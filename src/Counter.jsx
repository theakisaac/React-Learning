import { useState } from "react";

function Counter () {
const [isLoggedIn, setIsLoggedIn] = useState(true)

 return (

        <>
       <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Learn more</button>
                {isLoggedIn && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, iste at. Quod, aliquam!</p>}

        
        </>
    )
}

   

export default Counter