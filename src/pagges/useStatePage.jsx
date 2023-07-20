import React, {useState} from "react";

export const UseStatePage = () => {

    const [count, setCount] = useState(0);
    return (<> 

        <h2>Bem vindo ao usestatepage </h2>
        <p>{count}</p>
        <button onClick={() => setCount(count - 1)}>Diminuir</button>
        <button onClick={() => setCount(count + 1)}>Diminuir</button>
    </>)
}

export default UseStatePage;