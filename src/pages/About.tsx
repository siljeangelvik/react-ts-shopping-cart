import {Col, Row} from "react-bootstrap";
import {useApiGet} from "../hooks/useApiGet";
import {useParams} from "react-router-dom";
import {API_URL} from "../utilities/constants";
import {formatCurrency} from "../utilities/formatCurrency";

export function About() {

    const {id} = useParams<{ id: string }>(); // get the id from the url
    const {data} = useApiGet(API_URL + id); // use the useApiGet hook to fetch data from the API

    return (
        <>
            <h1>About</h1>

            <Row md={2} xs={1} lg={3} className="g-3 me-auto">
                <div style={{display: "flex", flexWrap: "wrap", gap: "25px"}}>
                    <h2>{data?.title}</h2>

                    <h3 className="fs-2 text-muted d-flex flex-column">
                        {data?.discountedPrice && <div>
                            <del>{formatCurrency(data?.price)}</del>
                            <p className="text-success">{formatCurrency(data?.discountedPrice)}</p>
                            <p className="text-success">Sale!</p>
                        </div>
                        }
                    </h3>
                </div>
            </Row>


            <Row md={2} xs={1} lg={3} className="g-3 me-auto">
                <img
                    src={data?.imageUrl}
                    alt={data?.title}
                    height="200px"
                    style={{objectFit: "cover"}}
                />

                <h4>Description: </h4>
                <p>{data?.description}</p>
            </Row>

            <h2>Reviews</h2>
            <Row md={2} xs={1} lg={3} className="g-3 me-auto">
                <div style={{display: "flex", flexWrap: "wrap", gap: "25px"}}>
                    {data?.reviews.map((review: {
                        username: any;
                        rating: any;
                        decription: any;
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
                                    <p>{review.rating}</p>
                                </div>

                                <div>
                                    <h5>Comment:</h5>
                                    <p style={{maxWidth: "20ch"}}>{review.decription}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </div>
            </Row>
        </>
    )
}