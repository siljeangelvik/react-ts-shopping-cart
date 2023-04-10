import {Col, Row} from "react-bootstrap";
import {Key, useState} from "react";
import {StoreItem} from "../components/StoreItem";
import {useApiGet} from "../hooks/useApiGet";
import {API_URL} from "../utilities/constants";

export function Home() {

    const {data, loading} = useApiGet(API_URL); // use the useApiGet hook to fetch data from the API
    const [searchInput, setSearchInput] = useState(''); // create a state variable to store the search input
    const dataList = data?.map((item: { title: string }) => item.title); // create a list of titles to use in the datalist

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h1>uShop</h1>

            <p style={{marginBottom: '2rem', marginTop:"2rem"}}>There is currently {data?.length} listings</p>

            <input
                type="text"
                placeholder="Search products..."
                value={searchInput}
                list={"dataList"}
                style={{marginBottom: '2rem', width:"300px", padding:"0.35rem", borderRadius:"0.25rem", border:"2px solid #ccc"}}
                onChange={e => setSearchInput(e.target.value)}
            />

            <datalist id="dataList">
                {dataList?.map((item: string, index: Key) => {
                    return (
                        <option key={index} value={item} />
                    )
                })}
            </datalist>

            <Row md={2} xs={1} lg={3} className="g-3">
                {dataList?.filter((item: string) => item.toLowerCase().includes(searchInput.toLowerCase())).map((item: string, index: Key) => {
                    return (
                        <Col key={index}>
                            <StoreItem
                                id={data[index].id}
                                title={data[index].title}
                                imageUrl={data[index].imageUrl}
                                description={data[index].description}
                                price={data[index].price}
                                discountedPrice={data[index].discountedPrice}
                            />
                        </Col>
                    );
                })
                }
            </Row>
        </>
    )
}