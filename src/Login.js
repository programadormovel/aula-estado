import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './App.css';
import entrar from './entrar.png'

const Login = () => {
    let navigate = useNavigate();

    const entrada = () => {
        navigate("/inicial");
        window.location.reload();
    }

    return (
        <div className={"App"}>
            <h3>Tela de Login</h3>
            <form>
                <input type={'text'} 
                    placeholder={'login'} />
                <input type={'text'}
                    placeholder={'senha'} />
               <Link to={"/inicial"}>
                    <img src={entrar}
                        width={"50px"} 
                        height={"50px"} />
                </Link>
                
            </form>
           
        </div>
    )
}
export default Login;