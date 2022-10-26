import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  gap: 1rem;

  input {
    width: 400px;
    padding: 1rem;
    font-size: 1.2rem;
    border-radius: 0.25rem;
    border: none;
    box-shadow: 1px 2px #00000030;
  }

  button {
    width: 100px;
    padding: 1rem;
    font-size: 20px;
    font-weight: 600;
    border-radius: 0.25rem;
    border: none;
    background-color: #349beb;
    color: #f5f5f5;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.05);
    }
  }
`;