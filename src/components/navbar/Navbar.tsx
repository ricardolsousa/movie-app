import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        height: "80px",
        position: "fixed",
        top: 0,
        boxShadow: "0px 0px 10px 0px",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3b3b3b",
        zIndex: 2,
      }}
    >
      <h1
        onClick={() => navigate("/")}
        style={{ color: "#ffffff", cursor: "pointer" }}
      >
        Movie App
      </h1>
    </div>
  );
};

export default Navbar;
