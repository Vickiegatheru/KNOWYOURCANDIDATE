import React, { useEffect } from 'react';
import rutoImage from './assets/ruto.jpg';
import karuaImage from './assets/karua.jpg'; 

import gachaguaImage from './assets/gachagua.jpg';
import matiangiImage from './assets/matiangi.jpg';
import maragaImage from './assets/maraga.jpg';





import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Candidate = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Candidate data
  const candidates = [
    { 
      title: "Presidential Candidate", 
      name: "William S. Ruto", 
      image: rutoImage,
      age: 58,
      position : "President of the Republic of Kenya ",
    },
    { 
      title: "Presidential Candidate", 
      name: "Martha Karua", 
      image: karuaImage,
      age: 45,
      position: "Former Governor of Nairobi"
    },
    { 
      title: "Presidential Candidate", 
      name: "Rigathi Gachagua", 
      image: gachaguaImage,
      age: 50,
      position: "Former Deputy President"
    },
    { 
      title: "Presidential Candidate", 
      name: "Fred Matiang'i", 
      image: matiangiImage,
      age: 39,
      position: "MP for Kisumu West"
    },
    { 
      title: "Presidential Candidate", 
      name: "David Maraga ", 
      image: maragaImage,
      age: 42,
      position: "Former Chief Justice"
    },
    { 
      title: "Presidential Candidate ", 
      name: "", 
      image: maragaImage,
      age: 35,
      position: ""
    }
  ];

  const chunkArray = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );

  const candidateRows = chunkArray(candidates, 2);

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
          <Link to="/Candidate" className="primary-btn">Search Candidate</Link>
          <Link to="/" className="secondary-btn">All</Link>
          <Link to="/vote" className="primary-btn">President</Link>
          <Link to="/" className="secondary-btn">Governor</Link>
          <Link to="/vote" className="primary-btn">Senator</Link>
          <Link to="/" className="secondary-btn">MP</Link>
          <Link to="/vote" className="primary-btn">Women Rep</Link>
          <Link to="/vote" className="primary-btn">MCA</Link>
        </div>

        {candidateRows.map((row, rowIndex) => (
          <div
            className="column-container"
            key={rowIndex}
            data-aos="fade-up"
            data-aos-delay={rowIndex * 200}
          >
            {row.map((candidate, colIndex) => (
              <div
                className="columnL"
                key={colIndex}
                data-aos="zoom-in"
                data-aos-delay={(rowIndex * 2 + colIndex) * 100}
              >
                <img src={candidate.image} alt={candidate.title} className="flag-image" />
                <h3>{candidate.title}</h3>
                <p><strong>Name:</strong> {candidate.name}</p>
                <p><strong>Age:</strong> {candidate.age}</p>
                <p><strong>Position:</strong> {candidate.position}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Candidate;
