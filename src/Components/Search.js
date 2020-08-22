import React, { useState } from "react";
import {
  Input,
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const Search = () => {
  const baseUrl = "https://www.omdbapi.com/?apikey=86ff7111";
  const [isKetik, setIsKetik] = useState(false);
  const [input, setInput] = useState("");

  const RequestAPI = async () => {
    const req = await fetch(`${baseUrl}&s=${input}`);
    const res = await req.json();
    console.log(res);
    const target = document.getElementById("hasil");
    if (res.Search !== undefined) {
      res.Search.map((item) => {
        target.innerHTML += `<div class="card mt-4">
  <img src="${item.Poster}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.Title}</h5>
    <p class="card-text">${item.Year}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;
      });
    } else {
      return "Loading...";
    }
  };

  return (
    <>
      <Container>
        <Input
          type="text"
          name="cari"
          id="cari"
          className="mt-4"
          placeholder="Cari Film"
          onKeyUp={(e) => {
            setInput(e.target.value);
            setIsKetik(true);
            RequestAPI();
          }}
        />
        {isKetik !== false ? <section id="hasil"></section> : null}
      </Container>
    </>
  );
};

export default Search;
