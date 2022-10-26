import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 9fr;
  gap: 1rem;
  padding: 1rem;
`;

export const Container = styled.section`
`;

export const Aside = styled.aside`
  display: grid;
  grid-template-columns: repeat(3, 0.8fr);
  row-gap: 1.5rem;
  height: calc(100vh - 75px);
  padding: 0.5rem 1rem;
  overflow-y: scroll;
`;