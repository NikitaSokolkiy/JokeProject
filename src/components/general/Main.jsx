import MainStyle from '../../assets/css/main.module.css'
import JokesBlock from "../jokes/JokesBlock";

export default function Main(){
    return(
        <div className={MainStyle.main}>
            <JokesBlock/>
        </div>
    )
}