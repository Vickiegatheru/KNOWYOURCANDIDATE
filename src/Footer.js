import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShowFooter(true); // scrolling up
      } else {
        setShowFooter(false); // scrolling down
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`Footer ${showFooter ? 'fade-in' : 'fade-out'}`}>
      <div className="column1">
        <h3>KNOWYOURCANDIDATE</h3>

        <p>This platform doesn't endorse anyone</p>
        <p>It just gives you receipts</p>

        <h4>
          © 2025 KNOWYOURCANDIDATE — All Rights Reserved
        </h4>
      </div>

      <div className="column2">
        <p>
          <a href="/more" className="more">more on us</a>
        </p>
        <p>Want to add a candidate?</p>
        <p>Report missing data?</p>
      </div>
    </div>
  );
};

export default Footer;
