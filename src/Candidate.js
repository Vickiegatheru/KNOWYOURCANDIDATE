import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from "./Navbar";
import { Link } from 'react-router-dom';

const Candidate = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="Candidate">
      <Navbar />

      <div className="CandidatePage">

        <h2 className="header-with-line2" data-aos="fade-down">
          <span className="inline-linea"></span>
          KNOW BEFORE YOU VOTE
        </h2>

        <h3 data-aos="fade-right">Who's running to represent you?</h3>

        <p data-aos="fade-left">
          Your vote begins with knowing the people who seek to lead
        </p>
        <p data-aos="fade-left" data-aos-delay="100">
          This space lets you see beyond posters and slogans—into real profiles, promises and past actions
        </p>

        <div className="button-group" data-aos="zoom-in-up">
          <Link to="/vote" className="primary-btn">Search Candidate</Link>
          <Link to="/" className="secondary-btn">All</Link>

          <Link to="/vote" className="primary-btn">President</Link>
          <Link to="/" className="secondary-btn">Governor</Link>

          <Link to="/vote" className="primary-btn">Senator</Link>
          <Link to="/" className="secondary-btn">MP</Link>

          <Link to="/vote" className="primary-btn">Women Rep</Link>
          <Link to="/vote" className="primary-btn">MCA</Link>
        </div>

        {[...Array(3)].map((_, i) => (
          <div className="column-container" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
            <div className="columnL" data-aos="zoom-in" data-aos-delay={i * 100 + 100}>
              <h3>Column 1</h3>
              <p>William S. Ruto</p>
            </div>
            <div className="columnL" data-aos="zoom-in" data-aos-delay={i * 100 + 200}>
              <h3>Column 2</h3>
              <p>William S. Ruto</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Candidate;
