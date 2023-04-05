import { useContext } from "react";
import { Context } from "../../store";
import { calcPercCompletedTasks } from "../../utils/funcs";
import styles from "./index.module.scss";

const Hero = () => {
  const { state } = useContext(Context);

  return (
    <div className={styles.Hero}>
      <h1>BENVENUTO!</h1>
      <div className={styles.texts}>
        <div>
          <p>
            Oggi è {new Date().toLocaleString("it-IT", { weekday: "long" })}
          </p>
          <span>{new Date().toLocaleDateString()}</span>
        </div>
        <div>
          <p>{calcPercCompletedTasks(state.tasksListData)}% Done</p>
          <span>Completed Tasks</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
