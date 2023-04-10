import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Link} from "react-router-dom";

function ContactSuccess() {
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>You message was delivered.</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Thank you for reaching out, we will get back to you as soon as possible!</p>
                </Modal.Body>

                <Modal.Footer>
                    <Link to="/">
                        <Button>
                            Close
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default ContactSuccess;