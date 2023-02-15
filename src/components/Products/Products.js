import React from "react";
import Api from "../Api";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import {StyledProducts } from "./style-products";
import { Container } from "../commons/style-commons";

function Products() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories([
      { catId: "1", name: "Categoria 1" },
      { catId: "2", name: "Categoria 2" },
      { catId: "3", name: "Categoria 3" },
    ]);
  }, []);

  return (
    <Container>
      <StyledProducts className="block">
        <h1>Página de produtos</h1>
        <ul>
          {categories.map((category) => (
            <li key={category.catId} className="nav-item">
              <Link to={category.catId} className="nav-link">
                <p className="cat-button">{category.name}</p>
              </Link>
            </li>
          ))}
        </ul>

        <Routes>
          <Route path="/" element={<AllCategories />} />
          <Route path=":id" element={<Category />} />
        </Routes>
      </StyledProducts>
    </Container>
  );
}

export default Products;

function AllCategories() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Api.get("/product").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const [categories, setCategories] = useState();

  useEffect(() => {
    Api.get("/categories").then((response) => {
      setCategories(response.data);
    });
  }, [categories]);

  return (
    <Container>
      <h1>Todos os produtos</h1>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}

function Category() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Api.get(`/product/category/${id}`).then((response) => {
      setProducts(response.data);
    });
  }, [id]);

  return (
    <Container>
      <h1>Produtos da categoria {id}</h1>
      <div className="table-responsive">
        <table className="table" id="table-products">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
