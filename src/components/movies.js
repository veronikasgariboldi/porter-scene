import "./movies.css";
import "./homepage.css";


function Movies() {
    const movies = [
        {
            title: "Macbeth",
            year: 2015,
            yesno: "❌ no - this scene is cut entirely",
        },
        {
            title: "Macbeth",
            year: 1971,
            yesno: "✅ yes - but it has unsettling atmosphere rather than comedy",
        },
        {
            title: "The Tragedy of Macbeth",
            year: 2021,
            yesno: "✅ yes - porter appears, but his monologue is shortened and darkly comedic,",
        },
        {
            title: "BBC Shakespeare: Macbeth",
            year: 1983,
            yesno: "✅ yes - excactly like the play",
        },
    ];
    return (
        <div className="homepage">
            <div className="homepage-containers"> 
                <div className="summary-container"> 
                    <h1 className="movie-title">Movies</h1>
                    <table className="movie-table">
                        <thead>
                            <tr>
                                <th className="table-category">Movie</th>
                                <th className="table-category">Year</th>
                                <th className="table-category">Does it portray this scene?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {movies.map((movie, index) => (
                                <tr key={index}>
                                    <td>{movie.title}</td>
                                    <td>{movie.year}</td>
                                    <td>{movie.yesno}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Movies;