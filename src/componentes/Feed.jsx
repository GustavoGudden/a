import React from "react";
import "./feed.css";
import Pesquisa from "./Pesquisa";
import Result from "./result";
import imagen from "./imagens/aa.png";

const feed = () => {
  return (
    <div className="div_feed">
      <div className="title">
        <img src={imagen} alt="teste" className="logo" />
        <h1>Super filmes</h1>
      </div>
      <Pesquisa />
      <div className="filmes">
        <Result />
      </div>
    </div>
  );
};

export default feed;
