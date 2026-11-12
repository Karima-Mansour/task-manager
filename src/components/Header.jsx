
function Header() {
  return (
    <header style={{
      backgroundColor: "#4f46e5",
      color: "white",
      padding: "20px 30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: "12px"
    }}>
      <h1>TaskManager</h1>

      <button style={{
        backgroundColor: "white",
        color: "#4f46e5",
        padding: "10px 20px",
        border: "none",
        borderRadius: "7px",
        cursor: "pointer"
      }}>
        Connexion
      </button>
    </header>
  );
}
export default Header;