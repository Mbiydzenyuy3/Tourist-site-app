// import "./Button.css";

export function Button({ onClick, label, style = "primary" }){
  return (
    <button className={`button ${style}`} onClick={onClick}>
      {label}
    </button>
  );
};
