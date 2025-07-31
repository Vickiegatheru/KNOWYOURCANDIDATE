import './index.css'; // Make sure the path is correct
const HomePage = () => {
    return (
        <>  
            <div className="HomePage">
  <nav className="navbar">
    <header>
        
      <h1>KNOWYOURCANDIDATES</h1>
      <div className="links"> 
        <a href="/">LEARNTOVOTE</a>   
        <a href="/">CANDIDATES</a>
        <a href="/">CONTACT US</a>
      </div>
    </header>
  </nav>

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
