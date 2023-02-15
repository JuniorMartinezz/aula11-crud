import {React, useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Api from "../../../Api";
import { getToken } from "../../../../Auth";
import { Container } from "../../../commons/style-commons";
import { StyledClientUpdate } from "./style-update-client";

function ClientUpdate(){
    let {idClient} = useParams();
    const [client, setClient] = useState([]);
    const {handleSubmit, register, reset} = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        Api.get(`/client/${idClient}`, 
            {
                params: {},
                headers: {
                    Authorization: "Bearer " + getToken()
                }
            }
        )
        .then ((response) => {
            setClient(response.data);
            reset(response.data);
        })
    }, [idClient, reset]);

    const onSubmit = (data) => {
        Api.put(`/client/${idClient}`, 
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
        .finally(() => {
            navigate('/admin/clientList');
        })
    }

    return(
        <StyledClientUpdate>
            <Container>
                <div className="block">
                    <h1>Alterar Cliente</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group form-floating">
                            <input 
                                className="form-control"
                                type="text"
                                {...register('name')}
                                defaultValue={client.name}
                                required
                            />
                            <label className="form-label" htmlFor="">Nome</label>
                        </div>
                        <div className="form-group form-floating">
                            <input 
                                className="form-control"
                                type="email"
                                {...register('email')}
                                defaultValue={client.email}
                                required
                            />
                            <label className="form-label" htmlFor="">Email</label>
                        </div>
                        <div className="form-group form-floating">
                            <input 
                                className="form-control"
                                type="tel" 
                                pattern="[+][0-9]{4}[9][0-9]{8}" 
                                {...register('phone')}
                                defaultValue={client.phone}
                                required
                            />
                            <label className="form-label" htmlFor="">Telefone</label>
                        </div>
                        <div className="form-group form-floating">
                            <input 
                                className="form-control"
                                type="text"
                                {...register('address')}
                                defaultValue={client.address}
                                required
                            />
                            <label className="form-label" htmlFor="">Endereço</label>
                        </div>
                        <button type="submit" className="">Salvar</button>
                    </form>
                </div>
            </Container>
        </StyledClientUpdate>
    )
}

export default ClientUpdate;