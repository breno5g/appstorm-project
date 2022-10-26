import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  box-shadow: 0 0 10px 5px #00000040;
  border-radius: 0.25rem;
  margin-top: 0.5rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.25rem;
  }
`;

export const FollowContainer = styled.div`
  display: flex;
  gap: 10px;
`;