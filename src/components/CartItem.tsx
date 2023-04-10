import {useShoppingCart} from "../context/ShoppingCartContext";
import {Button, Stack} from "react-bootstrap";
import {formatCurrency} from "../utilities/formatCurrency";
import {useApiGet} from "../hooks/useApiGet";
import {API_URL} from "../utilities/constants";

type CartItemProps = {
    id: number;
    quantity: number;
}

export function CartItem({id, quantity}: CartItemProps) {


    const itemFound = useApiGet(API_URL + id);
    const item = itemFound.data;
    const {removeFromCart} = useShoppingCart();
    //  const item = storeItems.find(item => item.id === id)
    if (item == null) return null;

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img
                src={item.imageUrl}
                alt={item.title}
                style={{width: "125px", height: "75px", objectFit: "cover"}}
            />

            <div className="me-auto">
                <div>
                    {item.title}{" "}
                    {quantity > 1 && (
                        <span className="text-muted"
                              style={{fontSize: ".65rem"}}>
                    x{quantity}
                        </span>
                    )}
                </div>
                <div className="text-muted" style={{fontSize: ".75rem"}}>
                    {formatCurrency(item.price)}
                </div>
            </div>

            <div>{formatCurrency(item.price * quantity)}</div>
            <Button
                onClick={() => removeFromCart(item.id)}
                variant="outline-danger"
                size="sm"
            >
                &times;
            </Button>
        </Stack>
    )
}