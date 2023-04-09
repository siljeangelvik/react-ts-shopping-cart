import {Col, Nav, Row} from "react-bootstrap";
import {Key, useState} from "react";
import {StoreItem} from "../components/StoreItem";
import {useApiGet} from "../hooks/useApiGet";
import {API_URL} from "../utilities/constants";

export function Home() {

    const { data, loading } = useApiGet(API_URL); // use the useApiGet hook to fetch data from the API
    const [searchInput, setSearchInput] = useState(''); // create a state variable to store the search input

    if (loading) {return <p>Loading...</p>;}

    return (
        <>
            <h1>Home</h1>

            <input
                type="text"
                placeholder="Search..."
                value={searchInput}
                style={{marginBottom: '2rem'}}
                onChange={e => setSearchInput(e.target.value)}
            />

            <Row md={2} xs={1} lg={3} className="g-3">
                {data?.filter((item: { title: string }) => item.title.toLowerCase().includes(searchInput.toLowerCase()))
                    .map((item: { id: Key | null | undefined; }) => (
                        <Col key={item.id}>
                            <StoreItem {...item as any} />
                        </Col>
                    ))}
            </Row>
        </>
    )
}

// <Col>{JSON.stringify(item)}</Col>