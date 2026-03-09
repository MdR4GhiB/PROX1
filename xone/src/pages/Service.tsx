import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Service: React.FC = () =>{
    return (
        <>
            <Navbar />
            <h1>Our Services</h1>
            <p>The Service page is underdevelopment</p>
            <Link to="/">Go back to Home</Link>
            <Footer />
        </>
    )
}

export default Service;