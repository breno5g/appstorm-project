import styled from "styled-components";

export const Container = styled.div`
  width: 230px;
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

  h1 {
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 150px;
    margin: 0 auto;
    text-align: center;
    overflow: hidden;
  }

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