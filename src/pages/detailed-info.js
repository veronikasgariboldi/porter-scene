import "./detailed-info.css";
import Summary from "../components/summary";
import Characters from "../components/characters";
import Movies from "../components/movies";
import Theory from "../components/theory";


function DetailedInfo () {
    return (
        <div className="detailed-info">
            <div className="detailed-info-container">
                <div className="detailed-info-intro">
                    <h1 className="detailed-info-title">Macbeth</h1>
                    <h1 className="detailed-info-scene">The Porter Scene</h1>
                </div>
                <h1 className="detailed-info-subtitle">Act 2, Scene 3</h1>   
                <Summary />
                <Characters />
                <div className="filled-row">
                    <div className="half-width">
                        <Movies />
                    </div>
                    <div className="half-width">
                        <Theory />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DetailedInfo;