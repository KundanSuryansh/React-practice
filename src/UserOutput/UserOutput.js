import React from "react";

function UserOutput(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.age}</p>
    </div>
  );
}

export default UserOutput;
