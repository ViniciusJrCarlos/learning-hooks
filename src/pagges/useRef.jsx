import React, {useRef, useState} from "react";

export const UseRefPage = () => {

    const [message, setMessage] = useState('');
    const inputRef = useRef();
    return(

        <>

        <h2>Bem Vindo ao useRefpage </h2>
        <input ref={inputRef} placeholder="Digite sua mensagem" value={message} onChange={(event) => setMessage(event.target.value)} />
        <button onClick={() => {
            console.log(inputRef.current.focus())
            setMessage('');
        }}>Enviar</button>
       
        </>
    

    )

}

export default UseRefPage;