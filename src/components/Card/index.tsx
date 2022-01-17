import React from "react";
import { Container } from "./styles";

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
    <Container>
      <h3>Nome: {user.name}</h3>
      <p>Idade: {user.age}</p>
      <p>Hobby: {user.hobby}</p>
    </Container>
  );
};

export default Card;
