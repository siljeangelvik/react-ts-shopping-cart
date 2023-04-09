import {Button, Card, Nav} from "react-bootstrap";
import {formatCurrency} from "../utilities/formatCurrency";
import {useShoppingCart} from "../context/ShoppingCartContext";
import {NavLink} from "react-router-dom";

type StoreItemProps = {
    id: number;
    title: string;
    imageUrl: string;
    description: string;
    price: number;
    discountedPrice?: number; // Make discountedPrice optional
};

export function StoreItem({id, title, imageUrl, price, discountedPrice}: StoreItemProps) {

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    } = useShoppingCart();
    const quantity = getItemQuantity(id);

    return (
        <Card className="h-100">
            <Card.Img variant="top" src={imageUrl} height="200px" style={{objectFit: "cover"}}/>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content space-between align-items-baseline">
                    <span className="fs-2">{title}</span>
                    <span className="fs-2 text-muted d-flex flex-column">
                        {discountedPrice && <del>{formatCurrency(price)}</del>}
                        {formatCurrency(discountedPrice || price)}
                        {discountedPrice && <span></span>}
                    </span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <div className="d-flex" style={{gap: ".5rem"}}>
                            <Button className="w-50">
                                <Nav.Link as={NavLink} to={`/about/${id}`}>
                                    Read More
                                </Nav.Link>
                            </Button>

                            <Button className="w-50" onClick={() => increaseCartQuantity(id)}>
                                + Add to Cart
                            </Button>
                        </div>
                    ) : (
                        <div className="d-flex align-items-center flex-column" style={{gap: ".5rem"}}>
                            <div className="d-flex align-items-center justify-content-center" style={{gap: ".5rem"}}>
                                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                                <div>
                                    <span className="fs-3">{quantity}</span>in cart
                                </div>
                                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                            </div>
                            <Button onClick={() => removeFromCart(id)} variant="danger" size="sm">
                                Remove
                            </Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}
