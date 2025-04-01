import "./homepage.css";

function Homepage() {
  return (
    <div className="homepage">
        <div className="homepage-containers"> 
            <div className="summary-container">
                <h1 className="summary">Summary</h1>
                <p className="summary-text">The Porter Scene in Macbeth is a comic interlude that occurs in Act 2, Scene 3. It features a drunken porter who answers the door to Macduff and Lennox, who have come to see King Duncan. The porter's ramblings and the absurdity of the situation provide a moment of levity in the otherwise dark and tragic play.</p>
            </div>
            <div className="theory-container">
                <h1 className="theory">Background</h1>
                <p className="theory-text">The Porter Scene is often interpreted as a commentary on the themes of ambition, power, and the consequences of unchecked desire. The porter's drunkenness and his references to the "equivocator" and "the devil" suggest a deeper moral and philosophical exploration of the play's central themes.</p>
            </div>
        </div>
    </div>
  );
}

export default Homepage;