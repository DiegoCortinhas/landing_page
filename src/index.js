import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


//ReactDom pega o codigo JS e insere na DOM da pagina.
//Insere o elemento APP dentro da div root de index.html