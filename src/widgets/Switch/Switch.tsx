import { useState } from "react";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import Card from "../../components/Card/Card";
import styles from "./switch.module.css";

type Props = {
  title: string;
};

const Switch = (props: Props) => {
  const [state, setstate] = useState(false);

  return (
    <Card
      title={props.title}
      clickcallback={() => setstate(!state)}
      icon={state ? <ToggleOnIcon /> : <ToggleOffIcon />}
      isLoading={false}
      color={state ? "var(--color-primary)" : ""}
      alignCenter={true}
    >
      <span className={styles.switch}>
        {state ? "On" : "Off"}
      </span>
    </Card>
  );
};

export default Switch;
