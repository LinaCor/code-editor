import { useState, useCallback, useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { saveLocalStorage, getLocalStorage } from '../local-storage';
import './my-style.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectValue } from '../store/store';


export function CodeInput() {
  const currentLanguage = useSelector(state => state);
  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(getLocalStorage());
  }, [])

  const onChange = useCallback((val, viewUpdate) => {
    setValue(val);
    saveLocalStorage(val);
  }, []);

  const handleLang = (evt) => {
    dispatch(selectValue(evt.target.value));
  };

  return (
    <div className="field-code">
      <div className="dropdown-container">
        <select onChange={handleLang}>
          <option>JavaScript</option>
          <option>Python</option>
        </select>
      </div>
      <CodeMirror
        value={value}
        height="100%"
        extensions={[currentLanguage({ jsx: true })]}
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