import { Link } from 'react-router-dom';
import LearnToVote from "./LearnToVote";

import Candidate from "./Candidate";

const Navbar = () => {
    return ( <nav className="navbar">       <header>
 
        <h1>KNOWYOURCANDIDATES</h1>
        <div className="links"> 
          <Link to="/LearnToVote">LEARNTOVOTE</Link>   
         <Link to="/Candidate">CANDIDATES</Link>
          <Link to="/contact">CONTACT US</Link>
        </div>
      </header>
    </nav>
 );
}
 
export default Navbar;