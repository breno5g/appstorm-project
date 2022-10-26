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
  transition: box-shadow 0.2s;
  
  cursor: pointer;

  gap: 0.5rem;

  &:hover {
    box-shadow: 0 0 10px 10px #00000040;
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 0.5rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem
`;