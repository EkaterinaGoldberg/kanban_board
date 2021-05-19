import styled from "styled-components";

const BOARDS_CONTAINER = styled.div`
  width: 100wv;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const BOARD = styled.div`
  width: 30%;
  padding: 15px;
  background-color: #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;

  & h1 {
    font-weight: lighter;
  }
`;

const ADD = styled.button`
  width: 100%;
  padding: 5px 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  outline: none;
  border: transparent;
  border-radius: 5px;
  background-color: transparent;

  :hover {
    cursor: pointer;
    background-color: #ddd;
  }

  & p {
    color: #777;
    font-size: 15px;
  }

  & img {
    margin-right: 10px;
  }
`;

export { BOARDS_CONTAINER, BOARD, ADD };
