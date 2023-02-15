import React from "react";
import Api from "../../../Api";
import { useState, useEffect } from "react";
import { getToken } from "../../../../Auth";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../../commons/SearchBar";
import { StyledContactView } from "./style-contact-view";
import { Container } from "../../../commons/style-commons";

function ContactView(){

    const [contacts, setContacts] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        Api.get('/contact', 
            {
                params: {},
                headers: {
                    Authorization: "Bearer " + getToken()
                }
            }
        )
            .then ((response) => {
                setContacts(response.data);
            })
    }, []);

    const handleClickResponse = (idContact) => {
        navigate(`/admin/contact/response/${idContact}`)
    }

    const handleClickDelete = (idContact) => {
        Api.delete(`/contact/${idContact}`)
        .finally(() => {
            window.location.reload(false);
        })
    }

    return(
        <StyledContactView>
            <div id="block">
                <div id="titleContactList">
                    <h1>Lista de Contatos</h1>
                </div>
                <div id="searchBarRight">
                    <SearchBar path='/contact/search' handle={(data) => {setContacts(data)}}/>
                </div>
            </div>
            <Container className="table-responsive">
                <div className="block">
                    <table className="table table-stripped">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Mensagem</th>
                                <th>Status</th>
                                <th colSpan="2">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact, index) =>
                                <tr key={index}>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.message}</td>
                                    <td 
                                        dangerouslySetInnerHTML={
                                            {
                                                __html:(contact.status === '1') ? 
                                                    '<span class="badge bg-success">Respondido</span>' 
                                                : 
                                                    '<span class="badge bg-warning">Aberto</span>'
                                            }
                                        }
                                    >                                
                                    </td>
                                    <td>
                                        <button 
                                            className="btnUpdate"
                                            onClick={() => handleClickResponse(contact.idContact)}
                                        >
                                            Responder
                                        </button>
                                    </td>
                                    <td>
                                        <button 
                                            className="btnDelete"
                                            onClick={() => handleClickDelete(contact.idContact)}
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
        </StyledContactView>
    )
}

export default ContactView;