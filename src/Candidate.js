import Navbar from "./Navbar";
import { Link } from 'react-router-dom';


const Candidate = () => {
    return ( 

    <div className="Candidate">    
          <Navbar/>
    <div className="CandidatePage">    

      <h2 className="header-with-line2">
      <span className="inline-linea"></span>
                KNOW BEFORE YOU VOTE   
                </h2> 

       <h3>        Who's running to represent you? </h3>  

       <p>Your vote begins with knowing the people who seek to lead</p>
       
              <p>This space lets you see beyond posters and 
                slogans-into real profiles, promises and past actions</p>

<div className="button-group">
        <Link to="/vote" className="primary-btn">Search Candidate</Link>
        <Link to="/" className="secondary-btn">All</Link>

<Link to="/vote" className="primary-btn">President</Link>
  <Link to="/" className="secondary-btn">Governor</Link>

<Link to="/vote" className="primary-btn">Senator</Link>
  <Link to="/" className="secondary-btn">MP</Link>


<Link to="/vote" className="primary-btn">Women Rep</Link>
<Link to="/vote" className="primary-btn">MCA</Link>
      </div>  

<div className="column-container">
  <div className="columnL">
    <h3>Column 1</h3>
    <p>William S. Ruto</p>
  </div>
  <div className="columnL">
    <h3>Column 2</h3>
    <p>     William S. Ruto</p>
  </div>
</div>

<div className="column-container">
  <div className="columnL">
    <h3>Column 1</h3>
    <p>William S. Ruto</p>
  </div>
  <div className="columnL">
    <h3>Column 2</h3>
    <p>     William S. Ruto</p>
  </div>
</div>

<div className="column-container">
  <div className="columnL">
    <h3>Column 1</h3>
    <p>William S. Ruto</p>
  </div>
  <div className="columnL">
    <h3>Column 2</h3>
    <p>     William S. Ruto</p>
  </div>
</div>
      </div>

           </div>

     );
}
 
export default Candidate;