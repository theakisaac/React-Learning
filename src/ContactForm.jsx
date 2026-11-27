function ContactForm() {

    function handleSubmit(event) {
        event.preventDefault()
        alert("Form submitted successfully")
    }
    return (
        <>
        <form onSubmit={handleSubmit}>

            <input type="text" placeholder="Enter your username" />
        <button>Submit</button>
        </form>
        </>
    )
}

export default ContactForm;