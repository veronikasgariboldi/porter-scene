import "./home.css"
import Homepage from "../components/homepage";

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
                    <Homepage />
                </div>
            </div>
        </div>
    )
}

export default Home;