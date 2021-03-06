import React, { useState } from "react";
import Card from "./components/Card";
import Input from "./components/Input";
import { Container, DivContainer, UlContainer } from "./styles";

interface User {
  name: string;
  age: number;
  hobby: string;
}

function App() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [hobby, setHobby] = useState<string>("");
  const [users, setUsers] = useState<User[]>([] as User[]);

  const handleSubmit = () => {
    const user = { name, age, hobby };

    setUsers([...users, user]);
  };

  console.log("users", users);

  return (
    <Container>
      <DivContainer>
        <Input
          placeholder="Insira seu nome"
          label="Nome"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          placeholder="Qual a sua idade"
          label="Idade"
          onChange={(e) => {
            setAge(Number(e.target.value));
          }}
        />
        <Input
          placeholder="Qual o seu hobby"
          label="Hobby"
          onChange={(e) => {
            setHobby(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>Enviar</button>
      </DivContainer>

      {users.length > 0 && (
        <UlContainer>
          {users.map((user) => (
            <li key={user.name}>
              <Card user={user} />
            </li>
          ))}
        </UlContainer>
      )}
    </Container>
  );
}

export default App;
