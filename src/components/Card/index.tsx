import React from "react";

interface CardProps {
  user: User;
}

interface User {
  name: string;
  age: number;
  hobby: string;
}

const Card = ({ user }: CardProps) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.age}</p>
      <p>{user.hobby}</p>
    </div>
  );
};

export default Card;
