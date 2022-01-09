import { useRef } from "react";
import Section from "../../UI/Section";
import classes from "./TaskForm.module.css";

const TaskForm = (props) => {
  const taskInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredValue = taskInputRef.current.value;

    if (enteredValue.trim().length > 0) {
      props.onEnterTask(enteredValue);
    }
    taskInputRef.current.value = "";
  };

  return (
    <Section>
      <form className={classes.form} onSubmit={submitHandler}>
        <input type="text" ref={taskInputRef} />
        <button> {props.loading ? "Sending..." : "Add Task"}</button>
      </form>
    </Section>
  );
};
export default TaskForm;
