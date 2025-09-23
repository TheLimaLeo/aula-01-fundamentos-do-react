const Description = (props) => {
    return (
        <>
        <div>
            <p>Cidade: {props.city} </p>
            <p>Idade: {props.age} anos</p>
            <p>E-mail: {props.email}</p>
        </div>
        </>
    );
};

export default Description