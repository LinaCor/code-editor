import { Tasks } from "./Tasks";
import { CodeInput } from "./CodeInput";
import { CodeOutput } from "./CodeOutput";
import './my-style.css';
import { useState } from "react";

export function Main() {
  const [responseApi, setResponseApi] = useState();

  return (
    <div className="main-container">
      <div className="container-input">
        <Tasks />
        <CodeInput setResponseApi={setResponseApi} />
      </div>
      <div className="container-output">
        <CodeOutput responseApi={responseApi} />
      </div>
    </div>
  )
};