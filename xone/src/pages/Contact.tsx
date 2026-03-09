import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function Contact(){
    return (
        <>
            <Navbar />
            <h1>Contact Us</h1>
            <p>The contact page is underdevelopment</p>
            <Link to="/">Go back to Home</Link>
            <Footer />
        </>
    )
}

export default Contact;