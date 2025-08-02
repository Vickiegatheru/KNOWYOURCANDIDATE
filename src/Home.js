import './index.css'; // Make sure the path is correct
import Navbar from './Navbar';

const HomePage = () => {
    return (
        <>  
            <div className="HomePage">         <Navbar/>

  <div className="Home">
    <h2 className="header-with-line">
      <span className="inline-line"></span>
      VOTE CLEARLY. BOLDLY. WITH INSTINCT
    </h2> 
    <p>Discover your candidates. Track Promises. Understand your Government.</p>
  </div>
</div>

        </>
    );
};

export default HomePage;