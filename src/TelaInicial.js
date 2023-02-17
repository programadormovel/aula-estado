import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './App.css';

const TelaInicial = () => {

    const [texto, setTexto] = useState('Texto Inicial');

    return(
        <div className={"App"}>
            <h2>Tela Inicial</h2>
            <p>Aula de Gerenciamento de Estado</p>
            <p>{texto}</p>
            <button onClick={()=>{setTexto('Texto Alterado')}} >
                CLIQUE AQUI
            </button>
        </div>
    )
}

export default TelaInicial;