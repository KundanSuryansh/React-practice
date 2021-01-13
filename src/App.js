import React, { useState } from "react";
import "./styles.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

export default function App() {
  const [username, setUsername] = useState("Kundan");

  function handleChangeEvent(event) {
    console.log(event.target.value);
    return setUsername(event.target.value);
  }

  return (
    <div className="App">
      <UserInput change={handleChangeEvent} />
      <UserOutput name={username} age="24" />
      <UserOutput name="shreya" age="24" />
    </div>
  );
}
