import styled from "styled-components";

const ADD_CONTAINER = styled.div`
  width: 100%;

  & textarea {
    width: 100%;
    outline: none;
    border: transparent;
    border-radius: 5px;
    padding: 10px;
    resize: none;
    box-sizing: border-box;
    font-size: 15px;
  }
`;

const BUTTON_CONTAINER = styled.div`
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
`;

const ADD_CARD_BUTTON = styled.button`
  width: 60%;
  background-color: blue;
  border: transparent;
  font-size: 15px;
  color: #fff;
  padding: 0;
  border-radius: 5px;
  outline: none;

  :hover {
    cursor: pointer;
  }
`;

const CANCEL = styled.button`
  width: 30%;
  background-color: transparent;
  border: transparent;
  font-size: 15px;
  padding: 0;
  color: #777;
  border-radius: 5px;
  outline: none;

  :hover {
    cursor: pointer;
    background-color: #ddd;
  }
`;

export { ADD_CONTAINER, BUTTON_CONTAINER, ADD_CARD_BUTTON, CANCEL };
