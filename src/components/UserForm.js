import { useState } from "react";
 
const UserForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    //criando a função que irá receber os dados do formulario e enviar para o back-end
    const handleSubmit = (event) => {
        event.preventDefault()

        console.log(name, email);

    };
 
    return(
        <>
                <h1>Formulário de cadastro: </h1>
                <br/>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Digite o seu nome:" value={name} onChange={(e) => setName(e.target.value)}/>
                    <br/>
                    <input type="email" value={email}/>
                    <button type="submit">Cadastrar</button>
                </form>
                <br/>
                {name}
                <br/>
                {email}
        </>
    )
}
 
export default UserForm;
 