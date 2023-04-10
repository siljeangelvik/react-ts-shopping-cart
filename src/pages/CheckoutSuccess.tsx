import {useShoppingCart} from "../context/ShoppingCartContext";
import {NavLink} from 'react-router-dom';
import {useEffect} from "react";
import {Button, Nav} from "react-bootstrap";

export function CheckoutSuccess() {
    const {clearCartAndLocalStorage} = useShoppingCart();

    useEffect(() => {
        clearCartAndLocalStorage(); // Clear the cart on mount
    }, []);

    return (
        <div>
            <h1>Thank you for your order!</h1>
            <p>Your order has been successfully placed.</p>
            <Nav.Link as={NavLink} to="/">
                <Button variant="primary" className="w-20">
                    Return to store
                </Button>
            </Nav.Link>
        </div>
    );
}