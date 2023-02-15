import React from "react";
import { useForm } from "react-hook-form";
import { getToken } from "../../Auth";
import Api from "../Api";
import { StyledButtonSearch, StyledSearchBar } from "./style-commons";

function SearchBar(props){
    const {handleSubmit, register} = useForm();

    const onSubmit = (data) => {
        Api.get(`${props.path}/${data.search}`,
            {
                params:{},
                headers:{
                    Authorization: "Bearer " + getToken()
                }
            }
        )
        .then((response) => {
            props.handle(response.data);
        })
    }

    return(
        <StyledSearchBar>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div id="blockSearch">
                    <div id="inputSearch">
                        <div className="form-floating">
                            <input
                                name="search" 
                                className="form-control" 
                                type="search"
                                {...register('search')} 
                            />
                            <label className="form-label" htmlFor="search">Busca</label>
                        </div>
                    </div>
                    <div id="btnSearch">
                        <StyledButtonSearch>
                            <ion-icon name="search-circle-outline"></ion-icon>    
                        </StyledButtonSearch>
                    </div>
                </div>
            </form>
        </StyledSearchBar>
    )
}

export default SearchBar;