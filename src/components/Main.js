import { Tasks } from "./Tasks";
import { CodeInput } from "./CodeInput";
import { CodeOutput } from "./CodeOutput";
import './my-style.css';


export function Main() {

  return (
    <div className="main-container">
      <div className="container-input">
        <Tasks />
        <CodeInput />
      </div>
      <div className="container-output">
        <CodeOutput />
      </div>
    </div>
  )
}