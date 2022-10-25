import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background-color: tomato;

  h1 {
    font-size: 1.3rem;
  }

  nav {
    ul {
      width: 9rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      list-style: none;

      li {
        a {
          text-decoration: none;
          color: #000;
        }
      }
    }
  }
`;