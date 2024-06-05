import uiButton from '../../assets/css/button.module.css'

export default function GetJokeButton({children, getJoke}){
    return(
            <button className={uiButton.main_button} onClick={getJoke}>{children}</button>
    )
}