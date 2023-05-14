import react from "react";

const ButtonPrimary = ({ name }) => {
  const hello = () => {
    console.log("Hello World");
  };
  return (
    <button className="button__primary" onClick={() => hello()}>
      {name}
    </button>
  );
};

export default ButtonPrimary;
