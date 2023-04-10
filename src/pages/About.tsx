import {Button, Col, Row} from "react-bootstrap";
import {useApiGet} from "../hooks/useApiGet";
import {useParams} from "react-router-dom";
import {API_URL} from "../utilities/constants";
import {formatCurrency} from "../utilities/formatCurrency";
import {useShoppingCart} from "../context/ShoppingCartContext";

export function About() {

    const {id} = useParams<{ id: string }>(); // get the id from the url
    const {data} = useApiGet(API_URL + id); // use the useApiGet hook to fetch data from the API
    const {increaseCartQuantity} = useShoppingCart();

    const checkPrice = () => {

        if (data?.discountedPrice === data?.price) {
            return (
                <span className="d-flex flex-column">
                    {formatCurrency(data?.discountedPrice)}
                </span>
            );
        } else {
            return (
                <span className="d-flex flex-column">
                    <del className="fs-4">{formatCurrency(data?.price)}</del>
                    <span className="fs-3 text-muted">{formatCurrency(data?.discountedPrice)}</span>
                    <span className="fs-3 text-success">
                        {`Save ${formatCurrency(data?.price - data?.discountedPrice)} 
                        (${Math.round(((data?.price - data?.discountedPrice) / data?.price) * 100)} % off)`}
                    </span>
                </span>
            );
        }
    }

    return (
        <>
            <h1>{data?.title}</h1>

            <Row md={2} xs={1} lg={3} className="g-3 me-auto">
                <div style={{display: "flex", flexWrap: "wrap", gap: "25px"}}>
                    <h3 className="fs-2">
                        <span className="fs-3 d-flex flex-column">{checkPrice()}</span>
                    </h3>
                </div>
            </Row>

            <Row md={2} xs={1} lg={3} className="g-3 me-auto d-flex flex-column pb-5">
                <img
                    src={data?.imageUrl}
                    alt={data?.title}
                    height="200px"
                    style={{objectFit: "cover"}}
                />
                <h4>Description: </h4>
                <p>{data?.description}</p>

                <Button className="" onClick={() => increaseCartQuantity(data?.id)}>
                    + Add to Cart
                </Button>
            </Row>

            <h2>Reviews</h2>
            <Row md={2} xs={1} lg={3} className="g-3 me-auto">
                <div style={{display: "flex", flexWrap: "wrap", gap: "25px"}}>
                    {data?.reviews.map((review: {
                        username: any;
                        rating: any;
                        // @ts-ignore
                        description: comment;
                        id: string | number | null | undefined;
                    }) => (
                        <Col key={review.id}>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <div>
                                    <h5>Username:</h5>
                                    <p>{review.username}</p>
                                </div>

                                <div>
                                    <h5>Rating:</h5>
                                    <div className="d-flex justify-content-start align-items-baseline h-25">
                                        <span className="material-symbols-outlined">
                                            star
                                        </span>
                                        <strong>{review.rating}</strong>
                                    </div>
                                </div>

                                <div>
                                    <h5>Comment:</h5>
                                    <p style={{maxWidth: "20ch"}}>{review.description}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </div>
            </Row>
        </>
    )
}