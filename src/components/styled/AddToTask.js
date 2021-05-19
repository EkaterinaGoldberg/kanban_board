import styled from "styled-components";

const BACK = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(51, 51, 51, 0.326);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & textarea {
    width: 100%;
    outline: none;
    border: transparent;
    border-radius: 3px;
    padding: 10px;
    resize: none;
    box-sizing: border-box;
    font-size: 15px;
    margin-bottom: 10px;
  }
`;

const CONTAINER = styled.div`
  width: 50%;
  padding: 20px;
  background-color: #ccc;
`;

const SAVE = styled.button`
  background-color: blue;
  border: transparent;
  font-size: 15px;
  color: #fff;
  padding: 10px 20px;
  border-radius: 3px;
  outline: none;

  :hover {
    cursor: pointer;
  }
`;

const CLOSE = styled.button`
  border: transparent;
  background-color: transparent;
  padding: 0px 15px;
  font-size: 20px;

  :hover {
    cursor: pointer;
  }
`;

const WRAPPER = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export { BACK, CONTAINER, SAVE, CLOSE, WRAPPER };
