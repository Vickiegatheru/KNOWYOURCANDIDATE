import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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

        <h3 data-aos="fade-right">How Voting Works in Kenya</h3>
        <p data-aos="fade-left">
          A step-by-step guide to participating in Kenya's democratic process.
        </p>

        <div className="column-container">
          <div className="columnL" data-aos="flip-left" data-aos-delay="100">
            <div>
  <h3>Registration & Preparation</h3>
  <p>      Ensure you're registered to vote and have your ID ready.
     Check your polling station location and understand the ballot structure.</p>
  <ul>
    <li>Valid Kenyan ID or Passport</li>


    <li>Confirm your polling station</li>


    <li>Confirm your polling station</li>
    <li>Understand the ballot papers</li>

    <li>Arrive early on voting day</li>


  </ul>
</div>

          </div>

          <div className="columnL" data-aos="flip-right" data-aos-delay="200">
            <h3>At the Polling Station</h3>


            <p>
              Follow the proper procedures at your designated polling station.
               Queue, verify your identity, and cast your ballot.
            </p>

            <ul>
    <li>Join the correct queue</li>


    <li>Present your ID</li>


    <li>Receive your ballot papers</li>
    <li>Vote in designated ballot box</li>



  </ul>


          </div>

          <div className="columnL" data-aos="flip-left" data-aos-delay="300">
            <h3>              Marking Your Ballot</h3>

            <p>
                 Make clear marks on your ballot papers. 

               Each position has its own ballot paper 
             – President, Governor, Senator, MP, MCA, and Women Rep.
            </p>
           <ul>
    <li>Use the provided pen/stamp</li>


    <li>Mark clearly inside the box</li>


    <li>Vote for all positions</li>
    <li>Ask for help if needed</li>

      </ul>


          </div>

          <div className="columnL" data-aos="flip-right" data-aos-delay="400">
            <h3>Casting Your Vote</h3>
            <p>
             Place your completed ballots in the correct ballot boxes and receive 
               confirmation of your participation in the democratic process.
            </p>
<ul>
    <li>Fold ballot papers properly</li>
    <li>Place in correct ballot boxes</li>
    <li>Receive voter confirmation</li>
    <li>Leave the polling station</li>

      </ul>



          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnToVote;
