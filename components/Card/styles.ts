import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 250px;
  border-radius: 0.25rem;
  background-color: #f5f5f5;

  box-shadow: 0 0 10px 5px #00000040;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  
  gap: 0.5rem;

  img {
    width: 150px;
    height: 150px;
    border-radius: 0.5rem;
  }

  button {
    background-color: transparent;
    border: none;
    font-size: 1.5rem;
    position: absolute;
    margin: auto;
    top: 20px;
    right: 10px;
    cursor: pointer;

    &:hover {
      scale: 1.1;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem
`;