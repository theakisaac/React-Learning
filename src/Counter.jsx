import { useState } from "react";

function Counter() {
const [name, setName] = useState("")

function handleInputName(event) {
    setName(event.target.value)
}
    return (
        <>
        <input type="text" onChange={handleInputName} value={name} placeholder="Enter your name" />
        <p>Your response: {name}</p>
        </>
    )

}

export default Counter;