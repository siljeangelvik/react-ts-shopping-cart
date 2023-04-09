import {Col, Row} from "react-bootstrap";
import {Key} from "react";
import {useApiGet} from "../hooks/useApiGet";
import {API_URL} from "../utilities/constants";

export function Store() {

    const { data, loading } = useApiGet(API_URL); // use the useApiGet hook to fetch data from the API
    if (loading) {return <p>Loading...</p>;}

    return (
        <>
            <h1>Store</h1>

            <Row md={2} xs={1} lg={3} className="g-3">
                {data?.map((item: { id: Key | null | undefined; }) => (
                    <Col>{JSON.stringify(item)}</Col>
                ))}
            </Row>
        </>
    )
}