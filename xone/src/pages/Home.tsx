import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of our application.</p>
      <Footer />
    </>
  );
};

export default Home;