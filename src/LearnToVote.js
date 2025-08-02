import Navbar from "./Navbar";
import { Link } from 'react-router-dom';


const LearnToVote = () => {
    return ( 

    <div className="Candidate">    
          <Navbar/>
    <div className="CandidatePage">    

      <h2 className="header-with-line2">
      <span className="inline-linea"></span>
        CIVIC EDUCATION                </h2> 

       <h3>        How Voting works in Kenya. </h3>  

       <p>A step by step guide to partiipating in Kenya's Deorati proess</p>
       
              
        

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
 
export default LearnToVote;