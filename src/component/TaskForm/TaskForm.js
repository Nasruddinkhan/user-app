import { useRef, useState } from "react";
import Section from "../../UI/Section";
import classes from "./TaskForm.module.css";

const TaskForm = (props) => {
  const taskInputRef = useRef();
  const [taskInput, setTaskInput ] = useState('');
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredValue = taskInputRef.current.value;

    if (enteredValue.trim().length > 0) {
      props.onEnterTask(enteredValue);
    }
    setTaskInput('');
    //taskInputRef.current.value = ""; // It's not good, it will update the real dom
  };
 const inputTextHandler = (event) => {
   event.preventDefault();
    setTaskInput(event.target.value);
 };
  return (
    <Section>
      <form className={classes.form} onSubmit={submitHandler}>
        <input type="text" value={taskInput} onChange={inputTextHandler} ref={taskInputRef} />
        <button> {props.loading ? "Sending..." : "Add Task"}</button>
      </form>
    </Section>
  );
};
export default TaskForm;
