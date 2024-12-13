import { useState, useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import './my-style.css';



export function CodeInput() {
  const [value, setValue] = useState("console.log('hello world!');");

  const onChange = useCallback((val, viewUpdate) => {
    setValue(val);
  }, []);

  return (
    <div className="field-code">
      <div className="dropdown-container">
        <select>
          <option defaultValue='JavaScript'>JavaScript</option>
          <option>Python</option>
        </select>
      </div>
      <CodeMirror
        value={value}
        height="400px"
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
        theme={vscodeDark}
        className="editor-container"
      />
      <div className="btn-container">
        <button>RUN!</button>
      </div>
    </div>
  )
}