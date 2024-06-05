import React from 'react';
import styleJoke from "../../assets/css/Joke-answerJoke.module.css";

const TwoPartsJoke = ({joke}) => {
    return (
        <li className={styleJoke.Joke}>
            <p className={styleJoke.question}> {joke.setup} </p>
            -
            <p className={styleJoke.answer}> {joke.delivery} </p>
        </li>
    );
};

export default TwoPartsJoke;