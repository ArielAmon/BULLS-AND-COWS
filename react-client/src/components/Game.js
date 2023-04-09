import {Container, Row} from "react-bootstrap";
import {useState}       from "react";
import GameButtons      from "./GameButtons";
import NumberSelector   from "./NumberSelector";
import UserMessages     from "./UserMessages";


function Game() {
    const NUMBER_OF_DIGITS = 4;
    const [actualNumbers, setActualNumbers] = useState(() => generateRandom());
    const [guessNumbers, setGuessNumbers] = useState([undefined, undefined, undefined, undefined]);
    const [userMessage, setUserMessage] = useState("Your history of guesses will appear below:");

    function generateRandom() {

        let randomNumber = Math.floor(Math.random() * 9000) + 1000;
        let digitsArray = randomNumber.toString().split("").map(digit => parseInt(digit));
        console.log(digitsArray);
        return digitsArray;
    }

    return (
        <>
            <Container>
                <Row className="d-flex justify-content-center text-center mb-3">
                    <GameButtons/>
                </Row>
                <Row className="d-flex justify-content-center text-center mb-3">
                    <NumberSelector index={0} currGuesses={guessNumbers} setGuess={setGuessNumbers}/>
                    <NumberSelector index={1} currGuesses={guessNumbers} setGuess={setGuessNumbers}/>
                    <NumberSelector index={2} currGuesses={guessNumbers} setGuess={setGuessNumbers}/>
                    <NumberSelector index={3} currGuesses={guessNumbers} setGuess={setGuessNumbers}/>
                </Row>
                <Row className="d-flex justify-content-center text-center mb-3">
                    <UserMessages userMessage={userMessage} />
                </Row>
            </Container>
        </>

    );
}

export default Game