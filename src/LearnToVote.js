import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from "./Navbar";

const LearnToVote = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="Candidate">
      <Navbar />

      <div className="CandidatePage">
        <h2 className="header-with-line2" data-aos="fade-down">
          <span className="inline-linea"></span>
          CIVIC EDUCATION
        </h2>

        <h3 data-aos="fade-right">How Voting works in Kenya.</h3>
        <p data-aos="fade-left">
          A step-by-step guide to participating in Kenya's democratic process
        </p>

        {[...Array(3)].map((_, i) => (
          <div
            className="column-container"
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 200}
          >
            <div className="columnL" data-aos="flip-left" data-aos-delay="100">
              <img
                src="/ruto.jpg"
                alt="Candidate"
                className="candidate-img"
              />
              <h3>Column 1</h3>
              <p>William S. Ruto</p>
            </div>

            <div className="columnL" data-aos="flip-right" data-aos-delay="200">
              <img
                src="/ruto.jpg"
                alt="Candidate"
                className="candidate-img"
              />
              <h3>Column 2</h3>
              <p>William S. Ruto</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnToVote;
