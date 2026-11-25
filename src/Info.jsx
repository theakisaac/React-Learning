function Info(props) {

    return (
    <>
    <h3>Welcome back {props.name}. It's good to have you!</h3>
    
<p>Please, confirm that your profession is {props.profession}</p>

<p>Price: {props.price}</p>
<p>Availability Status: {props.isAvailable ? "Yes" : "No"}</p>

    </>
    )

}

export default Info
