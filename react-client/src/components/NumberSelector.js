import {Col} from "react-bootstrap";

function NumberSelector(){

    return (
        <Col>
        <label>

            <select className="form-select form-select-lg" aria-label="Guess">
                <option disabled selected>Guess a number...</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </select>
        </label>
        </Col>
    );

}

export default NumberSelector;