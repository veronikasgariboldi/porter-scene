import "./home.css"
import ShortSummary from "../components/short-summary";
import Why from "../components/why";
import SceneInfo from "../components/scene-info";
import Theory from "../components/theory";
import Button from "../components/button";
import Footer from "../components/footer";

function Home () {
    return (
        <div className="home">
            <div className="home-container">
                <div className="intro-containers">
                    <h1 className="macbeth">Macbeth</h1>
                    <h1 className="scene">The Porter Scene</h1>
                </div>
            </div>
            <div className="home-page">
                <div className="home-page-container">
                    <div className="second-row">
                        <Why />
                        <SceneInfo />
                    </div> 
                    <div className="second-row">
                        <div className="special-width">
                            <ShortSummary />
                        </div>
                            <Theory />
                    </div>
                    <div className="Button-container">
                    <Button to="/detailed-info">Do you want to know more?</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;