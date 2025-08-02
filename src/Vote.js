import personImage from './assets/person.png';
import BallotImage from './assets/ballot.webp';  
import FlagImage from './assets/flag.png';

const Vote = () => {
  return (
    <div className="Vote"> 
      <div className="RowOne">
        <div className="column">
          <div className="civic-education">
      <span className="inline-line"></span>
    KNOW BEFORE YOU VOTE

    </div>
          <h3>Who's running to represent you?</h3> <p>
            Every election is more than a ballot – it's a choice about your everyday life. 
            This platform makes it easier to discover who's running in your area and what they believe in.
          </p>
          <p>
            From MP to Governor to President – get a clear, structured view of every hopeful leader. 
            No noise, no hype. Just facts.
          </p> 
             <a href="/Candidate" className="plain-link">View candidates &rarr; </a>

        </div>
        <div className="column">
            <img src={personImage} alt="Candidate" className="candidate-image" />

        </div>
      </div>

      {/* New RowTwo */}
      <div className="RowTwo">
        <div className="column">
                      <img src={BallotImage} alt="Ballot" className="ballot-image" />

        </div>
        <div className="column"> 
          <div className="civic-education">
                <span className="inline-line"></span>
 CIVIC EDUCATION
    </div>
          <h3>Understand the power of your vote </h3> 
          <p>
            Voting is the cornerstone of democracy. It’s how citizens influence government decisions,
            policies, and leadership at all levels.
          </p>
          <p>
            Staying informed helps you make powerful, responsible choices—and ensures your voice 
            contributes to the future you want to see.
          </p>
             <a href="/LearnToVote" className="plain-link">How Voting Works &rarr; </a>

        </div>
      </div> 
      <div className="RowThree">
        <div className="column">

          <div className="civic-education">
                <span className="inline-line"></span>
                  WANASEMA, WANAFANYA!
          </div>

          <h3>Track their promises and know the truth</h3>
          <p>
            Research candidates' backgrounds, read their manifestos, attend debates,
            and use reliable platforms to compare positions.
          </p>
          <p>
            Understanding what each candidate stands for helps you cast a vote that aligns with your values and priorities.
          </p>              <a href="/promises" className="plain-link">Track promises &rarr; </a>
  
        </div>
        <div className="column">
                      <img src={FlagImage} alt="Flag" className="flag-image" />



        </div>             


      </div>

    </div>
  );
};

export default Vote;