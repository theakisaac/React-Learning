import { useState } from "react";

function ContactForm() {

    const [messageHovered, setMessageHovered] = useState(false);


return(
    <>

    <p
    onMouseEnter={() => setMessageHovered(!messageHovered)}
    onMouseLeave={() => setMessageHovered(messageHovered)}
    >Isaac Akerele {messageHovered && "is a self-taught Software Developer with deep passion for problem solving and making an indelible impact"}

</p>
    </>
)

}

export default ContactForm;