import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import { UserContext } from "../contexts/userContext";



export const HomePage = () => {

    const user = useContext(UserContext);

    return (<>
    
   
            <h1>Bem Vindo ao hooks novamente!, {user.userName}</h1>
            <Link to="/useState"> Vá para o usestate</Link>
            <br/>
            <Link to="/useEffect"> Vá para o useEffect</Link>
            <br />
            <Link to="/useCallback"> Vá para o usecallback</Link>
            <br />
            <Link to="/useMemo"> Vá para o useMemo</Link>
            <br />
            <Link to="/useRef"> Vá para o useRef</Link>

        </>
        )

}

export default HomePage;