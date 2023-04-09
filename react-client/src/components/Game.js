import {Col, Container, Row} from "react-bootstrap";
import {useState} from "react";
import GameButtons from "./GameButtons";
import NumberSelector from "./NumberSelector";
import UserMessages from "./UserMessages";


function Game() {
    const NUMBER_OF_DIGITS = 4;
    const [actualNumbers, setActualNumbers] = useState(() => generateRandom());
    const [guessNumbers, setGuessNumbers] = useState(['guess', 'guess...', 'guess...', 'guess...']);
    const [userMessage, setUserMessage] = useState("Your history of guesses will appear below:");


    function generateRandom() {
        // Generate a random array of numbers
        let temp = [...Array(4)].map(() => Math.floor(Math.random() * 10));
        console.log(temp);
        return temp;
    }

    function init() {
        setActualNumbers(generateRandom());
        setGuessNumbers(['guess', 'guess...', 'guess...', 'guess...']);
    }

    return (
        <>
            <Container>
                <Row className="d-flex justify-content-center text-center mb-3">
                    <GameButtons currGuesses={guessNumbers} setMsg={setUserMessage} init={init}/>
                </Row>
                <Row className="d-flex justify-content-center text-center mb-3">
                    <NumberSelector index={0} currGuesses={guessNumbers} setGuess={setGuessNumbers}/>
                    <NumberSelector index={1} currGuesses={guessNumbers} setGuess={setGuessNumbers}/>
                    <NumberSelector index={2} currGuesses={guessNumbers} setGuess={setGuessNumbers}/>
                    <NumberSelector index={3} currGuesses={guessNumbers} setGuess={setGuessNumbers}/>
                </Row>
                <Row className="d-flex justify-content-center text-center mb-3">
                    <UserMessages userMessage={userMessage}/>
                </Row>
            </Container>
        </>
    );
}

export default Game;
