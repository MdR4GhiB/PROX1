import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function About(){
    return (
        <>
            <Navbar />
            <h1>About Us</h1>
            <p>This is the about page of our application.</p>
            <Link to="/">Go back to Home</Link>
            <Footer />
        </>
    )
}

export default About;