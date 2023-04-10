import {ContactForm} from "../components/ContactForm";

export function Contact() {
    return (
        <>
            <h1>Contact</h1>
            <div style={{marginTop:"2rem", marginBottom:"2rem"}}>
                <p className="contact-content">Have any questions, comments, or concerns? We'd love to hear from you!</p>
                <p className="contact-content"> Use the form below to send us a message,</p>
                <p className="contact-content">and we'll get back to you as soon as possible.</p>
            </div>
            <ContactForm/>
        </>
    )
}