import Section from "../../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../../hook/use-http";
const NewTask = (props) => {
 
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.addTask(createdTask);
  };

  const enterTaskHandler = async (task) => {
    sendTaskRequest(
      {
        url: "https://react-http-af29c-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { text: task },
      },
      createTask.bind(null, task)
    );
  };
  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};
export default NewTask;
