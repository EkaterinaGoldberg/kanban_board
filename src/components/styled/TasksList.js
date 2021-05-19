import styled from "styled-components";

const TASKS_LIST = styled.ul`
  list-style: none;
  width: 100%;
  box-sizing: border-box;
  padding: 0;

  & li {
    background-color: #fff;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    word-wrap: break-word;
  }
`;
export { TASKS_LIST };
