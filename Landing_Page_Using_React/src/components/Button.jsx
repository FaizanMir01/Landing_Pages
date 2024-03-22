import "./button.css";

function Button(props) {
  return (
    <>
      <button className={props.cName}>{props.name}</button>
    </>
  );
}
export default Button;
