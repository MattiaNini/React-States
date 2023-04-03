import { useContext } from "react";
import { GlobalContext } from "../../store";

import "./index.css";

const Navbar = () => {
  const { state } = useContext(GlobalContext);

  return (
    <div className="Navbar">
      <span> LOGO </span>
      <span className="cart">🛒{state.value}</span>
    </div>
  );
};

export default Navbar;
