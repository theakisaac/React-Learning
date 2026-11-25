function Info({ isLoggedIn }) {
let message;

if(isLoggedIn) {
    message = "Welcome back. It's good to have you!"
} else {
    message = "Welcome, Guest"
}
    return (
<>
<h1>{message}</h1>
</>

)}
export default Info;