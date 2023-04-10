import {Routes, Route} from 'react-router-dom'
import {Container} from "react-bootstrap";
import {Home} from './pages/Home'
import {Contact} from './pages/Contact'
import {About} from './pages/About'
import {Navbar} from './components/Navbar'
import {ShoppingCartProvider} from "./context/ShoppingCartContext";
import {Footer} from "./components/Footer";
import {CheckoutSuccess} from "./pages/Checkout";

function App() {
    return (
        <>
            <ShoppingCartProvider>
                <Navbar/>
                <Container className={"mb-4"}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/about/:id" element={<About/>}/>
                        <Route path="/checkout" element={<CheckoutSuccess/>}/>
                    </Routes>
                </Container>
                <Footer/>
            </ShoppingCartProvider>
        </>
    )
}

export default App