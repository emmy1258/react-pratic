import { useEffect, useState } from "react";

function Card() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  const [showingCadr, setShowingCadr] = useState(false);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div className="card">
        <label htmlFor="">Your name: </label>
        <input
          type="text"
          onChange={(e) => {
            handleChangeName(e);
          }}
        />{" "}
        <br />
        <label htmlFor="">Your Age: </label>
        <input
          type="number"
          onChange={(e) => {
            handleChangeAge(e);
          }}
        />{" "}
        <br />
        <label htmlFor="">Your Email</label>
        <input
          type="email"
          onChange={(e) => {
            handleChangeEmail(e);
          }}
        />
        <button onClick={() => setShowingCadr(true)}>Send</button>
      </div>
      {showingCadr && (
        <div className="result">
          <label htmlFor="">Your Name is: {name}</label>
          <label htmlFor="">Your Age is: {age}</label>
          <label htmlFor="">Your Email is: {email}</label>
        </div>
      )}
    </>
  );
}

export default Card;
