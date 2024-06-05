import uxHeader from '../../assets/css/header.module.css'

export default function Header(){
    return(
        <div>
            <header className={uxHeader.header}>
                <div className={uxHeader.header_wrapper}>
                    <h2>Joke Page</h2>
                </div>
            </header>
        </div>
    )
}