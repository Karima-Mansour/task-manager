import TaskCard from "./components/TaskCard";

function TaskList(props) {
  return (
    <div style={{ marginTop: "30px" }}>

      <h2 style={{ color: "#3730a3" }}>
        Liste des tâches
      </h2>

      {props.tasks.length === 0 ? (
        <p>Aucune tâche disponible</p>
      ) : (
        props.tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
          />
        ))
      )}

    </div>
  );
}

export default TaskList;
