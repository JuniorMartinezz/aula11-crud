import React from "react";
import { useState, useEffect } from "react";
import Api from "../../../Api";
import { getToken } from "../../../../Auth";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../../commons/SearchBar";
import { StyledClientList } from "./style-client-list";
import { Container } from "../../../commons/style-commons";

function ClientList(){

    const [clients, setClients] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        Api.get('/client', 
            {
                params: {},
                headers: {
                    Authorization: "Bearer " + getToken()
                }
            }
        )
        .then((response) => {
            setClients(response.data);
        })
    }, []);

    const handleClickAdd = () => {
        navigate('/admin/clientAdd')
    }

    const handleClickUpdate = (idClient) => {
        navigate(`/admin/clientUpdate/${idClient}`)
    }

    const handleClickDelete = (idClient) => {
        Api.delete(`/client/${idClient}`)
        .finally(() => {
            window.location.reload(false);
        })
    }

    return(
        <StyledClientList>
            <div id="block">
                <div id="titleContactList">
                    <h1>Listagem de Clientes</h1>
                </div>
                <div id="searchBarRight">
                    <SearchBar path='/client/search' handle={(data) => {setClients(data)}}/>
                </div>
            </div>
            
            <button 
                className="addClient"
                onClick={() => handleClickAdd()}
            >
                Novo Cliente
            </button>

            <Container>
                <div className="block table-responsive">
                    <table className="table table-stripped p-3">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Telefone</th>
                                <th>Endereço</th>
                                <th colSpan={2}>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map((client, index)=>
                                <tr key={index}>
                                    <td>{client.name}</td>                            
                                    <td>{client.email}</td>                            
                                    <td>{client.phone}</td>                            
                                    <td>{client.address}</td>                            
                                    <td>
                                        <button 
                                            className="btnUpdate"
                                            onClick={() => handleClickUpdate(client.idClient)}
                                        >
                                            Alterar
                                        </button>
                                    </td>
                                    <td>
                                        <button 
                                            className="btnDelete"
                                            onClick={() => handleClickDelete(client.idClient)}
                                        >
                                            Deletar
                                        </button>
                                    </td>  
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </Container>
        </StyledClientList>
    )
}

export default ClientList;