import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Article from "./Components/Product";
import Name from "./Components/Name";
import Price from "./Components/Price";
import Desc from "./Components/Description";
import Img from "./Components/Image";

const App = () => {
  return (
    <div className="App">
      <Name name={Article.name} />
      <Price Price={Article.price} />
      <Desc Description={Article.description} />
      <Img path={Article.path} />
    </div>
  );
};

export default App;
