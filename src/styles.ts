import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const DivContainer = styled.div`
  background-color: #4a5568;
  border-radius: 10px;
  color: white;
  padding: 20px;
  margin: 20px;
  width: 350px;

  button {
    padding: 10px;
    margin-top: 20px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 10px;
    border: none;
  }
`;

export const UlContainer = styled.ul`
  background-color: #4a5568;
  border-radius: 10px;
  color: white;
  padding: 20px;
  margin: 20px;
  width: 350px;
  list-style: none;
`;
