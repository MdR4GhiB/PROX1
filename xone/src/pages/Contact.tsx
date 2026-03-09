import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  return (
    <>
      <Navbar />
      <h1>Contact Us</h1>
      <p>The contact page is under development</p>
      <Link to="/">Go back to Home</Link>
      <Footer />
    </>
  );
};

export default Contact;