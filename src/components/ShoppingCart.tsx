import {Button, Nav, Offcanvas, Stack} from "react-bootstrap";
import {useShoppingCart} from "../context/ShoppingCartContext";
import {CartItem} from "./CartItem";
import {formatCurrency} from "../utilities/formatCurrency";
import {useApiGet} from "../hooks/useApiGet";
import {API_URL} from "../utilities/constants";
import {NavLink} from "react-router-dom";

type ShoppingCartProps = {
    isOpen: boolean;
}

export function ShoppingCart({isOpen}: ShoppingCartProps) {

    const {closeCart, cartItems, clearCartAndLocalStorage} = useShoppingCart();
    const items = useApiGet(API_URL);

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                    <div className="ms-auto fw-bold fs-5">
                        Total {formatCurrency(cartItems.reduce((total, cartItem) => {
                            const item = items.data?.find((i: { id: number; }) => i.id === cartItem.id)
                            return total + (item?.price || 0) * cartItem.quantity
                        }, 0)
                    )}
                    </div>
                </Stack>

                <Stack gap={3} className="mt-3">
                    <Nav.Link as={NavLink} to="/checkout">
                        <Button variant="primary" className="w-100" onClick={clearCartAndLocalStorage}>
                            Checkout
                        </Button>
                    </Nav.Link>

                    <Button variant="secondary" className="w-100" onClick={closeCart}>
                        Continue Shopping
                    </Button>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}