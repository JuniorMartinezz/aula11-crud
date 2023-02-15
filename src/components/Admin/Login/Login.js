import React from "react";
import { useForm } from "react-hook-form";
import Api from "../../Api";
import { setToken } from "../../../Auth";
import { useNavigate } from "react-router-dom";
import { StyledButton, StyledLogin } from "./style-login";

function Login(){
    const{handleSubmit, register} = useForm();
    const navigate = useNavigate();

    const onSubmit = data =>{
        Api.post('/user/login',{
            userName: data.userName,
            password: data.password
        })
        .then((response)=>{
            if(response.data.access === 'true'){
                setToken(response.data.token);
                navigate('/');
            }else if(data.userName != response.userName || data.password != response.password){
                document.querySelector('.responseLogin').innerHTML = '<p>Dados inválidos, tente novamente!</p>'
            }
        })

    }

    return (
        <StyledLogin>
            <div className="block">
                <h1>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-floating" id="inputLogin">
                        <input 
                            className="form-control"
                            type="text"
                            {...register('userName')}
                        />
                        <label htmlFor="">Usuário</label>
                    </div>
                    <div className="form-floating" id="inputLogin">
                        <input 
                            className="form-control"
                            type="password"
                            {...register('password')}
                        />
                        <label htmlFor="">Senha</label>
                    </div>
                    <StyledButton>
                        <button type="submit" className="btnLogin">Entrar</button>
                    </StyledButton>
                    <div className="responseLogin text-center p-3"></div>
                </form>
            </div>
        </StyledLogin>
    )
}

export default Login;