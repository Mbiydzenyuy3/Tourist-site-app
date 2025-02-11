// import "./Button.css";

export default function ButtonSignIn(input) {
  return (
    <>
      <div className="sign-button-holder">
        <button type="Rounded" className="sign-in" >
          SignIn
        </button>
      </div>
    </>
  );
}

export function Button({ onClick, label, style = "primary" }){
  return (
    <button className={`button ${style}`} onClick={onClick}>
      {label}
    </button>
  );
};
