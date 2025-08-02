// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Vote from './Vote';
import Candidate from './Candidate';
import Contact from './Contact';
import HomePage from './Home';
import Footer from './Footer';
import LearnToVote from "./LearnToVote";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/Candidate" element={<Candidate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/LearnToVote" element={<LearnToVote />} />

        </Routes>      
         <Footer />



      </div>
    </Router>
  );
}

export default App;
