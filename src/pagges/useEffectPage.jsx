import React, {useState, useEffect} from "react";

export const UseEffectPage = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    UseEffectPage(() => {

        console.log(name);


    }, [name]);

    return(

        <>

        <h2>Bem Vindo ao usereffectpage </h2>
        <input placeholder="nome" value={name} onChange={(event) => setName(event.target.value)} />
        <input placeholder="senha" value={password} onChange={(event) => setPassword(event.target.value)} />
        </>
    

    )

}

export default UseEffectPage;