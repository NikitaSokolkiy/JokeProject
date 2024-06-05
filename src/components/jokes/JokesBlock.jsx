import GetJokeButton from "../UI-UX/GetJokeButton";
import {useState} from "react";
import Spinner from "../UI-UX/Spinner";
import styleJoke from '../../assets/css/Joke-answerJoke.module.css'
import TwoPartsJoke from "./TwoPartsJoke";
import FullJoke from "./FullJoke";

export default function JokesBlock(){
    const [joke, setJoke] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getJoke = async ()=> {
        setLoading(true);
        setError(null)
        try {
            const res = await fetch('https://v2.jokeapi.dev/joke/Any?lang=en');
            const data = await res.json();
            setJoke((joke) => [...joke, data]);
        } catch (error){
            console.log('This is Error: ', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };
    console.log(joke)
    if (error) return <p style={{color: 'red'}}> Error: {error}</p>
    return (
        <div>
            <GetJokeButton getJoke={getJoke}>Получить шутку </GetJokeButton>
            {loading ? <Spinner/> : (joke &&
                <ul>
                    {joke.reverse().map((singleJoke, index) => (
                        singleJoke.type === 'twopart'
                            ? ( <TwoPartsJoke joke={singleJoke} key={index} /> )
                            : ( <FullJoke joke={singleJoke} key={index} /> )
                    ))}
                </ul>)}
        </div>
    )
}