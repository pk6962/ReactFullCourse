import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

const SubChildCompmonent = () => {
  const data = useContext(UserContext);
  console.log(data)

  const { firstName, lastName, email } = data;

  return (
    <div>
      <h3>Sub child component</h3>
      <div>firstName:{firstName}</div>
      <div>lastname:{lastName}</div>
      <div>email:{email}</div>
    </div>
  );
};

export default SubChildCompmonent;