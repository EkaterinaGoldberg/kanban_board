//React and Redux libraries
import { TextareaAutosize } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
//Redux component
import { changeInProcess, changeInCheck, changeDone } from "../redux/tasks";
//Styled components
import { BACK, CLOSE, CONTAINER, SAVE, WRAPPER } from "./styled/AddToTask";

function Task(props) {
    
  const [title, setTitle] = useState(props.task.title);
  const [task, setTask] = useState(props.task.task);

  const dispatch = useDispatch();

  return (
    <BACK>
      <CONTAINER>
        <WRAPPER>
          <TextareaAutosize
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></TextareaAutosize>
          <CLOSE onClick={() => props.history.push("/")}>X</CLOSE>
        </WRAPPER>
        <TextareaAutosize
          placeholder="Описание"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          rowsMin={5}
        ></TextareaAutosize>
        <SAVE
          onClick={() => {
            switch (props.board.name) {
              case "inProcess":
                dispatch(
                  changeInProcess({
                    title: title,
                    task: task,
                    index: props.index,
                  })
                );
                props.history.push("/");
                break;
              case "inCheck":
                dispatch(
                  changeInCheck({
                    title: title,
                    task: task,
                    index: props.index,
                  })
                );
                props.history.push("/");
                break;
              case "done":
                dispatch(
                  changeDone({ title: title, task: task, index: props.index })
                );
                props.history.push("/");
                break;
              default:
                props.history.push("/");
                break;
            }
          }}
        >
          Сохранить
        </SAVE>
      </CONTAINER>
    </BACK>
  );
}

export default withRouter(Task);
