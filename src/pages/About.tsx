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

    return (
        <>
            <h1>About</h1>

            <Row md={2} xs={1} lg={3} className="g-3 me-auto">
                <div style={{display: "flex", flexWrap: "wrap", gap: "25px"}}>
                    <h2>{data?.title}</h2>
                    <h3 className="fs-2">
                        {data?.discountedPrice && (
                            <span className="fs-6 text-muted d-flex flex-column">
                                {data?.price !== data?.discountedPrice && <del>{formatCurrency(data?.price)}</del>}
                                {formatCurrency(data?.discountedPrice)}
                                {data?.price !== data?.discountedPrice && (
                                    <span className="text-success">
                                        {`Save ${formatCurrency(data?.price - data?.discountedPrice)} (${Math.round(((data?.price - data?.discountedPrice) / data?.price) * 100)}% off)`}
                                    </span>
                                )}
                            </span>
                        )}
                        {!data?.discountedPrice && formatCurrency(data?.price)}
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