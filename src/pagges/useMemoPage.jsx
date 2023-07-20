import React, {useState, useMemo} from "react";

export const UseMemoPage = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const validatePassword = useMemo(() => {return <ValidatePassword password={password}/>}, [password]);

    return(

        <>

        <h2>Bem Vindo ao UseMemoPage </h2>
        <input placeholder="nome" value={name} onChange={(event) => setName(event.target.value)} /> 
        <br />
        <input placeholder="senha" value={password} onChange={(event) => setPassword(event.target.value)} />
        <br />
        {validatePassword}
        {/*<ValidatePassword password={password} />*/}
        <br />
        </>

       
    

    )

}

const ValidatePassword = ({password}) => {

    if(!password.length) return <span>A senha deve ser preenchida!</span>
    if(password.length < 5) return <span> A senha deve ter mais que 5 caracteres</span>
    return  <span>Senha Aprovada!</span>

}

export default UseMemoPage;