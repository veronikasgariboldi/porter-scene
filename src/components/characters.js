import "./character.css";
import "./homepage.css";

function Characters() {
    const characters = [
        {
            name: "Porter",
            role: ["Opens the gate of Macbeth's castle;", "delivers a comedic monologue", "imagining himself as the gatekeeper of hell."],
            behavior: ["Drunk, humorous, ironic, slow to respond." , "Makes witty but unsettling jokes about sinners."],
            purpose: ["Comic relief", "Symbolic of Macbeth's castle as hell", "Builds suspense", "Reflects theme of guilt and damnation"]
        },
        {
            name: "Macduff",
            role: ["Arrives at the castle to wake Duncan;" ,"discovers the murder."],
            behavior: ["Dutiful, loyal to Duncan,", "shocked and horrified by the murder."],
            purpose: ["Acts as a moral contrast to Macbeth", " Unknowingly moves the plot toward Macbeth’s downfall"]
        },
        {
            name: "Lennox",
            role: ["Accompanies Macduff","comments on the strange events of the night."],
            behavior: ["Observant, confused by the strange omens (storms, screams)."],
            purpose: ["Reflects natural disorder caused by Duncan’s murder" ,"Builds eerie atmosphere"]
        },
        {
            name: "Macbeth",
            role: ["Pretends to be innocent and shocked at the murder.", "Lies to Macduff and Lennox."],
            behavior: ["Hypocritical, deceptive, increasingly tense."],
            purpose: ["Tries to manage the fallout of the murder", "His fake innocence contrasts with his inner guilt"]
        },
        {
            name: "Lady Macbeth",
            role: ["Pretends to be horrified by Duncan’s death,", "faints (possibly fake)."],
            behavior: ["Calculating, manipulative, dramatic."],
            purpose: ["Distracts from Macbeth’s suspicious behavior" , "Maintains appearance of innocence"]
        }

    ];

    return (
        <div className="homepage">
            <div className="homepage-containers"> 
                <div className="summary-container"> 
                        <h1 className="character-title">Characters</h1>
                        <table className="character-table">
                            <thead>
                                <tr>
                                    <th className="table-category">Character</th>
                                    <th className="table-category">Role in Scene</th>
                                    <th className="table-category">Behavior</th>
                                    <th className="table-category">Purpose</th>
                                </tr>
                            </thead>
                            <tbody>
                                {characters.map((character, index) => (
                                    <tr key={index}>
                                        <td>{character.name}</td>
                                        <td>{Array.isArray(character.role) ?
                                            character.role.map((role, i) => (
                                                <div key={i}>{role}</div>
                                            ))
                                            : character.role
                                            }
                                        </td>
                                        <td>{Array.isArray(character.behavior) ?
                                            character.behavior.map((behavior, i) => (
                                                <div key={i}>{behavior}</div>
                                            )) 
                                            : character.behavior
                                        }
                                        </td>
                                        <td>
                                            {Array.isArray(character.purpose) ? 
                                                character.purpose.map((purpose, i) => (
                                                    <div key={i}>- {purpose}</div>
                                                )) 
                                                : character.purpose
                                            }
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    );
}

export default Characters;