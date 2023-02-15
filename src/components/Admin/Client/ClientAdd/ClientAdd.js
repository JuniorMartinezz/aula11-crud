import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../../../Auth";
import Api from "../../../Api";
import { Container } from "../../../commons/style-commons";
import { StyledClientAdd } from "./style-client-add";

function ClientAdd(){
    const navigate = useNavigate();

    const {handleSubmit, register} = useForm();

    const onSubmit = (data) => {
        Api.post('/client', 
            {   
                name : data.name,
                phone : data.phone,
                email : data.email,
                address : data.address
            },
            {
                headers:{
                    Authorization: 'Bearer ' + getToken()
                }
            }
        )
        .then(() => {
            navigate('/admin/clientList');
        })
    }

    return(
        <StyledClientAdd>
            <Container>
                <div className="block">
                    <h1>Adicionar Cliente</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label className="form-label" htmlFor="">Nome</label>
                            <input 
                                className="form-control"
                                type="text"
                                {...register('name')}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="">Email</label>
                            <input 
                                className="form-control"
                                type="email"
                                {...register('email')}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="">Telefone</label>
                            <input 
                                className="form-control"
                                type="tel" 
                                pattern="[+][0-9]{4}[9][0-9]{8}" 
                                {...register('phone')}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="">Endereço</label>
                            <input 
                                className="form-control"
                                type="text"
                                {...register('address')}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Salvar</button>
                    </form>
                </div>
            </Container>
        </StyledClientAdd>
    )
}

export default ClientAdd;