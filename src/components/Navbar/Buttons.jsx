export default function Button(props) {
  const styleBtn = { background: props.color };
  return (
    <button onClick={props.onClick} className="btnNav" style={styleBtn}>
      {props.texto}
    </button>
  );
}
