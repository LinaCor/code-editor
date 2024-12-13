import './my-style.css';


export function CodeOutput({ responseApi }) {
  const parseRes = JSON.stringify(responseApi);

  return (
    <textarea readOnly className="field-otput" value={parseRes ? parseRes : 'Press RUN'}>
    </textarea>
  )
};