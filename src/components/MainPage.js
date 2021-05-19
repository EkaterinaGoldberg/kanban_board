//React and Redux libraries
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, withRouter } from "react-router";
import { TextareaAutosize } from "@material-ui/core";
import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
//Redux component
import {
  addTaskDone,
  addTaskInCheck,
  addTaskInProcess,
  doneSelector,
  inCheckSelector,
  inProcessSelector,
  setBoardDone,
  setBoardInCheck,
  setBoardInProcess,
  setInAddCheck,
  setInAddDone,
  setInAddProcess,
} from "../redux/tasks";
//Styled component
import { ADD, BOARD, BOARDS_CONTAINER } from "./styled/BoardContainer";
import { TASKS_LIST } from "./styled/TasksList";
import {
  ADD_CARD_BUTTON,
  ADD_CONTAINER,
  BUTTON_CONTAINER,
  CANCEL,
} from "./styled/AddCard";
//React Component
import AddToTask from "./AddToTask";
//Images
import plus from "../img/plus.png";

function MainPage() {
  const inProcess = useSelector(inProcessSelector);
  const inCheck = useSelector(inCheckSelector);
  const done = useSelector(doneSelector);

  const dispatch = useDispatch();

  const [task, setTask] = useState("");
  const [currentTask, setCurrentTask] = useState(null);
  const [currentBoard, setCurrentBoard] = useState({});
  const [currentBoardName, setCurrentBoardName] = useState("");

  const [addedTask, setAddedTask] = useState(null);
  const [changedBoard, setChangedBoard] = useState(null);
  const [index, setIndex] = useState(null);

  function dragOverHandler(e) {
    e.preventDefault();
  }

  function dragStartHandler(board, task, boardName) {
    setCurrentBoard(board);
    setCurrentTask(task);
    setCurrentBoardName(boardName);
  }

  function dropHandter(e, board, boardName) {
    if (e.target.id === "task" || e.target.id === "list") {
      let filteredBoard = [...currentBoard.tasks].filter(
        (a) => currentTask.title !== a.title
      );
      let addedBoard = [...board.tasks, currentTask];
      switch (boardName) {
        case "inProcess":
          dispatch(setBoardInProcess({ board: addedBoard }));
          break;
        case "inCheck":
          dispatch(setBoardInCheck({ board: addedBoard }));
          break;
        case "done":
          dispatch(setBoardDone({ board: addedBoard }));
          break;
        default:
          break;
      }
      switch (currentBoardName) {
        case "inProcess":
          dispatch(setBoardInProcess({ board: filteredBoard }));
          break;
        case "inCheck":
          dispatch(setBoardInCheck({ board: filteredBoard }));
          break;
        case "done":
          dispatch(setBoardDone({ board: filteredBoard }));
          break;
        default:
          break;
      }
    }
  }

  const addButton = (board) => {
    return (
      <ADD
        onClick={() => {
          switch (board) {
            case "inProcess":
              dispatch(setInAddProcess({ status: true }));
              break;
            case "inCheck":
              dispatch(setInAddCheck({ status: true }));
              break;
            case "done":
              dispatch(setInAddDone({ status: true }));
              break;
            default:
              break;
          }
        }}
      >
        <img src={plus} alt="+" />
        <p>Добавить еще одну карточку</p>
      </ADD>
    );
  };

  const addCard = (board) => {
    return (
      <ADD_CONTAINER>
        <TextareaAutosize
          placeholder="Введите текст карточки"
          rowsMin={3}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        ></TextareaAutosize>
        <BUTTON_CONTAINER>
          <ADD_CARD_BUTTON
            onClick={() => {
              if (task.length !== 0) {
                switch (board) {
                  case "inProcess":
                    dispatch(
                      addTaskInProcess({
                        task: task,
                        title:
                          task.length > 50
                            ? `${task.substring(0, 70)}...`
                            : task,
                      })
                    );
                    dispatch(setInAddProcess({ status: false }));
                    setTask("");
                    break;
                  case "inCheck":
                    dispatch(
                      addTaskInCheck({
                        task: task,
                        title:
                          task.length > 50
                            ? `${task.substring(0, 70)}...`
                            : task,
                      })
                    );
                    dispatch(setInAddCheck({ status: false }));
                    setTask("");
                    break;
                  case "done":
                    dispatch(
                      addTaskDone({
                        title:
                          task.length > 50
                            ? `${task.substring(0, 70)}...`
                            : task,
                        task: task,
                      })
                    );
                    dispatch(setInAddDone({ status: false }));
                    setTask("");
                    break;
                  default:
                    break;
                }
              }
            }}
          >
            <p>Добавить карточку</p>
          </ADD_CARD_BUTTON>
          <CANCEL
            onClick={() => {
              switch (board) {
                case "inProcess":
                  dispatch(setInAddProcess({ status: false }));
                  break;
                case "inCheck":
                  dispatch(setInAddCheck({ status: false }));
                  break;
                case "done":
                  dispatch(setInAddDone({ status: false }));
                  break;
                default:
                  break;
              }
            }}
          >
            <p>Отмена</p>
          </CANCEL>
        </BUTTON_CONTAINER>
      </ADD_CONTAINER>
    );
  };

  const inProcessBoard = (
    <BOARD id="list" onDrop={(e) => dropHandter(e, inProcess, "inProcess")}>
      <p>В работе</p>
      <TASKS_LIST>
        {inProcess.tasks.map((t, i) => {
          return (
            <NavLink
              to="/add"
              key={i}
              onClick={() => {
                setAddedTask(t);
                setChangedBoard(inProcess);
                setIndex(i);
              }}
            >
              <li
                draggable={true}
                onDragOver={(e) => dragOverHandler(e)}
                onDragStart={() => dragStartHandler(inProcess, t, "inProcess")}
                onDrop={(e) => dropHandter(e, inProcess, "inProcess")}
                id="task"
              >
                {t.title}
              </li>
            </NavLink>
          );
        })}
      </TASKS_LIST>
      {inProcess.inAdd ? addCard("inProcess") : addButton("inProcess")}
    </BOARD>
  );

  const inCheckBoard = (
    <BOARD id="list" onDrop={(e) => dropHandter(e, inCheck, "inCheck")}>
      <p>На проверке</p>
      <TASKS_LIST>
        {inCheck.tasks.map((t, i) => {
          return (
            <NavLink
              to="/add"
              key={i}
              onClick={() => {
                setAddedTask(t);
                setChangedBoard(inCheck);
                setIndex(i);
              }}
            >
              <li
                draggable={true}
                onDragOver={(e) => dragOverHandler(e)}
                onDragStart={() => dragStartHandler(inCheck, t, "inCheck")}
                onDrop={(e) => dropHandter(e, inCheck, "inCheck")}
                id="task"
              >
                {t.title}
              </li>
            </NavLink>
          );
        })}
      </TASKS_LIST>
      {inCheck.inAdd ? addCard("inCheck") : addButton("inCheck")}
    </BOARD>
  );

  const doneBoard = (
    <BOARD id="list" onDrop={(e) => dropHandter(e, done, "done")}>
      <p>Выполнено</p>
      <TASKS_LIST>
        {done.tasks.map((t, i) => {
          return (
            <NavLink
              to="/add"
              key={i}
              onClick={() => {
                setAddedTask(t);
                setChangedBoard(done);
                setIndex(i);
              }}
            >
              <li
                draggable={true}
                onDragOver={(e) => dragOverHandler(e)}
                onDragStart={() => dragStartHandler(done, t, "done")}
                onDrop={(e) => dropHandter(e, done, "done")}
                id="task"
              >
                {t.title}
              </li>
            </NavLink>
          );
        })}
      </TASKS_LIST>
      {done.inAdd ? addCard("done") : addButton("done")}
    </BOARD>
  );

  return (
    <Fragment>
      <BOARDS_CONTAINER>
        {inProcessBoard}
        {inCheckBoard}
        {doneBoard}
      </BOARDS_CONTAINER>
      <Switch>
        {addedTask ? (
          <Route
            path="/add"
            exact
            render={(props) => (
              <AddToTask
                {...props}
                task={addedTask}
                board={changedBoard}
                index={index}
              />
            )}
          />
        ) : (
          <Route path="/" />
        )}
      </Switch>
    </Fragment>
  );
}

export default withRouter(MainPage);
