// import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



function Home() {
    return (
        <>
            <Navbar />
            <h1>Welcome to the Home Page</h1>
            <p>This is the home page of our application.</p>

            <Footer />
        </>
    )
}

export default Home;