import React from 'react';
import styleJoke from "../../assets/css/Joke-answerJoke.module.css";

const FullJoke = ({joke}) => {
    return (
        <li className={styleJoke.Joke}>
            <p className={styleJoke.answer}> {joke.joke} </p>
        </li>
    );
};

export default FullJoke;