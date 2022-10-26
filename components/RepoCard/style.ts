import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 200px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 0 10px 5px #00000040;
  justify-content: space-between;

  p {
    // https://kiranworkspace.com/ellipsis-to-multiline-text-in-css/
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
  }
`;