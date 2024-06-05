import {ClockLoader} from "react-spinners";

export default function Spinner({loading}){
    return(
        <div>
            <ClockLoader
                color={'blue'}
                loading={loading}
                size={150}
            />
        </div>
    )
}