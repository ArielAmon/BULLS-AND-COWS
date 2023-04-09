import {Col} from "react-bootstrap";
import {useState} from "react";
import GameRules from "./GameRules";


function GameButtons({currGuesses, setMsg, init}) {

    const validMsg = "Your history of guesses will appear below:"
    const notValid = "please enter four digits";
    const [rulesModal, setRulesModal] = useState(false);


    function checkGuess() {

        let valid = currGuesses.every((val) => /^\d$/.test(val));
        setMsg(valid ? validMsg : notValid);
        console.log("jfj ")

    }

    function initGame() {
    }

    return (
        <>
            <Col>
                <button className="btn btn-lg btn-outline-light fw-bolder fs-4" onClick={() => setRulesModal(true)}>
                    Show Rules
                </button>
            </Col>
            <Col>
                <button type="button" className="btn btn-lg btn-outline-light fw-bolder fs-4" onClick={checkGuess}>
                    Check Your Guess
                </button>
            </Col>
            <Col>
                <button type="button" className="btn btn-lg btn-outline-light fw-bolder fs-4" onClick={() => init()}>
                    New Game
                </button>
            </Col>
            {rulesModal && <GameRules onClose={() => setRulesModal(false)} />}
        < />
    );
}

export default GameButtons;