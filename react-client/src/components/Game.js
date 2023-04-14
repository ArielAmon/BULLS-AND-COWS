import {Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import CheckGuessButton from "./CheckGuessButton";
import NumberSelector from "./NumberSelector";
import UserMessages from "./UserMessages";
import GuessingTable from "./GuessingTable";


function Game({setInWin, setInGame, newGame, setNewGame, setScore}) {

    const initialGuess = ['guess...', 'guess...', 'guess...', 'guess...'];
    const initialMsg = "Your history of guesses will appear below:";

    const [actualNumbers, setActualNumbers] = useState(() => generateRandom());
    const [guessNumbers, setGuessNumbers] = useState(initialGuess);
    const [userMessage, setUserMessage] = useState(initialMsg);
    const [cowsAndBulls, setCowsAndBulls] = useState([]);

    function generateRandom() {
        // Generate a random array of numbers
        const digits = new Set();
        while (digits.size < 4) {
            digits.add(Math.floor(Math.random() * 10).toString());
        }
        console.log(digits);
        return [...digits];
    }

    function init() {

        setNewGame(false);
        setGuessNumbers(initialGuess);
        setCowsAndBulls([]);
        setUserMessage(initialMsg);
        setActualNumbers(generateRandom());
        console.log("in init")
    }

    //Hook for the newGame state
    useEffect(() => {
        if (newGame) {
            init();
        }
    }, [newGame]);

    return (
        <>
            <Row className="d-flex justify-content-center text-center mb-5 mt-5 ">
                <NumberSelector index={0} currGuesses={guessNumbers} setGuess={setGuessNumbers}/>
                <NumberSelector index={1} currGuesses={guessNumbers} setGuess={setGuessNumbers}/>
                <NumberSelector index={2} currGuesses={guessNumbers} setGuess={setGuessNumbers}/>
                <NumberSelector index={3} currGuesses={guessNumbers} setGuess={setGuessNumbers}/>
            </Row>
            <Row className="d-flex justify-content-center text-center mb-5 mt-5">
                <CheckGuessButton actualNumbers={actualNumbers}
                                  currGuesses={guessNumbers}
                                  setMsg={setUserMessage}
                                  cowsAndBulls={cowsAndBulls}
                                  setCowsAndBulls={setCowsAndBulls}
                                  setInWin={setInWin}
                                  setInGame={setInGame}
                                  setScore={setScore}
                />
            </Row>
            <Row className="d-flex justify-content-center text-center mb-5 mt-5">
                <UserMessages userMessage={userMessage} variant={"warning"}/>
            </Row>
            <Row className="d-flex justify-content-center text-center mb-5 mt-5">
                <GuessingTable cowsAndBulls={cowsAndBulls}/>
            </Row>

        </>
    );
}

export default Game;
