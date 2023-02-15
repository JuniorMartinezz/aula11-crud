import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { isAdmin } from "../../Auth";
import Api from "../Api";
import { StyledContact, StyledButton } from "./style-contact";

function Contact() {
    const {handleSubmit, register} = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) =>{
        Api.post('/contact',{
            name: data.name,
            email: data.email,
            message: data.message
        })
        .then((response)=>{
            console.log(response); 
        })
        .catch((errors) => {
            console.log(errors);
        })
        .finally(()=>{
            isAdmin() ?
                navigate('/admin/contactView') 
            :
                navigate('/user/login');            
        })
    }

    return (
        <StyledContact>
            <h1>Página Contato</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <div className="form-floating">
                    <input
                        className="form-control"
                        name="inputName" 
                        type="text"
                        {...register('name')}
                    />
                    <label htmlFor="inputName">Nome</label>
                </div>
                <div className="form-floating ">
                    <input 
                        className="form-control"
                        name="email"
                        type="email"
                        {...register('email')}
                    />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="form-floating">
                    <textarea
                        className="form-control"
                        name="message"
                        type="text"
                        rowsPan={10}
                        {...register('message')}
                    ></textarea>
                    <label htmlFor="message">Mensagem</label>
                </div>
                <StyledButton type="submit">Enviar</StyledButton>
            </form>
        </StyledContact>
    )
}

export default Contact;