function TaskCard(props) {
  return (
    <div style={{
      backgroundColor: "white",
      padding: "20px",
      margin: "15px 0",
      borderRadius: "10px",
      borderLeft: "5px solid #4f46e5",
      boxShadow: "0 3px 10px #ddd"
    }}>
      <h3 style={{ color: "#3730a3" }}>
        {props.task.title}
      </h3>

      <p>{props.task.description}</p>

      <p>
        Status: {props.task.status}
      </p>

      <p>
        Date limite: {props.task.date}
      </p>
    </div>
  );
}

export default TaskCard;